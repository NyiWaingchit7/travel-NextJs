import {
  CreateLocation,
  DeleteLocation,
  LocationSlice,
  UpdateLocation,
} from "@/types/location";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: LocationSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getLocation = createAsyncThunk(
  "get/location",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/location`);
    const { data } = await response.json();
    thunkApi.dispatch(setlocation(data));
  }
);

export const createLocation = createAsyncThunk(
  "create/location",
  async (option: CreateLocation, thunkApi) => {
    const { name, title, description, cityId, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/location`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, title, description, cityId }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateLocation = createAsyncThunk(
  "update/location",
  async (option: UpdateLocation, thunkApi) => {
    const { id, name, title, description, cityId, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/location?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, title, description, cityId }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const deleteLocation = createAsyncThunk(
  "delete/location",
  async (option: DeleteLocation, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/location?id=${id}`, {
        method: "DELETE",
      });
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setlocation: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setlocation } = locationSlice.actions;
export default locationSlice.reducer;
