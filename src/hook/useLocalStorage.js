export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
};
