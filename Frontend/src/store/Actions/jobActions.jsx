// import axios from "axios";
import { readAllJob, readSingleJob, createJob } from "../Reducers/jobSlice";
import axios from "../../config/axios"


export const fetchJobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/employe/job/read/all");
    const { jobs } = data;
    dispatch(readAllJob({ jobs }));
  } catch (error) {
    console.log(error);
  }
};

export const jobDetail = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`/api/user/student/job/read/${id}`);

    // console.log(data)
    const { job } = data;
    dispatch(readSingleJob({ job }));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateJob =
  (internshipData) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `/api/employe/job/create`,
        internshipData
      );
      const { job } = data;
      // console.log(job)
      // dispatch(createJob({ job }));
    } catch (error) {
      console.log(error);
    }
  };
