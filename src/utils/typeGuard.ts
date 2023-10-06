import { ProductProps, ProductListProps } from "../types/types";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const isProductProps = (data: any): data is ProductProps => {
  const { id, title, price, description, category, image, rating } = data;

  return (
    typeof id === "number" &&
    typeof title === "string" &&
    typeof price === "number" &&
    typeof description === "string" &&
    typeof category === "string" &&
    typeof image === "string" &&
    typeof rating === "object"
  );
};

export const isProductList = (data: any): data is ProductListProps => {
  return Array.isArray(data) && data.every(isProductProps);
};
