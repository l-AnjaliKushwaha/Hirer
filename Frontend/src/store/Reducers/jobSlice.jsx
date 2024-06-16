import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    readAllJob: (state, action) => {
      state.jobData = action.payload.jobs;
    },
    readHisOwnJob: (state, action) => {
      state.jobData = action.payload.data;
    },
    readSingleJob: (state, action) => {
      state.jobData = action.payload.job;
    },
    createJob: (state, action) => {},
  },
});

export const { readAllJob, readHisOwnJob, readSingleJob, createJob } =
  jobSlice.actions;

export default jobSlice.reducer;
