import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfoProps } from "../../types/types";

type UserState = {
  token?: string;
  userInfo?: UserInfoProps;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    singInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.loading = false;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.token = undefined;
      state.userInfo = undefined;
    },
  },
});

export const { singInStart, signInSuccess, signInFailure, signOut } =
  userSlice.actions;

export default userSlice.reducer;
