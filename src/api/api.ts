import axios, { AxiosResponse } from "axios";
import { ProductProps, ProductsList } from "../types/types";
import { isProductList, isProductProps } from "../types/guard";

export const getData = async (): Promise<ProductsList> => {
  try {
    const res: AxiosResponse<ProductsList> = await axios(
      "https://fakestoreapi.com/products",
    );
    if (isProductList(res.data)) {
      console.log("✅ getData() is OK");
      console.log(res.data);
      return res.data;
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
      `https://fakestoreapi.com/products/${id}`,
    );
    if (isProductProps(res.data)) {
      console.log("✅ getProductData() is OK");
      console.log(res.data);
      return res.data;
    } else {
      throw new Error("Invalid data format from API.");
    }
  } catch (err) {
    console.error("Fetch data error:", err);
    throw err;
  }
};
