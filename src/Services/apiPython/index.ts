import axios, { AxiosError, AxiosInstance } from 'axios';

import { getStorage, settingStorage } from '@/utils/storage';

import { apiNode } from '../apiNode';

type SignOut = () => void;

type PromiseType = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

const apiPython = axios.create({
  baseURL: import.meta.env.VITE_URL_API_PYTHON,
}) as APIInstanceProps;

let failedQueued: Array<PromiseType> = [];
let isRefreshing = false;

apiPython.defaults.headers.common['x-access-origin'] =
  import.meta.env.VITE_ACCESS_ORIGIN;

apiPython.registerInterceptTokenManager = (singOut) => {
  const interceptTokenManager = apiPython.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError.response?.status === 401) {
        if (
          requestError.response.statusText === 'Unauthorized' &&
          requestError.response.data.detail === 'Invalid token'
        ) {
          const dataStorage = getStorage();

          if (!dataStorage) {
            singOut();
            return Promise.reject(requestError);
          }

          const dataParse = JSON.parse(dataStorage);

          const originalRequestConfig = requestError.config;

          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueued.push({
                onSuccess: (token: string) => {
                  originalRequestConfig.headers = {
                    Authorization: `Bearer ${token}`,
                  };
                  resolve(apiPython(originalRequestConfig));
                },
                onFailure: (error: AxiosError) => {
                  reject(error);
                },
              });
            });
          }

          isRefreshing = true;

          return new Promise((resolve, reject) => {
            apiNode
              .post('/auth/refresh-token', {
                refreshToken: dataParse.refresh_token,
              })
              .then(({ data }) => {
                settingStorage({ ...dataParse, ...data });

                if (originalRequestConfig.data) {
                  originalRequestConfig.data = JSON.parse(
                    originalRequestConfig.data,
                  );
                }

                originalRequestConfig.headers = {
                  Authorization: `Bearer ${data.access_token}`,
                };

                apiPython.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;

                failedQueued.forEach((request) => {
                  request.onSuccess(data.token);
                });

                resolve(apiPython(originalRequestConfig));
              })
              .catch((error) => {
                failedQueued.forEach((request) => {
                  request.onFailure(error);
                });

                singOut();
                reject(error);
              })
              .finally(() => {
                isRefreshing = false;
                failedQueued = [];
              });
          });
        }

        singOut();
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(requestError);
      } else {
        return Promise.reject(requestError);
      }
    },
  );

  return () => {
    apiPython.interceptors.response.eject(interceptTokenManager);
  };
};

export { apiPython };
