import { ReactNode } from 'react';

export type ChildrenData = {
  children: ReactNode;
};

export interface DisplayContextData {
  display: number;
  settingDisplay: (value: number) => void;
}
