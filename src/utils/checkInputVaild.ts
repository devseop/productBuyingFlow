import { DetailInfoProps } from "../types/types";

export const checkInputVaild = (inputValue: DetailInfoProps) => {
  const { realname, phone, address } = inputValue;
  let isValid = false;

  if (realname.length > 0 && phone.length >= 10 && address.length > 0) {
    return (isValid = true);
  }

  return isValid;
};
