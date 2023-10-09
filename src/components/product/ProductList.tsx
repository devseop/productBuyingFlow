import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { ProductItem } from "./ProductItem";
import { AppLayout } from "../AppLayout";

import { getData } from "../../api/api";
import { RootState } from "../../rtk/store";
import {
  fetchProductListFailure,
  fetchProductListStart,
  fetchProductListSuccess,
} from "../../rtk/slice/productSlice";

import { ProductListProps, ProductProps } from "../../types/types";
import { AppHeader } from "../AppHeader";

export const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.product.productList,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchProductListStart());
        const data = await getData();
        dispatch(fetchProductListSuccess(data as ProductListProps));
      } catch (err) {
        dispatch(fetchProductListFailure(String(err)));
      }
    };
    fetchData();
  }, [dispatch]);

  //TODO: 새로고침 시에도 로그인 정보가 유지되어야 함
  return (
    <>
      <AppHeader pageTitle="Products" />
      <AppLayout>
        <ListContainer>
          {productList?.map((product: ProductProps) => (
            <ProductItem data={product} key={product.id} />
          ))}
        </ListContainer>
      </AppLayout>
    </>
  );
};

const ListContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;
