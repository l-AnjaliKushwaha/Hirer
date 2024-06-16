import React, { useState } from "react";
import Input from "../../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button";
import {
  addEducation,
  editEducation,
  updateStudent,
} from "../../../store/Actions/userActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Select from "../../../Components/Select";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

const AddEducation = ({ edit = false }) => {
  const student = useSelector((state) => state.userReducer.userData?.student);
  // console.log(student)

  const { id } = useParams();

  const [first, setfirst] = useState("true");

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
      const error = await dispatch(editEducation(id, student._id, data));
      setLoader(false);
      error
        ? toast.error(error.data.message)
        : toast.success("Education updated");
    } else {
      const error = await dispatch(addEducation(student._id, data));
      setLoader(false);
      error
        ? toast.error(error.data.message)
        : toast.success("Education added");
    }
    // edit ? await dispatch(editEducation(id, student._id, data))
    //   : await dispatch(addEducation(student._id, data))
    navigate("/student/resume");
  };

  const backHandler = () => {
    navigate(-1);
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const year = currentYear - 46;
  const startYearOptions = Array.from(
    { length: currentYear - year + 1 },
    (_, index) => 1984 + index
  );

  const edu = student?.resume?.education.find((item) => item.id === id);
  // console.log(edu?.eduType)

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
        {!edit && first === "true" && (
          <div className="p-10 flex flex-col gap-5">
            <h1 className="text-center text-xl font-semibold">Education</h1>

            <Link
              onClick={() => setfirst("one")}
              className="text-blue-700"
              to="/student/resume/add/education"
            >
              <span className="flex items-center gap-1">
                <FaPlus />
                Add graduation/ post graduation
              </span>
            </Link>
            <Link
              onClick={() => setfirst("two")}
              className="text-blue-700"
              to="/student/resume/add/education"
            >
              <span className="flex items-center gap-1">
                <FaPlus />
                Add senior secondary (XII)
              </span>
            </Link>
            <Link
              onClick={() => setfirst("three")}
              className="text-blue-700"
              to="/student/resume/add/education"
            >
              <span className="flex items-center gap-1">
                <FaPlus />
                Add secondary (X)
              </span>
            </Link>
            <Link
              onClick={() => setfirst("four")}
              className="text-blue-700"
              to="/student/resume/add/education"
            >
              <span className="flex items-center gap-1">
                <FaPlus />
                Add diploma
              </span>
            </Link>
            <Link
              onClick={() => setfirst("five")}
              className="text-blue-700"
              to="/student/resume/add/education"
            >
              <span className="flex items-center gap-1">
                <FaPlus />
                Add PhD
              </span>
            </Link>
          </div>
        )}
        {((edu && edu.eduType === "graduation") || first === "one") && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-full p-5 sm:p-10 flex flex-col gap-5"
          >
            <h1 className="w-[90%] text-center text-xl font-semibold">
              Graduation details
            </h1>

            <Input
              defaultValue="graduation"
              className="hidden"
              {...register("eduType")}
            />
            <div>
              <Input
                defaultValue={edit ? edu?.college || "" : ""}
                label="College"
                placeholder="e.g. Hindu College"
                {...register("college", {
                  required: {
                    value: true,
                    message: "college name is required",
                  },
                })}
              />
              {errors.college && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.college.message}</span>
                </p>
              )}
            </div>
            <div className="w-full flex gap-2">
              <div className="w-1/2">
                <Select
                  defaultValue={edit ? edu?.startYear || "" : ""}
                  label="Start year"
                  placeholder="Choose Year"
                  options={startYearOptions.reverse()}
                  {...register("startYear", {
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                />
                {errors.startYear && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <MdErrorOutline /> <span>{errors.startYear.message}</span>
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <Select
                  defaultValue={edit ? edu?.lastYear || "" : ""}
                  label="End year"
                  placeholder="Choose Year"
                  options={startYearOptions}
                  {...register("lastYear", {
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                />
                {errors.lastYear && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <MdErrorOutline /> <span>{errors.lastYear.message}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                defaultValue={edit ? edu?.degree || "" : ""}
                label="Degree"
                placeholder="e.g. B.tech"
                {...register("degree", {
                  required: {
                    value: true,
                    message: "degree name is required",
                  },
                })}
              />
              {errors.degree && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.degree.message}</span>
                </p>
              )}
            </div>

            <Input
              defaultValue={edit ? edu?.branch || "" : ""}
              label="Branch (optional)"
              placeholder="e.g. Computer Science"
              {...register("branch", {})}
            />

            <Input
              defaultValue={edit ? edu?.performance || "" : ""}
              label="Performance (optional)"
              placeholder="0.00"
              {...register("performance", {})}
            />

            <Button
              type="submit"
              bgColor="bg-[#1F2937]"
              className="w-1/2 font-semibold m-auto  flex justify-center"
            >
              {loader ? (
                <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        )}

        {((edu && edu.eduType === "seniorSecondary") || first === "two") && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-full p-5 sm:p-10 flex flex-col gap-5"
          >
            <h1 className="text-center text-xl font-semibold">XII details</h1>

            <Input
              defaultValue="seniorSecondary"
              className="hidden"
              {...register("eduType")}
            />

            <div>
              <Select
                defaultValue={edit ? edu?.completionYear || "" : ""}
                label="Year of completion"
                placeholder="Choose year"
                options={startYearOptions.reverse()}
                {...register("completionYear", {
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              />
              {errors.completionYear && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline />{" "}
                  <span>{errors.completionYear.message}</span>
                </p>
              )}
            </div>

            <div>
              <Input
                defaultValue={edit ? edu?.board || "" : ""}
                label="Board"
                placeholder="e.g. CBSE"
                {...register("board", {
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              />
              {errors.board && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.board.message}</span>
                </p>
              )}
            </div>

            <Input
              defaultValue={edit ? edu?.performance || "" : ""}
              label="Performance (optional)"
              placeholder="0.00"
              {...register("performance", {})}
            />

            <Input
              defaultValue={edit ? edu?.stream || "" : ""}
              label="Stream (optional)"
              placeholder="e.g. Science"
              {...register("stream", {})}
            />

            <div>
              <Input
                defaultValue={edit ? edu?.school || "" : ""}
                label="School"
                placeholder="e.g. Hindu Public School"
                {...register("school", {
                  required: {
                    value: true,
                    message: "school name required",
                  },
                })}
              />
              {errors.school && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.school.message}</span>
                </p>
              )}
            </div>

            <Button
              type="submit"
              bgColor="bg-[#1F2937]"
              className="w-1/2 font-semibold m-auto flex justify-center"
            >
              {" "}
              {loader ? (
                <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        )}
        {((edu && edu.eduType === "secondary") || first === "three") && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-full p-5 sm:p-10 flex flex-col gap-5"
          >
            <h1 className="text-center text-xl font-semibold">X details</h1>

            <Input
              defaultValue="secondary"
              className="hidden"
              {...register("eduType")}
            />

            <div>
              <Select
                defaultValue={edit ? edu?.completionYear || "" : ""}
                label="Year of completion"
                placeholder="Choose year"
                options={startYearOptions.reverse()}
                {...register("completionYear", {
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              />
              {errors.completionYear && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline />{" "}
                  <span>{errors.completionYear.message}</span>
                </p>
              )}
            </div>

            <div>
              <Input
                defaultValue={edit ? edu?.board || "" : ""}
                label="Board"
                placeholder="e.g. CBSE"
                {...register("board", {
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              />
              {errors.board && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.board.message}</span>
                </p>
              )}
            </div>

            <Input
              defaultValue={edit ? edu?.performance || "" : ""}
              label="Performance (optional)"
              placeholder="0.00"
              {...register("performance", {})}
            />

            <div>
              <Input
                defaultValue={edit ? edu?.school || "" : ""}
                label="School"
                placeholder="e.g. Hindu Public School"
                {...register("school", {
                  required: {
                    value: true,
                    message: "school name is required",
                  },
                })}
              />
              {errors.school && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.school.message}</span>
                </p>
              )}
            </div>

            <Button
              type="submit"
              bgColor="bg-[#1F2937]"
              className="w-1/2 font-semibold m-auto flex justify-center"
            >
              {" "}
              {loader ? (
                <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        )}
        {((edu && edu.eduType === "diploma") || first === "four") && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-full p-5 sm:p-10 flex flex-col gap-5"
          >
            <h1 className="text-center text-xl font-semibold">
              Diploma details
            </h1>

            <Input
              defaultValue="diploma"
              className="hidden"
              {...register("eduType")}
            />

            <div>
              <Input
                defaultValue={edit ? edu?.college || "" : ""}
                label="College"
                placeholder="e.g. Hindu College"
                {...register("college", {
                  required: {
                    value: true,
                    message: "college name is required",
                  },
                })}
              />
              {errors.college && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.college.message}</span>
                </p>
              )}
            </div>

            <div className="w-full flex gap-2">
              <div className="w-1/2">
                <Select
                  defaultValue={edit ? edu?.startYear || "" : ""}
                  label="Start year"
                  placeholder="Choose year"
                  options={startYearOptions.reverse()}
                  {...register("startYear", {
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                />
                {errors.startYear && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <MdErrorOutline /> <span>{errors.startYear.message}</span>
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <Select
                  defaultValue={edit ? edu?.lastYear || "" : ""}
                  label="End year"
                  placeholder="Choose year"
                  options={startYearOptions}
                  {...register("lastYear", {
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                />
                {errors.lastYear && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <MdErrorOutline /> <span>{errors.lastYear.message}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                defaultValue={edit ? edu?.stream || "" : ""}
                label="Stream"
                placeholder="e.g. Creative Writing"
                {...register("stream", {
                  required: {
                    value: true,
                    message: "stream is required",
                  },
                })}
              />
              {errors.stream && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.stream.message}</span>
                </p>
              )}
            </div>

            <Input
              defaultValue={edit ? edu?.performance || "" : ""}
              label="Performance (optional)"
              placeholder="0.00"
              {...register("performance", {})}
            />

            <Button
              type="submit"
              bgColor="bg-[#1F2937]"
              className="w-1/2 font-semibold m-auto flex justify-center"
            >
              {" "}
              {loader ? (
                <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        )}
        {((edu && edu.eduType === "phd") || first === "five") && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-full p-5 sm:p-10 flex flex-col gap-5"
          >
            <h1 className="text-center text-xl font-semibold"> PhD details</h1>

            <Input
              defaultValue="phd"
              className="hidden"
              {...register("eduType")}
            />

            <div>
              <Input
                defaultValue={edit ? edu?.college || "" : ""}
                label="College"
                placeholder="e.g. Hindu College"
                {...register("college", {
                  required: {
                    value: true,
                    message: "college name is required",
                  },
                })}
              />
              {errors.college && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.college.message}</span>
                </p>
              )}
            </div>

            <div className="w-full flex gap-2">
              <div className="w-1/2">
                <Select
                  defaultValue={edit ? edu?.startYear || "" : ""}
                  label="Start year"
                  placeholder="Choose year"
                  options={startYearOptions.reverse()}
                  {...register("startYear", {
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                />
                {errors.startYear && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <MdErrorOutline /> <span>{errors.startYear.message}</span>
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <Select
                  defaultValue={edit ? edu?.lastYear || "" : ""}
                  label="End year"
                  placeholder="Choose year"
                  options={startYearOptions}
                  {...register("lastYear", {
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                />
                {errors.lastYear && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <MdErrorOutline /> <span>{errors.lastYear.message}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                defaultValue={edit ? edu?.stream || "" : ""}
                label="Stream"
                placeholder="e.g. Commerce & Business Studies"
                {...register("stream", {
                  required: {
                    value: true,
                    message: "stream is required",
                  },
                })}
              />
              {errors.stream && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <MdErrorOutline /> <span>{errors.stream.message}</span>
                </p>
              )}
            </div>

            <Input
              defaultValue={edit ? edu?.performance || "" : ""}
              label="Performance (optional)"
              placeholder="0.00"
              {...register("performance", {})}
            />

            <Button
              type="submit"
              bgColor="bg-[#1F2937]"
              className="w-1/2 font-semibold m-auto flex justify-center"
            >
              {" "}
              {loader ? (
                <CgSpinner class="animate-spin h-5 w-5 mr-3 text-white text-center" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddEducation;
