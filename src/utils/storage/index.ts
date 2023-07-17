import { AuthProps } from '@/contexts/auth/interfaces';

export function settingStorage(dataStorage: AuthProps) {
  localStorage.setItem(
    `${import.meta.env.VITE_KEY_STORAGE}:user`,
    JSON.stringify(dataStorage),
  );
}

export function getStorage() {
  return localStorage.getItem(`${import.meta.env.VITE_KEY_STORAGE}:user`);
}

export function removeStorage() {
  const keysToRemove = [`${import.meta.env.VITE_KEY_STORAGE}:user`];
  keysToRemove.forEach((item) => localStorage.removeItem(item));
}

export function settingLanguage(lng: string) {
  localStorage.setItem(
    `${import.meta.env.VITE_KEY_STORAGE}:lng`,
    JSON.stringify({ lng }),
  );
}

export function getLanguage() {
  return localStorage.getItem(`${import.meta.env.VITE_KEY_STORAGE}:lng`);
}
