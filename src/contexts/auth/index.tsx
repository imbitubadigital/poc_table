import { apiNode } from '@/Services/apiNode';
import { apiPython } from '@/Services/apiPython';
import {
  getLanguage,
  getStorage,
  removeStorage,
  settingStorage,
} from '@/utils/storage';
import { AxiosError } from 'axios';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  ChildrenData,
  AuthContextData,
  AuthProps,
  CredentialsProps,
} from './interfaces';
import { changeLanguage } from 'i18next';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: ChildrenData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AuthProps>({} as AuthProps);

  const settingData = useCallback((dataUser: AuthProps) => {
    settingStorage(dataUser);
    setData(dataUser);
  }, []);

  const singIn = useCallback(
    async (credential: CredentialsProps) => {
      try {
        setLoading(true);

        const response = await apiNode.post('/auth/session', credential);
        apiPython.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
        settingData({ ...response.data, email: credential.email });
        setError('');
      } catch (error: unknown) {
        const isAxiosError = (error as AxiosError).isAxiosError;
        if (isAxiosError) {
          setError('invalidCredential');
        } else {
          setError('unexpectedError');
        }
      } finally {
        setLoading(false);
      }
    },
    [settingData],
  );

  const singOut = useCallback(() => {
    removeStorage();
    setData({} as AuthProps);
  }, []);

  useEffect(() => {
    function loadStorageData(): void {
      const storageLng = getLanguage();
      if (storageLng) {
        const lngParse = JSON.parse(storageLng);
        changeLanguage(lngParse.lng);
      }

      const dataStorage = getStorage();
      if (dataStorage) {
        const dataParse = JSON.parse(dataStorage);
        apiPython.defaults.headers.common.Authorization = `Bearer ${dataParse.access_token}`;
        settingData(dataParse);
      }
    }
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const subscribe = apiPython.registerInterceptTokenManager(singOut);

    return () => {
      subscribe();
    };
  }, [singOut]);

  return (
    <AuthContext.Provider value={{ data, singIn, singOut, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
