import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button";
import {
  addResponsibility,
  editResponsibility,
} from "../../../store/Actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

const AddResponsibility = ({ edit = false }) => {
  const student = useSelector((state) => state.userReducer.userData?.student);
  // console.log(student)
  const { id } = useParams();

  let [currlength, setCurrlength] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    setLoader(true);
    if (currlength <= 250) {
      if (edit) {
        const error = await dispatch(editResponsibility(id, student._id, data));
        setLoader(false);
        error
          ? toast.error(error.data.message)
          : toast.success("Responsibility updated");
      } else {
        const error = await dispatch(addResponsibility(student._id, data));
        setLoader(false);
        error
          ? toast.error(error.data.message)
          : toast.success("Responsibility added");
      }
      // edit ? await dispatch(editResponsibility(id, student._id, data))
      //   : await dispatch(addResponsibility(student._id, data))
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
    });
  }, [watch]);

  const responsibility = student?.resume?.responsibilities.find(
    (item) => item.id === id
  );

  const [loader, setLoader] = useState(false);

  return (
    <div className="w-full h-screen fixed top-[0]">
      <div className="w-full h-screen overlay bg-black opacity-50"></div>
      <div className="scroll w-full max-sm:h-full h-[90%] max-w-xl overflow-y-auto sm:rounded-lg  border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
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
            Position of responsibility
          </h1>

          <label htmlFor="des" className="flex flex-col gap-1">
            <span>Description</span>
            <p className="text-sm mb-1 text-gray-400">
              If you have been/are an active part of societies, conducted any
              events or led a team, add details here
            </p>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.description.message}</span>
              </p>
            )}
            <textarea
              defaultValue={edit ? responsibility?.description || "" : ""}
              name="description"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[150px] resize-none text-sm"
              id="des"
              type="description"
              placeholder={`#Keep it in points\n1. Led a team of 5 volunteers to plan and conduct activities for literary event in college fest.\n2.`}
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required",
                },
                maxLength: {
                  value: 250,
                  message: "Description should not exceed 250 characters.",
                },
                validate: {
                  bulletPoints: (value) => {
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

export default AddResponsibility;
