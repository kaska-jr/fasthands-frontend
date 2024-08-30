import { configureStore } from "@reduxjs/toolkit";
import ToggleMenuReducer from "./features/artisan-admin/ToggleMenuSlice";

export const store = configureStore({
  reducer: {
    toggleMenu: ToggleMenuReducer,
  },
});
