import {
  AirLineSlice,
  CreateAirLineOptions,
  DeleteAirLineOptions,
  UpdateAirLineOptions,
} from "@/types/airLine";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AirLineSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getAirLine = createAsyncThunk(
  "airLine/getAirLine",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/air-line`);
    const { data } = await response.json();
    thunkApi.dispatch(setAirLine(data));
  }
);

export const createAirLine = createAsyncThunk(
  "airLine/createAirLine",
  async (options: CreateAirLineOptions, thunkApi) => {
    const {
      onError,
      onSuccess,
      name,
      assetUrl,
      address,
      phoneNumber1,
      phoneNumber2,
      cityId,
    } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/air-line`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,

          assetUrl,
          address,
          phoneNumber1,
          phoneNumber2,
          cityId,
        }),
      });
      const data = await response.json();

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

export const updateAirLine = createAsyncThunk(
  "airLine/updateAirLine",
  async (option: UpdateAirLineOptions, thunkApi) => {
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
      const response = await fetch(`${config.apiBaseUrl}/air-line`, {
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

export const deleteAirLine = createAsyncThunk(
  "airLin/deleteAirLine",
  async (option: DeleteAirLineOptions, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/air-line`, {
        method: "DELETE",
      });

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const airLineSlice = createSlice({
  name: "airLine",
  initialState,
  reducers: {
    setAirLine: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setAirLine } = airLineSlice.actions;
export default airLineSlice.reducer;
