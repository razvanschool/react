import { useState, useEffect } from "react";

const useLocalStorage = (key = null) => {
  const [localData, setLocalData] = useState(null);
  const [isLocalDataEmpty, setIsLocalDataEmpty] = useState(false);

  const resetLocalData = () => {
    localStorage.clear();
  };

  const handleLocalData = (key, value) => {
    if (key !== null && value) localStorage.setItem(key, value);
  };

  const getData = () => {
    if (key) {
      const local = localStorage.getItem(key);
      local ? setLocalData(local) : setIsLocalDataEmpty(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { localData, resetLocalData, handleLocalData, isLocalDataEmpty };
};

export default useLocalStorage;
