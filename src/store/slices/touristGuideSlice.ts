import {
  CreateTouristGuide,
  DeleteTouristGuide,
  TouristGuideSlice,
  UpdateTouristGuide,
} from "@/types/touristGuide";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TouristGuideSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getTouristGuide = createAsyncThunk(
  "get/TouristGuide",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/tourist-guide`);
    const data = await response.json();
    thunkApi.dispatch(setTouristGuide(data));
  }
);

export const createTouristGuide = createAsyncThunk(
  "create/TouristGuide",
  async (option: CreateTouristGuide, thunkApi) => {
    const { name, price, language, isAvailable, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/tourist-guide`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, price, language, isAvailable }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateTouristGuide = createAsyncThunk(
  "update/TouristGuide",
  async (option: UpdateTouristGuide, thunkApi) => {
    const { id, name, price, language, isAvailable, onSuccess, onError } =
      option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/tourist-guide?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, price, language, isAvailable }),
        }
      );
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const deleteTouristGuide = createAsyncThunk(
  "delete/TouristGuide",
  async (option: DeleteTouristGuide, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/tourist-guide?id=${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
const touristGuideSlice = createSlice({
  name: "touristGuide",
  initialState,
  reducers: {
    setTouristGuide: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setTouristGuide } = touristGuideSlice.actions;
export default touristGuideSlice.reducer;
