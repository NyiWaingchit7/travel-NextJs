import { AirLineSlice } from "@/types/airLine";
import {
  CreateBusOptions,
  DeleteBusOptions,
  UpdateBusOptions,
} from "@/types/bus";
import { config } from "@/utils/config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AirLineSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getBus = createAsyncThunk("bus/getBus", async (_, thunkApi) => {
  const response = await fetch(`${config.apiBaseUrl}/bus`);
  const { data } = await response.json();
  thunkApi.dispatch(setBus(data));
});

export const createBus = createAsyncThunk(
  "bus/createBus",
  async (options: CreateBusOptions, thunkApi) => {
    const {
      name,
      assetUrl,
      to,
      address,
      phoneNumber1,
      phoneNumber2,
      cityId,
      isAvailable,
      onSuccess,
      onError,
    } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/bus`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          assetUrl,
          to,
          address,
          phoneNumber1,
          phoneNumber2,
          cityId,
          isAvailable,
        }),
      });
      const data = await response.json();

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

export const updateBus = createAsyncThunk(
  "bus/updateBus",
  async (option: UpdateBusOptions, thunkApi) => {
    const {
      id,
      name,
      assetUrl,
      to,
      address,
      phoneNumber1,
      phoneNumber2,
      cityId,
      isAvailable,
      onSuccess,
      onError,
    } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/bus`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id,
          name,
          assetUrl,
          to,
          address,
          phoneNumber1,
          phoneNumber2,
          cityId,
          isAvailable,
        }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

export const deleteBus = createAsyncThunk(
  "bus/deleteBus",
  async (option: DeleteBusOptions, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/bus?id=${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    setBus: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setBus } = busSlice.actions;
export default busSlice.reducer;
