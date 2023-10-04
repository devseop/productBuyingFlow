import { useEffect, useState } from "react";
import { getProductData } from "../../api/api";
import { ProductProps } from "../../types/types";
import { useLocation } from "react-router-dom";
import { AppLayout } from "../AppLayout";

export const ProductDetail = () => {
  const [product, setProduct] = useState<ProductProps>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.pathname);
  const productId = searchParams.size;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getProductData(productId);
        setProduct(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <AppLayout pageTitle="Detail">
      <div>
        <p>product detail</p>
        <p>{product?.title}</p>
      </div>
    </AppLayout>
  );
};
