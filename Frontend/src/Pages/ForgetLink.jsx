import React, { useState } from "react";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncForgrtPassword as studentForget } from "../store/Actions/userActions";
import { asyncForgrtPassword as employeeForget } from "../store/Actions/employeeActions";
import { toast } from "react-toastify";
import { MdErrorOutline } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
const ForgetLink = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentpathname = window.location.pathname;
  const isStudent = currentpathname.includes("student");
  // const isEmploye = currentpathname.includes("employe")
  const { id } = useParams();

  const submit = async (data) => {
    setLoader(true);
    if (isStudent) {
      const error = await dispatch(studentForget(id, data));
      setLoader(false);
      error
        ? toast.error(error.data.message)
        : toast.success("Password has been changed");
      navigate("/student");
    } else {
      const error = await dispatch(employeeForget(id, data));
      setLoader(false);
      error
        ? toast.error(error.data.message)
        : toast.success("Password has been changed");
      navigate("/employee");
    }
  };

  const style = {
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
  };

  const [loader, setLoader] = useState();

  return (
    <div
      style={style}
      className={`mx-auto w-full max-w-md bg-white rounded-xl p-10 `}
    >
      <form onSubmit={handleSubmit(submit)} className="mt-5">
        <div className="space-y-5">
          <div>
            <Input
              label="Password"
              type="password"
              placeholder="Enter new password here"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.password.message}</span>
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
              "Done"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgetLink;
