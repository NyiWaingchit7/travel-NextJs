import { AppSlice } from "@/type/app";
import { config } from "@/util/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: AppSlice = {
  init: false,
  isLoading: false,
  error: null,
};
export const fetchAppData = createAsyncThunk(
  "app/fetch",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}`);
    const data = await response.json();
  }
);

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setInit: (store, action) => {
      store.init = action.payload;
    },
  },
});
export const { setInit } = appSlice.actions;
export default appSlice.reducer;
