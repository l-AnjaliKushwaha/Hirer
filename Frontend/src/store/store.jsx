import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import employeeReducer from "./Reducers/employeeSlice";
import internshipReducer from "./Reducers/internshipSlice";
import jobReducer from "./Reducers/jobSlice";
import resumeReducer from "./Reducers/resumeSlice";

const store = configureStore({
  reducer: {
    userReducer,
    employeeReducer,
    internshipReducer,
    jobReducer,
    resumeReducer,
  },
});

export default store;
