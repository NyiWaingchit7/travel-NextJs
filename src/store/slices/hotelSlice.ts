import { HotelSLice } from "@/types/hotel";
import { createSlice } from "@reduxjs/toolkit";

const initialState: HotelSLice = {
  items: [],
  isLoading: false,
  error: null,
};
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    sethotel: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { sethotel } = hotelSlice.actions;
export default hotelSlice.reducer;
