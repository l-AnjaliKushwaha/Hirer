import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeData: null,
  isAuth: false,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isAuth = true), (state.employeeData = action.payload.employeeData);
    },
    logout: (state, action) => {
      (state.isAuth = false), (state.employeeData = null);
    },
  },
});

export const { login, logout } = employeeSlice.actions;

export default employeeSlice.reducer;
