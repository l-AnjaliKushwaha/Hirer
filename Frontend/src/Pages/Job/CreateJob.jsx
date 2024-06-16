import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Select from "../../Components/Select";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateJob } from "../../store/Actions/jobActions";
import { MdErrorOutline } from "react-icons/md";
import DatePicker from "react-datepicker";

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [i, setI] = useState(null);
  const create = async (data) => {
    await dispatch(asyncCreateJob(data));
    navigate("/employee");
  };
  useEffect(() => {
    const jobtype = watch((value, { name }) => {
      if (name == "jobtype") {
        value.jobtype == "Remote"
          ? setValue("location", "Remote")
          : setValue("location", "");
      }
      if (name == "workconditions") {
        let str = value.workconditions.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "responsibilities") {
        let str = value.responsibilities.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "description") {
        let str = value.description.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "preferences") {
        let str = value.preferences.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "assements") {
        let str = value.assements.trim("/n");
        setCurrlength(str.length);
      }
    });
  }, [watch, i]);
  return (
    <>
      <div className="w-full  flex flex-col items-center py-5 sm:px-5 gap-5 bg-gray-50">
        <h1 className="text-2xl font-medium py-5">Post Job</h1>
        <div className="mt-2 w-full sm:w-full  py-5 px-10   border-zinc-200 rounded-xl">
          <form onSubmit={handleSubmit(create)} className="">
            {/* Section-1-div */}
            <div className=" p-3 rounded-lg">
              <h1 className="px-5 py-3 text-lg font-medium">Job Details</h1>
              <div className="w-full border-2 rounded-lg px-5  flex flex-col items-center py-8  border-zinc-200 ">
                {/* title-div */}
                <div className="w-full md:max-w-4xl text-md mt-1">
                  <Input
                    label="Job Title"
                    placeholder="e.g. Software Engineer Trainee"
                    type="text"
                    {...register("profile", {
                      required: {
                        value: true,
                        message: "Profile is required",
                      },
                    })}
                  />
                  {errors.profile && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.profile.message}</span>
                    </p>
                  )}
                </div>

                {/* Skills-div */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Skills required"
                    placeholder="e.g. Java"
                    type="text"
                    {...register("skills", {
                      required: {
                        value: true,
                        message: "Skills is required",
                      },
                    })}
                  />
                  {errors.skills && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.skills.message}</span>
                    </p>
                  )}
                </div>

                {/* Job-type-div */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Select
                    options={["In office", "Remote", "Hybrid"]}
                    label="Job Type"
                    className="mb-4"
                    {...register("jobtype", {
                      required: {
                        value: true,
                        message: "Jobtype is required",
                      },
                    })}
                  />
                  {errors.jobtype && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.jobtype.message}</span>
                    </p>
                  )}
                </div>

                {/* Location */}

                <div className="w-full md:max-w-4xl mt-1">
                  <Input
                    label="Location"
                    placeholder="e.g. Indore"
                    type="text"
                    {...register("location", {
                      required: {
                        value: true,
                        message: "Location is required",
                      },
                    })}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />
                      <span>{errors.location.message}</span>
                    </p>
                  )}
                </div>

                {/* Working-type-div */}

                <div className="w-full md:max-w-4xl mt-3">
                  <label className="block text-md">Working Type</label>
                  <div className="mt-2 flex ml-5">
                    <div className="mr-4 flex items-center">
                      <input
                        id="fullTime"
                        name="workingType"
                        type="radio"
                        value="Full-time"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        {...register("workingtype", {
                          required: {
                            value: true,
                            message: "Workingtype is required",
                          },
                        })}
                      />
                      <label
                        htmlFor="fullTime"
                        className="ml-2 block text-md text-gray-900"
                      >
                        Full-time
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="partTime"
                        name="workingType"
                        type="radio"
                        value="Part-time"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        {...register("workingtype", {
                          required: {
                            value: true,
                            message: "Workingtype is required",
                          },
                        })}
                      />
                      <label
                        htmlFor="partTime"
                        className="ml-2 block text-md text-gray-900"
                      >
                        Part-time
                      </label>
                    </div>
                  </div>
                  {errors.workingtype && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.workingtype.message}</span>
                    </p>
                  )}
                </div>

                {/* Starting */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label className="block text-md">Start</label>
                  <div className="mt-2 flex">
                    <div className="mr-4 flex items-center ml-5">
                      <input
                        id="immediately"
                        name="start"
                        type="radio"
                        value="Immediately"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        {...register("start")}
                      />
                      <label
                        htmlFor="immediately"
                        className="ml-2 block text-md text-gray-900"
                      >
                        Immediately
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="later"
                        name="start"
                        type="radio"
                        value="Later"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        {...register("start")}
                      />
                      <label
                        htmlFor="later"
                        className="ml-2 block text-md text-gray-900"
                      >
                        Later
                      </label>
                    </div>
                  </div>
                </div>

                {/* Openings */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Number of Opening"
                    placeholder="e.g. 5"
                    type="number"
                    {...register("openings", {
                      required: {
                        value: true,
                        message: "openings is required",
                      },
                    })}
                  />
                  {errors.openings && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.openings.message}</span>
                    </p>
                  )}
                </div>

                {/* Start date */}

                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    style="relative"
                    type="text"
                    label="Start date"
                    placeholder="e.g. 08/08/2024"
                    {...register("startdate", {
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
                        setValue("startdate", formattedDate);
                      }}
                    />
                  </Input>
                  {errors.startdate && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.startdate.message}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Section-2-div */}
            <div className=" mt-6 p-3 rounded-lg">
              <h1 className="px-5 py-2 font-semibold">Salary & perks</h1>
              <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                {/* Salary  */}
                {/* <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Salary Amount (CTC)"
                    placeholder="e.g. 10000"
                    type="number"
                    {...register("salary")}
                  />
                </div> */}

                {/*Annual Salary  */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Annual Amount (CTC)"
                    placeholder="e.g. 3,50000 /- Year"
                    type="number"
                    {...register("package", {
                      required: {
                        value: true,
                        message: "Annual Amount is required",
                      },
                    })}
                  />
                  {errors.package && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.package.message}</span>
                    </p>
                  )}
                </div>

                {/* Perks */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label className="block mb-2">Perks:</label>
                  <div className="flex flex-col ml-4">
                    <div className="flex items-center">
                      <input
                        id="certificate"
                        name="perks"
                        type="checkbox"
                        value="Certificate"
                        {...register("perks")}
                      />
                      <label htmlFor="certificate" className="ml-2">
                        Certificate
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="letterOfRecommendation"
                        name="perks"
                        type="checkbox"
                        value="Letter of Recommendation"
                        {...register("perks")}
                      />
                      <label htmlFor="letterOfRecommendation" className="ml-2">
                        Letter of Recommendation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="flexibleWorkHours"
                        name="perks"
                        type="checkbox"
                        value="Flexible Work Hours"
                        {...register("perks")}
                      />
                      <label htmlFor="flexibleWorkHours" className="ml-2">
                        Flexible Work Hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="fiveDaysAWeek"
                        name="perks"
                        type="checkbox"
                        value="5 Days a Week"
                        {...register("perks")}
                      />
                      <label htmlFor="fiveDaysAWeek" className="ml-2">
                        5 Days a Week
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="informalDressCode"
                        name="perks"
                        type="checkbox"
                        value="Informal Dress Code"
                        {...register("perks")}
                      />
                      <label htmlFor="informalDressCode" className="ml-2">
                        Informal Dress Code
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="freeSnacksAndBeverages"
                        name="perks"
                        type="checkbox"
                        value="Free Snacks & Beverages"
                        {...register("perks")}
                      />
                      <label htmlFor="freeSnacksAndBeverages" className="ml-2">
                        Free Snacks & Beverages
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section-3-div */}
            <div className=" mt-5 p-3 rounded-lg">
              <h1 className="px-5 py-2 font-semibold">
                Company, Location, and Description
              </h1>
              <div className="w-full mt-2  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                {/* Company */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Company Name"
                    placeholder="e.g. Google"
                    type="text"
                    {...register("company", {
                      required: {
                        value: true,
                        message: "Company Name is required",
                      },
                    })}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.company.message}</span>
                    </p>
                  )}
                </div>

                {/* Experience */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Experience"
                    placeholder="e.g. 0-2 Years"
                    type="text"
                    {...register("experience")}
                  />
                </div>

                {/* Applicants */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Applicants"
                    placeholder="e.g. 1250"
                    type="text"
                    {...register("applicants")}
                  />
                </div>

                {/* Assessments */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="assements" className="block text-md ">
                    Assessments
                  </label>
                  <textarea
                    id="assements"
                    name="assements"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="Type your question here......"
                    {...register("assements", {
                      required: {
                        value: true,
                        message: "Assements is required",
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
                  {errors.assements && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.assements.message}</span>
                    </p>
                  )}
                </div>

                {/*  preferences */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="preferences" className="block text-md">
                    Preferences
                  </label>
                  <textarea
                    id="preferences"
                    name="preferences"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="e.g. I want to work for a Good company....."
                    {...register("preferences", {
                      required: {
                        value: true,
                        message: "Preferences is required",
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
                  {errors.preferences && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.preferences.message}</span>
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="description" className="block text-md ">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="e.g. Ensure an amazing demo experience for the child and parent..."
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is required",
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
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.description.message}</span>
                    </p>
                  )}
                </div>

                {/* responsibilities */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="responsibilities" className="block text-md">
                    Responsibilities
                  </label>
                  <textarea
                    id="responsibilities"
                    name="responsibilities"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="e.g. Adhere to the schedule for the demo as well as regular classes..."
                    {...register("responsibilities", {
                      required: {
                        value: true,
                        message: "responsibilities is required",
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
                  {errors.responsibilities && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.responsibilities.message}</span>
                    </p>
                  )}
                </div>

                {/* Qualifications */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="qualifications" className="block text-md ">
                    Qualifications
                  </label>
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="e.g. Solid understanding of JavaScript, HTML, CSS, and related web technologies..."
                    {...register("qualifications", {
                      required: {
                        value: true,
                        message: "Qualifications is required",
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
                  {errors.qualifications && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.qualifications.message}</span>
                    </p>
                  )}
                </div>

                {/* Work conditions */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="workconditions" className="block text-md ">
                    Work Conditions
                  </label>
                  <textarea
                    id="workconditions"
                    name="workconditions"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="e.g. Salary: 2-4 LPA"
                    {...register("workconditions", {
                      required: {
                        value: true,
                        message: "Working Condition is required",
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
                  {errors.workconditions && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.workconditions.message}</span>
                    </p>
                  )}
                </div>

                {/* Company Detail */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="companyDetail" className="block text-md">
                    Company Detail
                  </label>
                  <textarea
                    id="companyDetail"
                    name="companyDetail"
                    rows="4"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                    placeholder="e.g. We're not just another digital agency, we're your dedicated dynamic world ...."
                    {...register("companyDetail", {
                      required: {
                        value: true,
                        message: "Company Detail is required",
                      },
                    })}
                  />
                  {errors.companyDetail && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.companyDetail.message}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Section-4-div */}
            <div className=" mt-6 p-3 rounded-lg">
              <h1 className="px-5 py-2 font-semibold">
                Alternate Mobile Number for this listing
              </h1>
              <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                {/* Contact */}
                <div className="w-full md:max-w-4xl text-md mt-1">
                  <Input
                    label="Contact Number"
                    placeholder="e.g. +91 Enter Mobile Number...."
                    type="number"
                    {...register("contact")}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <Button
                type="submit"
                bgColor="bg-[#1F2937]"
                className="py-2 px-5 bg-[#1F2937] text-white rounded-lg"
              >
                Post Job
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
