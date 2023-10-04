import { useState, useEffect } from "react";
import { getData } from "../../api/api";
import { ProductsList, ProductProps } from "../../types/types";
import { ProductItem } from "./ProductItem";
import styled from "@emotion/styled";
import { AppLayout } from "../AppLayout";

export const ProductList = () => {
  const [productList, setProductList] = useState<ProductsList>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProductList(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <AppLayout pageTitle="Products">
      <ListContainer>
        {productList?.map((product: ProductProps) => (
          <ProductItem data={product} key={product.id} />
        ))}
      </ListContainer>
    </AppLayout>
  );
};

const ListContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;
