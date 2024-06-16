import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Select from "../../Components/Select";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateInternship } from "../../store/Actions/internshipActions";
import { MdErrorOutline } from "react-icons/md";
import DatePicker from "react-datepicker";

const CreateInternship = () => {
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
  console.log(i);
  const create = async (data) => {
    await dispatch(asyncCreateInternship(data));
    navigate("/employee");
  };

  useEffect(() => {
    const internshiptype = watch((value, { name }) => {
      if (name == "internshiptype") {
        value.internshiptype == "Remote"
          ? setValue("location", "Remote")
          : setValue("location", "");
      }
      // if (name == "companyDetail") {
      //     let str = value.companyDetail.trim("/n")
      //     setCurrlength(str.length)
      // }
      if (name == "workconditions") {
        let str = value.workconditions.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "qualifications") {
        let str = value.qualifications.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "description") {
        let str = value.description.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "assessments") {
        let str = value.assessments.trim("/n");
        setCurrlength(str.length);
      }
      if (name == "responsibility") {
        let str = value.responsibility.trim("/n");
        setCurrlength(str.length);
      }
    });
  }, [watch, i]);

  return (
    <>
      <div className="w-full  flex flex-col items-center py-5 sm:px-5 gap-5 bg-gray-50">
        <h1 className="text-2xl font-medium py-5">Post Internship</h1>
        <div className="mt-2 w-full sm:w-full  py-5 px-10   border-zinc-200 rounded-xl">
          <form onSubmit={handleSubmit(create)} className="">
            {/* Section-1-div */}
            <div className=" p-3 rounded-lg">
              <h1 className="px-5 py-3 text-lg font-medium">
                Internship Details
              </h1>
              <div className="w-full border-2 rounded-lg px-5  flex flex-col items-center py-8  border-zinc-200 ">
                {/* Profile-div */}
                <div className="w-full md:max-w-4xl text-md mt-1">
                  <Input
                    label="Profile"
                    placeholder="e.g. MERN Stack Development"
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
                    label="Skills"
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

                {/* Internship-type-div */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Select
                    options={["In office", "Remote"]}
                    label="Internship Type"
                    className="mb-4"
                    {...register("internshiptype", {
                      required: {
                        value: true,
                        message: "internshiptype is required",
                      },
                    })}
                  />
                  {errors.internshiptype && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.internshiptype.message}</span>
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
                  <label className="block mb-2">Working Type:</label>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <input
                        id="partTime"
                        type="radio"
                        value="Part-time"
                        {...register("workingtype", {
                          required: {
                            value: true,
                            message: "Workingtype is required",
                          },
                        })}
                      />
                      <label htmlFor="partTime" className="ml-2">
                        Part-time
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="fullTime"
                        type="radio"
                        value="Full-time"
                        {...register("workingtype", {
                          required: {
                            value: true,
                            message: "workingtype is required",
                          },
                        })}
                      />
                      <label htmlFor="fullTime" className="ml-2">
                        Full-time
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

                {/* Openings */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Number of Openings"
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

                {/* Start Date */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label className="block mb-2">Start Date:</label>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        id="immediately"
                        type="radio"
                        value="Immediately"
                        {...register("startdate")}
                      />
                      <label htmlFor="immediately" className="ml-2 mr-4">
                        Immediately
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="later"
                        type="radio"
                        value="Later"
                        {...register("startdate")}
                      />
                      <label htmlFor="later" className="ml-2">
                        Later
                      </label>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    label="Duration"
                    placeholder="e.g. 6 Month"
                    type="text"
                    {...register("duration")}
                  />
                </div>

                {/* From */}

                <div className="w-full md:max-w-4xl mt-3">
                  <Input
                    style="relative"
                    type="text"
                    label="From"
                    placeholder="e.g. 01/01/2024"
                    {...register("from", {
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
                        setValue("from", formattedDate);
                      }}
                    />
                  </Input>
                  {errors.from && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.from.message}</span>
                    </p>
                  )}
                </div>

                {/* To */}

                <div className="w-full md:max-w-4xl mt-3 ">
                  <Input
                    style="relative"
                    type="text"
                    label="To"
                    placeholder="e.g. 01/06/2024"
                    {...register("to", {
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
                        setValue("to", formattedDate);
                      }}
                    />
                  </Input>
                  {errors.to && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.to.message}</span>
                    </p>
                  )}
                </div>

                {/* Responsibility */}
                <div className="w-full md:max-w-4xl mt-3">
                  <label htmlFor="responsibility" className="block mb-2">
                    Intern's Responsibility:
                  </label>
                  <textarea
                    id="responsibility"
                    placeholder="Intern's day-to-day responsibility : "
                    {...register("responsibility", {
                      required: {
                        value: true,
                        message: "Responsibility is required",
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
                    className="border border-gray-300 px-3 py-2 rounded-lg w-full h-[110px] resize-none"
                  />
                  {errors.responsibility && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.responsibility.message}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section-2-div */}
            <div className=" mt-6 p-3 rounded-lg">
              <h1 className="px-5 py-2 text-lg font-medium">Stipend & perks</h1>
              <div className="w-full  flex flex-col items-center py-8 px-5 border-2 border-zinc-200 rounded-lg">
                {/* Stipend */}
                <div className="w-full md:max-w-4xl mt-1">
                  <Input
                    label="Stipend Amount"
                    placeholder="'e.g. 10000'"
                    type="number"
                    {...register("stipend.amount", {
                      required: {
                        value: true,
                        message: "Stipend Amount is required",
                      },
                    })}
                  />
                  {errors.stipend && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.stipend.message}</span>
                    </p>
                  )}
                </div>
                {/* Status */}
                <div className="w-full md:max-w-4xl mt-1">
                  <Select
                    options={[
                      "Fixed",
                      "Negotiable",
                      "Performance based",
                      "Unpaid",
                    ]}
                    label="Stipend Status"
                    className="mb-4"
                    {...register("stipend.status")}
                  />
                </div>

                {/* Perks */}
                <div className="w-full md:max-w-4xl mt-1">
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
              <h1 className="px-5 py-2 text-md font-medium">
                Company, Location, and Description
              </h1>
              <div className="w-full mt-2  flex flex-col items-center py-8 px-5 border-2 border-zinc-200 rounded-lg">
                {/* Company */}
                <div className="w-full md:max-w-4xl mt-1">
                  <Input
                    label="Company Name"
                    placeholder="e.g. Google"
                    type="text"
                    {...register("company", {
                      required: {
                        value: true,
                        message: "Company is required",
                      },
                    })}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.company.message}</span>
                    </p>
                  )}
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
                  <label htmlFor="assessments" className="block mb-2 ml-2">
                    Assessments:
                  </label>
                  <textarea
                    id="assessments"
                    name="assessments"
                    className="w-full border rounded-lg px-3 py-2 h-[110px] resize-none"
                    placeholder="Type your question here...."
                    {...register("assessments", {
                      required: {
                        value: true,
                        message: "Assessments is required",
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
                  {errors.assessments && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline />{" "}
                      <span>{errors.assessments.message}</span>
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="w-full md:max-w-4xl mt-1 ">
                  <label htmlFor="description" className="block mb-2 ml-2">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="w-full border rounded-lg px-3 py-2 h-[110px] resize-none"
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

                {/* Qualifications */}
                <div className="w-full md:max-w-4xl mt-1 ">
                  <label htmlFor="qualifications" className="block ml-2 mb-2">
                    Qualifications:
                  </label>
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    className="w-full border rounded-lg px-3 py-2 h-[110px] resize-none"
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
                <div className="w-full md:max-w-4xl mt-1 ">
                  <label htmlFor="workconditions" className="block mb-2 ml-2">
                    Work Conditions:
                  </label>
                  <textarea
                    id="workconditions"
                    name="workconditions"
                    className="w-full border rounded-lg px-3 py-2 h-[110px] resize-none"
                    placeholder="e.g. Salary: 2-4 LPA"
                    {...register("workconditions", {
                      required: {
                        value: true,
                        message: "work conditions is required",
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
                <div className="w-full md:max-w-4xl mt-1  ">
                  <label htmlFor="companyDetail" className="block mb-2 ml-2">
                    Company Detail:
                  </label>
                  <textarea
                    id="companyDetail"
                    name="companyDetail"
                    className="w-full border rounded-lg px-3 py-2 h-[110px] resize-none"
                    placeholder="e.g. We're not just another digital agency, we're your dedicated dynamic world..."
                    {...register("companyDetail", {
                      required: {
                        value: true,
                        message: "companyDetail is required",
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
              <h1 className="px-5 py-2 text-md font-medium">
                Alternate Mobile Number for this listing
              </h1>
              <div className="w-full  flex flex-col items-center py-8 px-5 border-2 border-zinc-200 rounded-lg">
                {/* Contact */}
                <div className="w-full text-md  md:max-w-4xl mt-1">
                  <Input
                    label="Contact Number"
                    placeholder="e.g. +91 Enter Mobile Number...."
                    type="number"
                    {...register("contact", {
                      required: {
                        value: true,
                        message: "Contact is required",
                      },
                      maxLength: [10, "Contact must not exceed 10 character"],
                      minLength: [
                        10,
                        "Contact should be atleast 4 character long",
                      ],
                    })}
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <MdErrorOutline /> <span>{errors.contact.message}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <Button
                type="submit"
                bgColor="bg-[#1F2937]"
                className="py-2 px-5 bg-[#1F2937] text-white rounded-lg"
              >
                Post Internship
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateInternship;
