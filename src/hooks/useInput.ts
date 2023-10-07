import { useState } from "react";

/** 다양한 곳에서 사용되므로 타입을 Generic으로 적용 */
export const useInput = <T extends Record<string, string>>(initailValue: T) => {
  const [values, setValues] = useState<T>(initailValue);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "phone") {
      if (value.length === 10) {
        processedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
      if (value.length === 13) {
        processedValue = value
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      }
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: processedValue,
    }));
  };

  return [values, inputChangeHandler] as const;
};
