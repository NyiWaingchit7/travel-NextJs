import { BusSlice } from "@/types/bus";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BusSlice = {
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
