import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuData: {},
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuInfo: (state, action) => {
      state.menuData = action.payload;
    },
  },
});

export const { setMenuInfo } = menuSlice.actions;
export default menuSlice.reducer;
