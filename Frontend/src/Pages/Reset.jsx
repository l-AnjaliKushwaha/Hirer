import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncResetPassword as studentReset } from "../store/Actions/userActions";
import { asyncResetPassword as employeeReset } from "../store/Actions/employeeActions";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { toast } from "react-toastify";

const Reset = ({ userType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const sId = useSelector((state) => state.userReducer.userData?.student?._id);
  const eId = useSelector(
    (state) => state.employeeReducer.employeeData?.employe?._id
  );

  const submit = async (data) => {
    if (userType === "student") {
      const error = await dispatch(studentReset(sId, data));
      error
        ? toast.error(error.data.message)
        : toast.success("Password has been changed");
      navigate(`/student`);
    } else {
      const error = await dispatch(employeeReset(eId, data));
      error
        ? toast.error(error.data.message)
        : toast.success("Password has been changed");
      navigate(`/employee`);
    }
  };

  const style = {
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
  };

  return (
    <div
      style={style}
      className={`mx-auto w-full max-w-md bg-white rounded-xl p-10 `}
    >
      {/* <div className='w-full flex justify-around font-semibold text-xl'>
                <Link to={`/student/reset-password`} className={userType === "student" ? "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg" : "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg"}>Student</Link>
                <Link to={`/employee/reset-password`} className={userType === "student" ? "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg" : "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg"}>Employee</Link>
            </div> */}

      <form onSubmit={handleSubmit(submit)} className="mt-5">
        <div className="space-y-5">
          <Input
            label="password"
            type="password"
            placeholder="Must be 6 character long"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            bgColor="bg-[#1F2937]"
            className="w-full font-semibold"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
