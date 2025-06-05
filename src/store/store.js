import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "../features/vehicalSlice";

export const store = configureStore({
  reducer: {
    vehicleInfo: vehicleReducer,

  }
});