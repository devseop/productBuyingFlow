import { useState } from "react";

/** 다양한 곳에서 사용되므로 타입을 Generic으로 적용 */
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
