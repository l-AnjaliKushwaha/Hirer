import React, { useState } from "react";
import Input from "../../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button";
import { updateStudent } from "../../../store/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

const PersonalDetails = () => {
  const student = useSelector((state) => state.userReducer.userData?.student);
  // console.log(student)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    setLoader(true);
    // console.log(data)
    const error = await dispatch(updateStudent(student._id, data));
    setLoader(false);
    error ? toast.error(error.data.message) : toast.success("Profile updated");
    navigate("/student/resume");
  };

  const backHandler = () => {
    navigate(-1);
  };

  const [loader, setLoader] = useState(false);

  return (
    <div className="w-full h-screen fixed top-[0]">
      <div className="w-full h-screen overlay bg-black opacity-50"></div>
      <div className="scroll w-full  max-sm:h-full h-[90%] overflow-y-auto max-w-xl sm:rounded-lg border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <RxCross2
          onClick={backHandler}
          size={25}
          className="absolute right-5 top-5 cursor-pointer"
        />
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full p-5 sm:p-10 flex flex-col gap-5"
        >
          <h1 className="text-center text-xl font-semibold">
            Personal Details
          </h1>

          <div className="w-full flex gap-2">
            <div className="w-1/2">
              <Input
                defaultValue={student?.firstname || ""}
                label="Firstname"
                placeholder="John"
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "firstname is required",
                  },
                })}
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.firstname.message}</span>
                </p>
              )}
            </div>

            <div className="w-1/2">
              <Input
                defaultValue={student?.lastname || ""}
                label="Lastname"
                placeholder="Doe"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "lastname is required",
                  },
                })}
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.lastname.message}</span>
                </p>
              )}
            </div>
          </div>
          <Input
            defaultValue={student?.email || ""}
            label="Email"
            placeholder="John@example.com"
            type="email"
            {...register("email", {})}
          />
          <Input
            defaultValue={student?.contact || ""}
            label="Contact"
            placeholder="Mobile number"
            type="text"
            {...register("contact", {})}
          />

          <Input
            defaultValue={student?.city || ""}
            label="Current city"
            placeholder="Current location"
            type="text"
            {...register("city", {})}
          />

          <div className="w-full">
            <label>Gender</label>
            <div className="w-full flex items-center gap-2">
              <label>
                <input
                  defaultChecked={student?.gender === "Male"}
                  type="radio"
                  value="Male"
                  {...register("gender", { required: true })}
                />
                Male
              </label>

              <label>
                <input
                  defaultChecked={student?.gender === "Female"}
                  type="radio"
                  value="Female"
                  {...register("gender", { required: true })}
                />
                Female
              </label>

              <label>
                <input
                  defaultChecked={student?.gender === "Others"}
                  type="radio"
                  value="Others"
                  {...register("gender", { required: true })}
                />
                Other
              </label>
            </div>
          </div>

          {/* <div className='w-full'>
                <label>Languages you know</label>
            </div> */}

          <Button
            type="submit"
            bgColor="bg-[#1F2937]"
            className="w-1/2 font-semibold m-auto flex justify-center"
          >
            {loader ? (
              <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
