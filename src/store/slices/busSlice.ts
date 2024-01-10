import { AirLineSlice } from "@/types/airLine";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AirLineSlice = {
  items: [],
  isLoading: false,
  error: null,
};
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
