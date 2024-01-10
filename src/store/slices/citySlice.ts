import { CitySlice } from "@/types/city";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CitySlice = {
  items: [],
  isLoading: false,
  error: null,
};
const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
