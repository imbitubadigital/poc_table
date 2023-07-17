import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ChildrenData, DisplayContextData } from './interfaces';

const DisplayContext = createContext<DisplayContextData>(
  {} as DisplayContextData,
);

export const DisplayProvider = ({ children }: ChildrenData) => {
  const [display, setDisplay] = useState(1380);

  const settingDisplay = useCallback((value: number) => {
    localStorage.setItem('@scanometry:display', String(value));
    setDisplay(value);
  }, []);

  useEffect(() => {
    const value = localStorage.getItem('@scanometry:display');
    if (value) {
      setDisplay(Number(value));
    }
  }, []);

  return (
    <DisplayContext.Provider value={{ display, settingDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export function useDisplay(): DisplayContextData {
  const context = useContext(DisplayContext);

  return context;
}
