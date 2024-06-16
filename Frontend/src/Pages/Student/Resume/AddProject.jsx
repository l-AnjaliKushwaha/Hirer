import React, { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button";
import { addProject, editProject } from "../../../store/Actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { MdErrorOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

const AddProject = ({ edit = false }) => {
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
    if (currlength <= 1000) {
      if (edit) {
        const error = await dispatch(editProject(id, student._id, data));
        setLoader(false);
        error
          ? toast.error(error.data.message)
          : toast.success("Project updated");
      } else {
        const error = await dispatch(addProject(student._id, data));
        setLoader(false);
        error
          ? toast.error(error.data.message)
          : toast.success("Project added");
      }
      // edit ? await dispatch(editProject(id, student._id, data))
      //   : await dispatch(addProject(student._id, data))
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
      if (name == "currentWorking") {
        value.currentWorking
          ? setValue("endDate", "Ongoing")
          : setValue("endDate", "");
      }
    });
  }, [watch]);

  const project = student?.resume?.projects.find((item) => item.id === id);

  const [loader, setLoader] = useState(false);

  return (
    <div className="w-full h-screen fixed top-[0]">
      <div className="w-full h-screen overlay bg-black opacity-50"></div>
      <div className="scroll w-full max-sm:h-full h-[90%] overflow-y-auto max-w-xl sm:rounded-lg  border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <RxCross2
          onClick={backHandler}
          size={25}
          className="absolute right-5 top-5 cursor-pointer"
        />
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full p-5 sm:p-10 flex flex-col gap-5"
        >
          <h1 className="text-center text-xl font-semibold">Project details</h1>

          <div>
            <Input
              defaultValue={edit ? project?.title || "" : ""}
              label="Title"
              placeholder="e.g. Job Seeker"
              {...register("title", {
                required: {
                  value: true,
                  message: "job title is required",
                },
              })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.title.message}</span>
              </p>
            )}
          </div>

          <div className="w-full flex gap-2">
            <div className="w-1/2">
              <Input
                style="relative"
                defaultValue={edit ? project?.startDate || "" : ""}
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
                defaultValue={edit ? project?.endDate || "" : ""}
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

              <label className="w-full pl-1 pt-1 flex gap-1.5 items-center">
                <input
                  defaultChecked={edit ? project?.currentWorking || "" : ""}
                  type="checkbox"
                  {...register("currentWorking", {})}
                />
                <span className="text-sm font-medium">Currently ongoing</span>
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
              defaultValue={edit ? project?.description || "" : ""}
              name="description"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[150px] resize-none text-sm"
              id="des"
              type="description"
              placeholder={`Short description about project (max 1000 char)\n#Keep it in points`}
              {...register("description", {
                required: {
                  value: false,
                },
                maxLength: {
                  value: 1000,
                  message: "Description should not exceed 1000 characters.",
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
            <span className="text-xs">{currlength}/1000</span>
          </label>

          <div className="w-full">
            <Input
              defaultValue={edit ? project?.projectLink || "" : ""}
              label="Project link (optional)"
              placeholder="e.g. http://myprojectlink.com"
              {...register("projectLink", {})}
            />
            <p className="text-sm mt-1 text-gray-400">
              If you have multiple project links or an offline project, upload
              and provide link to google drive.
            </p>
          </div>

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

export default AddProject;
