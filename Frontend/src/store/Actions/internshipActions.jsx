// import axios from "axios";
import {
  readAllInternship,
  readSingleInternship,
  createInternship,
} from "../Reducers/internshipSlice";
import axios from "../../config/axios"


export const fetchInternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/employe/internship/read/all");
    const { internships } = data;
    dispatch(readAllInternship({ internships }));
  } catch (error) {
    console.log(error);
  }
};

export const internshipDetail = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `/api/user/student/internship/singleintership/${id}`
    );
    const { internship } = data;
    dispatch(readSingleInternship({ internship }));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateInternship =
  (internshipData) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `/api/employe/internship/create`,
        internshipData
      );
      const { internship } = data;
      // dispatch(createInternship({ internship }));
    } catch (error) {
      console.log(error);
    }
  };
