import { useState } from "react";

export const useInput = <T extends Record<string, string>>(initailValue: T) => {
  const [values, setValues] = useState<T>(initailValue);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return [values, inputChangeHandler] as const;
};
