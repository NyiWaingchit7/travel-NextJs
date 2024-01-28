import {
  ContactUsSLice,
  CreateContactUsOptions,
  UpdateContactUsOptions,
} from "@/types/contactUs";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ContactUsSLice = {
  items: [],
  isLoading: false,
  error: null,
};

export const getContactUs = createAsyncThunk(
  "contactUs/getContactUs",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/contact-us`);
    const { data } = await response.json();
    thunkApi.dispatch(setContactUs(data));
  }
);

export const createContactUs = createAsyncThunk(
  "contactUs/createContactUs",
  async (options: CreateContactUsOptions, thunkApi) => {
    const { onError, onSuccess, name, contact, advice } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/contact-us`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          advice,
        }),
      });
      const { data } = await response.json();

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

export const updateContactUs = createAsyncThunk(
  "contactUs/updateContactUs",
  async (option: UpdateContactUsOptions, thunkApi) => {
    const { id, isRead, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/contact-us?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ isRead }),
      });
      const { data } = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    setContactUs: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setContactUs } = contactUsSlice.actions;
export default contactUsSlice.reducer;
