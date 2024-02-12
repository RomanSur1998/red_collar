import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./clices/DataSlice";

export const store = configureStore({
  reducer: {
    data: DataSlice,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // devTools: process.env.NODE_ENV !== "production",
  },
});
