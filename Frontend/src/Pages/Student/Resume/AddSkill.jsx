import React, { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button";
import { addSkill, editSkill } from "../../../store/Actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { MdErrorOutline } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";

const AddSkill = ({ edit = false }) => {
  const student = useSelector((state) => state.userReducer.userData?.student);
  // console.log(student)
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    setLoader(true);
    if (edit) {
      const error = await dispatch(editSkill(id, student._id, data));
      setLoader(false);
      error ? toast.error(error.data.message) : toast.success("Skill updated");
    } else {
      const error = await dispatch(addSkill(student._id, data));
      setLoader(false);
      error ? toast.error(error.data.message) : toast.success("Skill added");
    }
    // edit ? await dispatch(editSkill(id, student._id, data))
    //   : await dispatch(addSkill(student._id, data))
    navigate("/student/resume");
  };

  const skill = student?.resume?.skills.find((item) => item.id === id);

  const [loader, setLoader] = useState(false);

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen fixed top-[0]">
      <div className="w-full h-screen overlay bg-black opacity-50"></div>
      <div className="scroll w-full  max-sm:h-full h-[90%] overflow-y-auto max-w-xl sm:rounded-lg  border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <RxCross2
          onClick={backHandler}
          size={25}
          className="absolute right-5 top-5 cursor-pointer"
        />
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full p-5 sm:p-10 flex flex-col gap-5"
        >
          <h1 className="text-center text-xl font-semibold">Skills</h1>

          <div>
            <Input
              defaultValue={edit ? skill?.skill || "" : ""}
              label="Add skill"
              placeholder="e.g. Adobe Photoshop"
              {...register("skill", {
                required: {
                  value: true,
                  message: "required",
                },
              })}
            />
            {errors.skill && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <MdErrorOutline /> <span>{errors.skill.message}</span>
              </p>
            )}
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

export default AddSkill;
