import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(localStorage.getItem(key));
  }, [key]);

  const setLocalStorage = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return { setLocalStorage, value };
};
