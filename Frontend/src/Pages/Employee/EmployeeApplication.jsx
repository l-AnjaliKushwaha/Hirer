import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Button from "../../Components/Button";
import { setStudentResume } from "../../store/Actions/resumeActions";

const EmployeeApplication = () => {
  const internshipId = useSelector(
    (state) => state.employeeReducer.employeeData?.employe.internships
  );
  const jobId = useSelector(
    (state) => state.employeeReducer.employeeData?.employe?.jobs
  );
  const internships = useSelector(
    (state) => state.internshipReducer?.internshipData
  );
  const jobs = useSelector((state) => state.jobReducer?.jobData);

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(setStudentResume());
  }, [location]);

  return (
    <>
      {/* Internship Application */}
      <div className="w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg text-gray-700">
        <h1 className="text-3xl  font-medium py-10 max-md:text-xl flex items-center justify-center gap-2">
          {" "}
          Internship Application
        </h1>
        <div
          className="rounded-xl overflow-hidden border-l border-r overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <table className="w-full table-fixed overflow-auto">
            {/* Table head */}
            <thead>
              <tr className="bg-gray-100 font-semibold  text-base max-md:text-sm">
                <th className="w-[300px] max-md:w-[200px] text-left py-4 pl-5 font-medium tracking-wide">
                  Company
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Profile
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Type
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Applicants
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Created At
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  View Applicants
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {internshipId ? (
                internshipId
                  .map((studentItem, index) => (
                    <tr
                      key={index}
                      className="border-b border-zinc-300 max-md:text-sm"
                    >
                      {internships
                        ?.filter((internship) => internship._id === studentItem)
                        .map((intern, internIndex) => (
                          <>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize pl-5">
                              {intern.company}
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize flex items-center gap-5">
                              {intern.profile}{" "}
                              <Link
                                to={`/student/internships/read/${studentItem}`}
                              >
                                <FiExternalLink
                                  size={13}
                                  color="blue"
                                  cursor="pointer"
                                />
                              </Link>
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize">
                              {intern.internshiptype}
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize text-sm">
                              {intern?.students?.length}
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize text-sm">
                              {intern?.createdAt.split("T")[0]}
                            </td>
                            <td className="">
                              <Link
                                to={`/employee/application/applicants/${studentItem}`}
                                className="px-3 py-1.5 bg-[#2507B3] rounded-md text-white text-sm"
                              >
                                view
                              </Link>
                            </td>
                          </>
                        ))}
                    </tr>
                  ))
                  .reverse()
              ) : (
                <div className="text-gray-700 text-lg font-medium">
                  No record{" "}
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Application */}
      <div className="w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg text-gray-700">
        <h1 className="text-3xl font-medium py-10 max-md:text-xl flex items-center  justify-center gap-2 ">
          Job Applications
        </h1>
        <div
          className="rounded-xl overflow-hidden border-l border-r overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <table className="w-full table-fixed">
            {/* Table header */}
            <thead className="bg-gray-300">
              <tr className="bg-gray-100 font-semibold text-base max-md:text-sm">
                <th className="w-[300px] max-md:w-[200px] text-left py-4 pl-5 font-medium tracking-wide">
                  Profile
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Company
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Type
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Applicants
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Created At
                </th>
                {/* <th className='py-2 px-4'>Review Application</th> */}
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  View Applicants
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {jobId ? (
                jobId
                  .map((studentItem, index) => (
                    <tr
                      key={index}
                      className="border-b border-zinc-300 max-md:text-sm"
                    >
                      {jobs
                        ?.filter((job) => job._id === studentItem)
                        .map((job, Index) => (
                          <>
                            <td className="w-[300px] max-md:w-[200px] py-3 pl-5 capitalize">
                              {job.company}
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize flex items-center gap-5">
                              {job.profile}{" "}
                              <Link to={`/student/job/read/${studentItem}`}>
                                <FiExternalLink
                                  size={13}
                                  color="blue"
                                  cursor="pointer"
                                />
                              </Link>
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize">
                              {job.jobtype}
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize text-sm">
                              {job?.students.length}
                            </td>
                            <td className="w-[300px] max-md:w-[200px] py-3 capitalize text-sm">
                              {job.createdAt.split("T")[0]}
                            </td>
                            {/* <td className='py-2 px-4 pl-20'>
                        <Link to={`/student/job/read/${studentItem}`}><MdOutlineLibraryBooks /></Link>
                      </td> */}
                            <td className="">
                              <Link
                                to={`/employee/application/applicants/${studentItem}`}
                                className="px-3 py-1.5 bg-[#2507B3] rounded-md text-white text-sm"
                              >
                                view
                              </Link>
                            </td>
                          </>
                        ))}
                    </tr>
                  ))
                  .reverse()
              ) : (
                <div className="text-gray-700 text-lg font-medium">
                  No record{" "}
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeApplication;
