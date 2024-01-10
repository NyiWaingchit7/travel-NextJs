import {
  CitySlice,
  CreateCityOptions,
  DeleteCityOptions,
  UpdateCityOptions,
} from "@/types/city";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: CitySlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getCity = createAsyncThunk("city/getCity", async (_, thunkApi) => {
  const response = await fetch(`${config.apiBaseUrl}/city`);
  const data = await response.json();
  thunkApi.dispatch(setCity(data));
});

const createCity = createAsyncThunk(
  "city/createCity",
  async (options: CreateCityOptions, thunkApi) => {
    const { onError, onSuccess, name, assetUrl, description } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/city`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          assetUrl,
        }),
      });
      const data = await response.json();

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const updateCity = createAsyncThunk(
  "city/updateCity",
  async (option: UpdateCityOptions, thunkApi) => {
    const { id, name, description, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/city?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, description }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

export const deleteCity = createAsyncThunk(
  "city/deleteCity",
  async (option: DeleteCityOptions, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/city?id=${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
