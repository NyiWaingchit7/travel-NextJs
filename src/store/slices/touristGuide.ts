import { TouristGuideSlice } from "@/types/touristGuide";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TouristGuideSlice = {
  items: [],
  isLoading: false,
  error: null,
};
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
