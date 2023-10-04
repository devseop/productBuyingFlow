import axios, { AxiosResponse } from "axios";
import { ProductProps, ProductsList } from "../types/types";

export const getData = async (): Promise<ProductsList> => {
  try {
    const res: AxiosResponse<ProductsList> = await axios(
      "https://jsonplaceholder.typicode.com/photos",
    );
    // console.log(res.data.slice(0, 24));
    return res.data.slice(0, 24);
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
    return res.data;
  } catch (err) {
    console.error("Fetch data error:", err);
    throw err;
  }
};
