import axios, { AxiosResponse } from "axios";
import { ProductProps, ProductsList } from "../types/types";

/* eslint-disable @typescript-eslint/no-explicit-any */

const isProductProps = (data: any): data is ProductProps => {
  return (
    typeof data.albumId === "number" &&
    typeof data.id === "number" &&
    typeof data.thumbnailUrl === "string" &&
    typeof data.title === "string" &&
    typeof data.url === "string"
  );
};

const isProductList = (data: any): data is ProductsList => {
  return Array.isArray(data) && data.every(isProductProps);
};

export const getData = async (): Promise<ProductsList> => {
  try {
    const res: AxiosResponse<ProductsList> = await axios(
      "https://jsonplaceholder.typicode.com/photos",
    );
    if (isProductList(res.data)) {
      return res.data.slice(0, 24);
    } else {
      throw new Error("Invalid data format from API.");
    }
  } catch (err) {
    console.error("Fetch data error:", err);
    throw err;
  }
};

export const getProductData = async (id: number): Promise<ProductProps> => {
  try {
    const res: AxiosResponse<ProductProps> = await axios(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
    );
    if (isProductProps(res.data)) {
      return res.data;
    } else {
      throw new Error("Invalid data format from API.");
    }
  } catch (err) {
    console.error("Fetch data error:", err);
    throw err;
  }
};
