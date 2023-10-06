import { useLocation } from "react-router-dom";

export const useProductId = () => {
  const location = useLocation();
  const substringToRemove = "/products/";
  return location.pathname.replace(substringToRemove, "");
};
