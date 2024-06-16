import React, { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button";
import { addJob, editJob } from "../../../store/Actions/userActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

const AddJob = ({ edit = false }) => {
  const student = useSelector((state) => state.userReducer.userData?.student);
  // console.log(student)
  const { id } = useParams();

  let [currlength, setCurrlength] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    setLoader(true);
    if (currlength <= 250) {
      if (edit) {
        const error = await dispatch(editJob(id, student._id, data));
        setLoader(false);
        error ? toast.error(error.data.message) : toast.success("Job updated");
      } else {
        const error = await dispatch(addJob(student._id, data));
        setLoader(false);
        error ? toast.error(error.data.message) : toast.success("Job added");
      }
      // edit ? await dispatch(editJob(id, data))
      //   : await dispatch(addJob(student._id, student._id, data))
      navigate("/student/resume");
    }
  };

  const backHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    const descriptionValue = watch((value, { name }) => {
      if (name == "description") {
        let str = value.description.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "workType") {
        value.workType
          ? setValue("Location", "Remote")
          : setValue("Location", "");
      }
      if (name == "currentWorking") {
        value.currentWorking
          ? setValue("endDate", "Currently Working")
          : setValue("endDate", "");
      }
    });
  }, [watch]);

  const job = student?.resume?.jobs.find((item) => item.id === id);

  const [loader, setLoader] = useState(false);

  return (
    <div className="box w-full h-screen fixed top-[0]">
      <div className="w-full h-screen  overlay bg-black opacity-50"></div>
      <div className="scroll w-full max-sm:h-full h-[90%] overflow-y-auto max-w-xl sm:rounded-lg border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <RxCross2
          onClick={backHandler}
          size={25}
          className="absolute right-5 top-5 cursor-pointer"
        />
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full p-5 sm:p-10 flex flex-col gap-5"
        >
          <h1 className="text-center text-xl font-semibold">Job details</h1>

          <div>
            <Input
              defaultValue={edit ? job?.designation || "" : ""}
              label="Designation"
              placeholder="e.g. Software Engineer"
              {...register("designation", {
                required: {
                  value: true,
                  message: "designation is required",
                },
              })}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.designation.message}</span>
              </p>
            )}
          </div>

          <div>
            <Input
              defaultValue={edit ? job?.profile || "" : ""}
              label="Profile"
              placeholder="e.g. Operations"
              {...register("profile", {
                required: {
                  value: true,
                  message: "profile is required",
                },
              })}
            />
            {errors.profile && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.profile.message}</span>
              </p>
            )}
          </div>

          <div>
            <Input
              defaultValue={edit ? job?.organization || "" : ""}
              label="Organization"
              placeholder="e.g. Career Race"
              {...register("organization", {
                required: {
                  value: true,
                  message: "organization name is required",
                },
              })}
            />
            {errors.organization && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.organization.message}</span>
              </p>
            )}
          </div>

          <div>
            <Input
              defaultValue={edit ? job?.Location || "" : ""}
              label="Location"
              placeholder="e.g. Mumbai"
              {...register("Location", {})}
              readOnly={watch("workType")}
            />

            <label className="w-1/2 pl-1 pt-1 flex gap-1.5 items-center">
              <input
                defaultChecked={edit ? job?.workType || "" : ""}
                type="checkbox"
                {...register("workType", {})}
              />
              <span className="text-sm font-medium">Is work from home</span>
            </label>
          </div>

          <div className="w-full justify-between flex gap-2">
            <div className="w-1/2">
              <Input
                style="relative"
                defaultValue={edit ? job?.startDate || "" : ""}
                type="text"
                label="Start date"
                placeholder="Choose date"
                {...register("startDate", {
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              >
                <DatePicker
                  className="w-full outline-none px-3 py-2 bg-red-500 rounded-lg opacity-0"
                  onChange={(date) => {
                    const formattedDate = date.toLocaleDateString("en-GB"); // Format: dd/MM/yyyy
                    setValue("startDate", formattedDate);
                  }}
                />
              </Input>
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.startDate.message}</span>
                </p>
              )}
            </div>

            <div className="w-1/2">
              <Input
                style="relative"
                defaultValue={edit ? job?.endDate || "" : ""}
                type="text"
                label="End date"
                placeholder="Choose date"
                {...register("endDate", {
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              >
                <DatePicker
                  className="w-full outline-none px-3 py-2 bg-red-500 rounded-lg opacity-0"
                  onChange={(date) => {
                    const formattedDate = date.toLocaleDateString("en-GB"); // Format: dd/MM/yyyy
                    setValue("endDate", formattedDate);
                  }}
                  readOnly={watch("currentWorking")}
                />
              </Input>

              {errors.endDate && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.endDate.message}</span>
                </p>
              )}

              <label className="w-full pl-1 flex gap-1.5 items-center">
                <input
                  defaultChecked={edit ? job?.currentWorking || "" : ""}
                  type="checkbox"
                  {...register("currentWorking", {})}
                />
                <span className="text-sm pt-1 font-medium">
                  Currently working
                </span>
              </label>
            </div>
          </div>

          <label htmlFor="des" className="flex flex-col gap-1">
            <span>Description (optional)</span>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.description.message}</span>
              </p>
            )}
            <textarea
              defaultValue={edit ? job?.description || "" : ""}
              name="description"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[150px] resize-none text-sm"
              id="des"
              type="description"
              placeholder={`Short description of work done(max 250 char)\n#Mention key job responsibilities, measurable impact or results you helped deliver, any awards you won during this time.\n#Keep it to 2-3 points`}
              {...register("description", {
                maxLength: {
                  value: 250,
                  message: "Description should not exceed 250 characters.",
                },
                validate: {
                  bulletPoints: (value) => {
                    if (!value || /^\s*$/.test(value)) {
                      return true;
                    }
                    const bulletPoints = value.split("\n");
                    return (
                      bulletPoints.every((point) =>
                        /^\s*\d+\.\s*/.test(point.trim())
                      ) ||
                      "Each point must start with a number followed by a dot."
                    );
                  },
                },
              })}
            />
            <span className="text-xs">{currlength}/250</span>
          </label>

          <Button
            type="submit"
            bgColor="bg-[#1F2937]"
            className="w-1/2 font-semibold m-auto flex justify-center"
          >
            {loader ? (
              <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
            ) : (
              "Save"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
