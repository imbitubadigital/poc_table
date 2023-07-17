import { apiPython } from '@/Services/apiPython';
import { createContext, useCallback, useContext, useState } from 'react';
import { useAuth } from '../auth';

import {
  ChildrenData,
  ExamContextData,
  ExamProps,
  PayloadGetExam,
} from './interfaces';

const ExamContext = createContext<ExamContextData>({} as ExamContextData);

export const ExamProvider = ({ children }: ChildrenData) => {
  const { data } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exam, setExam] = useState<ExamProps>({} as ExamProps);

  const getExam = useCallback(
    async (payload: PayloadGetExam) => {
      try {
        if (!payload.sop_instance_uid) {
          return setError('notInformedId');
        }

        setLoading(true);
        const checkExist = await apiPython.get(
          `/verify/${payload.sop_instance_uid}`,
        );
        if (checkExist.data.status === 'COMPLETE') {
          const response = await apiPython.post('/escano-structured', {
            ...payload,
            email: data.email,
          });
          setError(null);
          return setExam(response.data);
        }
        setError(checkExist.data.status);
      } catch (error) {
        setError('unexpectedError');
      } finally {
        setLoading(false);
      }
    },
    [data.email],
  );

  return (
    <ExamContext.Provider value={{ exam, getExam, loading, error }}>
      {children}
    </ExamContext.Provider>
  );
};

export function useExam(): ExamContextData {
  const context = useContext(ExamContext);

  return context;
}
