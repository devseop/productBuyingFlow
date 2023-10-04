import { useState, useEffect } from "react";
import { getData } from "../../api/api";
import { ProductsList, ProductProps } from "../../types/types";
import { ProductItem } from "./ProductItem";
import styled from "@emotion/styled";

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
    <ListContainer>
      {productList?.map((product: ProductProps) => (
        <ProductItem data={product} key={product.id} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;
