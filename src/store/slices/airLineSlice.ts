import { AirLineSlice } from "@/types/airLine";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AirLineSlice = {
  items: [],
  isLoading: false,
  error: null,
};
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
