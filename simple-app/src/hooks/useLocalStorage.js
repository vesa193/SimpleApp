import { useState } from 'react';

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }

      localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {
      const err = new Error(error.message);
      return err;
    }

    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
