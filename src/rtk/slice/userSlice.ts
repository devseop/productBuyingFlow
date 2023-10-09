import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasicInfoProps, DetailInfoProps } from "../../types/types";

type UserState = {
  token?: string;
  userInfo?: {
    basic?: BasicInfoProps;
    detail?: DetailInfoProps;
  };
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
    saveUserInfo: (state, action: PayloadAction<BasicInfoProps>) => {
      if (!state.userInfo) {
        state.userInfo = {};
      }
      state.userInfo.basic = action.payload;
    },
    saveDetailInfo: (state, action: PayloadAction<DetailInfoProps>) => {
      if (!state.userInfo) {
        state.userInfo = {};
      }
      state.userInfo.detail = action.payload;
    },
    signInStart: (state) => {
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

export const {
  saveUserInfo,
  saveDetailInfo,
  signInStart,
  signInSuccess,
  signInFailure,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
