import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isAuth = true), (state.userData = action.payload.userData);
    },
    logout: (state, action) => {
      (state.isAuth = false), (state.userData = null);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
