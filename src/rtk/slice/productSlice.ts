import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps, ProductListProps } from "../../types/types";

type ProductState = {
  productList: ProductListProps;
  selectedProduct?: ProductProps;
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  productList: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductListStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductListSuccess: (
      state,
      action: PayloadAction<ProductListProps>,
    ) => {
      state.productList = action.payload;
      state.loading = false;
    },
    fetchProductListFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductByIdSuccess: (state, action: PayloadAction<ProductProps>) => {
      state.selectedProduct = action.payload;
      state.loading = false;
    },
    fetchProductByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductListStart,
  fetchProductListSuccess,
  fetchProductListFailure,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} = productSlice.actions;

export default productSlice.reducer;
