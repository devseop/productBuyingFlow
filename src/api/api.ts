import axios from "axios";
import { ProductProps, ProductListProps, UserInfoProps } from "../types/types";
import { isProductList, isProductProps } from "../types/guard";
import { fetchWithCache } from "../utils/cache/cacheForProducts";
import { storeTokenInCache } from "../utils/cache/cacheForUser";

export const getData = async (
  id?: number,
): Promise<ProductListProps | ProductProps> => {
  const url = id
    ? `https://fakestoreapi.com/products/${id}`
    : "https://fakestoreapi.com/products";

  const res = await fetchWithCache(url);
  const data: ProductListProps | ProductProps = await res.json();

  const isValid = id ? isProductProps(data) : isProductList(data);

  if (isValid) {
    return data;
  } else {
    throw new Error("Invalid data format from API.");
  }
};

export const signInApi = async (userInfo: UserInfoProps) => {
  try {
    const res = await axios.post(
      "https://fakestoreapi.com/auth/login",
      userInfo,
    );
    const token = res.data.token;

    storeTokenInCache(userInfo, token);

    return token;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};
