import { RoomSlice } from "@/types/room";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RoomSlice = {
  items: [],
  isLoading: false,
  error: null,
};
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setroom: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setroom } = roomSlice.actions;
export default roomSlice.reducer;
