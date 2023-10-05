import { ProductProps, ProductsList } from "../types/types";
import { isProductList, isProductProps } from "../types/guard";
import { fetchProductById, fetchProducts } from "../utils/cache";

export const getData = async (): Promise<ProductsList> => {
  try {
    const res = await fetchProducts();
    const data: ProductsList = await res.json();

    if (isProductList(data)) {
      console.log("✅ success to get products data");
      return data;
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
    const res = await fetchProductById(id);
    const data: ProductProps = await res.json();
    if (isProductProps(data)) {
      console.log("✅ success to get product detail data");
      console.log(data);
      return data;
    } else {
      throw new Error("Invalid data format from API.");
    }
  } catch (err) {
    console.error("Fetch data error:", err);
    throw err;
  }
};
