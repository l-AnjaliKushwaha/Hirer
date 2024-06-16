import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  internshipData: null,
};

const internshipSlice = createSlice({
  name: "internship",
  initialState,
  reducers: {
    readAllInternship: (state, action) => {
      state.internshipData = action.payload.internships;
    },
    readHisOwnInternship: (state, action) => {
      state.internshipData = action.payload.data;
    },
    readSingleInternship: (state, action) => {
      state.internshipData = action.payload.internship;
    },
    createInternship: (state, action) => {},
  },
});

export const {
  readAllInternship,
  readHisOwnInternship,
  readSingleInternship,
  createInternship,
} = internshipSlice.actions;

export default internshipSlice.reducer;
