import { ReactNode } from 'react';

export type ChildrenData = {
  children: ReactNode;
};

export interface AuthProps {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  'not-before-policy': number;
  session_state: string;
  scope: string;
  email: string;
}

export interface CredentialsProps {
  email: string;
  password: string;
}

export interface AuthContextData {
  loading: boolean;
  error: string | null;
  data: AuthProps;
  singIn: (credential: CredentialsProps) => Promise<void>;
  singOut: () => void;
}
