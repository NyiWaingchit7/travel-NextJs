import { AppSlice, GetAppDataOptions } from "@/types/app";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAirLine } from "./airLineSlice";
import { setBus } from "./busSlice";
import { setCity } from "./citySlice";
import { setHotel } from "./hotelSlice";
import { setlocation } from "./locationSlice";
import { setroom } from "./roomSlice";
import { setTouristGuide } from "./touristGuideSlice";

const initialState: AppSlice = {
  init: false,
  isLoading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  "app/fetchAppData",
  async (_, thunkAPI) => {
    const response = await fetch(`${config.apiBaseUrl}/app`);
    const appData = await response.json();
    const { city, location, hotel, room, bus, airLine, touristGuide } = appData;

    thunkAPI.dispatch(setInit(true));
    thunkAPI.dispatch(setCity(city));
    thunkAPI.dispatch(setBus(bus));
    thunkAPI.dispatch(setHotel(hotel));
    thunkAPI.dispatch(setlocation(location));
    thunkAPI.dispatch(setroom(room));
    thunkAPI.dispatch(setTouristGuide(touristGuide));
    thunkAPI.dispatch(setAirLine(airLine));
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInit: (state, action) => {
      state.init = action.payload;
    },
  },
});

export const { setInit } = appSlice.actions;
export default appSlice.reducer;
