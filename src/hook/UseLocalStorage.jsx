import { useState, useEffect } from "react";

const Prefix = `contact-list-`;

const UseLocalStorage = (key, initialvalue) => {
  const PrefixedKey = Prefix + key;
  const [value, setvalue] = useState(() => {
    const jsonvalue = localStorage.getItem(PrefixedKey);
    if (jsonvalue != null) return JSON.parse(jsonvalue);
    if (initialvalue === "function") {
      return initialvalue();
    } else {
      return initialvalue;
    }
  });
  useEffect(() => {
    localStorage.setItem(PrefixedKey, JSON.stringify(value));
  }, [PrefixedKey, value]);
  return [value, setvalue];
};

export default UseLocalStorage;
