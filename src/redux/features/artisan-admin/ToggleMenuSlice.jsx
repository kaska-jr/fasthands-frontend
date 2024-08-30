import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavBar: false,
};

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isNavBar = true;
    },
    closeMenu: (state) => {
      state.isNavBar = false;
    },
  },
});

export const { openMenu, closeMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
