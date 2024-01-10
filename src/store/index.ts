import { configureStore } from "@reduxjs/toolkit";
import airLineReducer from "./slices/airLineSlice";
import appReducer from "./slices/appSlice";
import busReducer from "./slices/busSlice";
import cityReducer from "./slices/citySlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    airLine: airLineReducer,
    bus: busReducer,
    city: cityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
