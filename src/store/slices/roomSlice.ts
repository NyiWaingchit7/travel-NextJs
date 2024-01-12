import { CreateRoom, DeleteRoom, RoomSlice, UpdateRoom } from "@/types/room";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: RoomSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getRoom = createAsyncThunk("get/Room", async (_, thunkApi) => {
  const response = await fetch(`${config.apiBaseUrl}/room`);
  const data = await response.json();
  thunkApi.dispatch(setroom(data));
});

export const createRoom = createAsyncThunk(
  "create/Room",
  async (option: CreateRoom, thunkApi) => {
    const { type, price, hotelId, isAvailable, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/room`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type, price, hotelId, isAvailable }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateRoom = createAsyncThunk(
  "update/Room",
  async (option: UpdateRoom, thunkApi) => {
    const { id, type, price, hotelId, isAvailable, onSuccess, onError } =
      option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/room?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type, price, hotelId, isAvailable }),
      });
      const { data } = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const deleteRoom = createAsyncThunk(
  "delete/Room",
  async (option: DeleteRoom, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/room?id=${id}`, {
        method: "DELETE",
      });

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
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
