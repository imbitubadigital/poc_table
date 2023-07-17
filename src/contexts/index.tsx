import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { DisplayProvider } from './display';
import { ExamProvider } from './exam';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <DisplayProvider>
      <AuthProvider>
        <ExamProvider>{children}</ExamProvider>
      </AuthProvider>
    </DisplayProvider>
  );
}
//
