import {
  CreateHotel,
  DeleteHotel,
  HotelSLice,
  UpdateHotel,
} from "@/types/hotel";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: HotelSLice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getHotel = createAsyncThunk("get/Hotel", async (_, thunkApi) => {
  const response = await fetch(`${config.apiBaseUrl}/hotel`);
  const { data } = await response.json();
  thunkApi.dispatch(setHotel(data));
});

export const createHotel = createAsyncThunk(
  "create/Hotel",
  async (option: CreateHotel, thunkApi) => {
    const { name, description, cityId, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/hotel`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, description, cityId }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateHotel = createAsyncThunk(
  "update/Hotel",
  async (option: UpdateHotel, thunkApi) => {
    const { id, name, description, cityId, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/hotel?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, description, cityId }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const deleteHotel = createAsyncThunk(
  "delete/Hotel",
  async (option: DeleteHotel, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/hotel?id=${id}`, {
        method: "DELETE",
      });

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotel: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
