// import axios from "axios";
import { login, logout } from "../Reducers/userSlice";
import { readHisOwnInternship } from "../Reducers/internshipSlice";
import { readHisOwnJob } from "../Reducers/jobSlice";
import { getStudentResume } from "./resumeActions";
import axios from "../../config/axios"
export const currentUser = () => async (dispatch, getState) => {
  try {
    const { data: userData } = await axios.get("/api/user/student");
    if (userData.student) {
      dispatch(login({ userData }));
    }
  } catch (error) {
    return error.response;
  }
};

export const asyncSignup = (userData) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/api/user/student/signup", userData);
    const { token, id } = response.data;
    // Store the token in local storage
    localStorage.setItem('token', token);
    dispatch(currentUser());
  } catch (error) {
    return error.response;
  }
};

export const asyncLogin = (userData) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/api/user/student/signin", userData);
    const { token, id } = response.data;
    // Store the token in local storage
    localStorage.setItem('token', token);
    dispatch(currentUser());
  } catch (error) {
    return error.response;
  }
};

export const asyncLogout = () => async (dispatch, getState) => {
  try {
    await axios.get("/api/user/student/signout");
    // Remove the token from local storage
    localStorage.removeItem('token');
    dispatch(logout());
  } catch (error) {
    return error.response;
  }
};

export const asyncSendMail = (formData) => async (dispatch, getState) => {
  try {
    await axios.post("/api/user/student/send-mail", formData);
  } catch (error) {
    return error.response;
  }
};

export const asyncForgrtPassword =
  (id, formData) => async (dispatch, getState) => {
    try {
      await axios.post(`/api/user/student/forget-link/${id}`, formData);
    } catch (error) {
      return error.response;
    }
  };
export const asyncResetPassword =
  (id, formData) => async (dispatch, getState) => {
    try {
      await axios.post(`/api/user/student/reset-password/${id}`, formData);
    } catch (error) {
      return error.response;
    }
  };

export const asyncUploadProfileImageStudent =
  (id, imageFile) => async (dispatch, getState) => {
    try {
      // console.log("one");
      await axios.post(`/api/user/student/avatar/${id}`, imageFile);
      // console.log("two");
      dispatch(currentUser());
    } catch (error) {
      return error.response;
    }
}

export const allapplyinternship = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/api/user/student/internship/read', id)
        // console.log(data)
        dispatch(readHisOwnInternship({ data }))
    } catch (error) {
        return error.response
    }
}

export const allapplyjob = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/api/user/student/job/read', id)
        // console.log(data)
        dispatch(readHisOwnJob({ data }))
    } catch (error) {
        return error.response
    }
}

export const applyjob = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/apply/job/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }));
    } catch (error) {
        return error.response

    }
}

export const applyinternship = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/apply/internship/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
    } catch (error) {
        return error.response
    }
}

export const bookmarkinternship = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/bookmark/internship/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
    } catch (error) {
        return error.response
    }
}

export const disbookmarkinternship = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/disbookmark/internship/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
    } catch (error) {
        return error.response
    }
}

export const bookmarkjob = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/bookmark/job/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
    } catch (error) {
        return error.response
    }
}

export const disbookmarkjob = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/disbookmark/job/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
    } catch (error) {
        return error.response
    }
}

export const updateStudent = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/user/student/update/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const addEducation = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-edu`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editEducation =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-edu/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteEducation =
  (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-edu/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const addJob = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-job`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editJob = (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-job/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
        return error.response
    }
}

export const deleteJob = (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-job/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
        return error.response
    }
}

export const addInternship = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-intern`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editInternship =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-intern/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteInternship =
  (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-intern/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const addResponsibility = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-respo`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editResponsibility =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-respo/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteResponsibility =
  (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-respo/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const addTrainingCourse = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-course`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editTrainingCourse =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-course/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteTrainingCourse =
  (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-course/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const addProject = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-project`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editProject =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-project/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteProject = (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-project/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
        return error.response
    }
}

export const addSkill = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-skill`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editSkill =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-skill/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteSkill = (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-skill/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
        return error.response
    }
}

export const addWorkSample = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-work`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editWorkSample =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-work/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteWorkSample =
  (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-work/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const addAccomplishment = (id, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/add-acc`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(id))
    } catch (error) {
        return error.response
    }
}

export const editAccomplishment =
  (id, studentId, data1) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/edit-acc/${id}`, data1)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };

export const deleteAccomplishment =
  (id, studentId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/resume/delete-acc/${id}`)
        // console.log(data)
        dispatch(currentUser({ data }))
        dispatch(getStudentResume(studentId))
    } catch (error) {
      return error.response;
    }
  };
