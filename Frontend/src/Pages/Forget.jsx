import React, { useState } from "react";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { asyncSendMail as studentMail } from "../store/Actions/userActions";
import { asyncSendMail as employeeMail } from "../store/Actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { MdErrorOutline } from "react-icons/md";
import { Bounce, Flip, Slide, Zoom } from "react-toastify";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

const Forget = ({ userType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentHost = window.location.host;
  const sId = useSelector((state) => state.userReducer.userData?.student?._id);
  const eId = useSelector(
    (state) => state.employeeReducer.employeeData?.employe?._id
  );

  const submit = async (data) => {
    setLoader(true);
    data.currentHost = currentHost;
    if (userType === "student") {
      const error = await dispatch(studentMail(data));
      setLoader(false);
      error
        ? toast.error(error.data.message)
        : sId
        ? navigate(`/student/forget-link/${sId}`)
        : toast.success("Link send successfully to registered mail id");
    } else {
      const error = await dispatch(employeeMail(data));
      setLoader(false);
      error
        ? toast.error(error.data.message)
        : eId
        ? navigate(`/employee/forget-link/${eId}`)
        : toast.success("Link send successfully to registered mail id");
    }
  };

  const style = {
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
  };

  const [loader, setLoader] = useState(false);

  return (
    <div
      style={style}
      className={`mx-auto w-full max-w-md bg-white rounded-xl p-10 mt-8`}
    >
      {!(sId || eId) && (
        <div className="w-full flex justify-around font-medium text-xl gap-2">
          <div className="w-1/2 flex flex-col overflow-hidden">
            <Link to={`/student/forget-password`} className="text-center mb-2">
              Student
            </Link>
            <motion.div
              initial={{ x: "100%" }}
              animate={userType === "student" && { x: 0 }}
              transition={{ duration: 0.3 }}
              className=" h-[2px] bg-[#000] rounded-full"
            ></motion.div>
          </div>
          <div className="w-1/2 flex flex-col overflow-hidden">
            <Link to={`/employee/forget-password`} className="text-center mb-2">
              Employee
            </Link>
            <motion.div
              initial={{ x: "-100%" }}
              animate={userType === "employee" && { x: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] bg-[#000] rounded-full"
            ></motion.div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(submit)} className="mt-5">
        <div className="space-y-5">
          <div>
            <Input
              label="Email"
              type="string"
              placeholder="john123@example.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                // pattern: {
                //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                //     message: "Invalid email address"
                // }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          <Button
            type="submit"
            bgColor="bg-[#1F2937]"
            className="w-full font-semibold flex justify-center"
          >
            {loader ? (
              <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Forget;
