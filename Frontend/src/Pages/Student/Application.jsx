import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
const Application = () => {
  const dispatch = useDispatch();

  const internshipId = useSelector(
    (state) => state.userReducer.userData?.student.internships
  );

  const jobId = useSelector(
    (state) => state.userReducer.userData?.student.jobs
  );

  const internships = useSelector(
    (state) => state.internshipReducer.internshipData
  );
  // console.log(internships)
  const jobs = useSelector((state) => state.jobReducer.jobData);
  // console.log(jobs)

  // useEffect(() => {
  //   dispatch(allapplyinternship(student._id))
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(allapplyjob(student._id))

  // }, [dispatch])

  return (
    <>
      {/* Internship - Application */}
      <div className="w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg text-gray-700">
        <h1 className="text-3xl  font-medium py-10 max-md:text-xl flex items-center justify-center gap-2">
          {" "}
          Internship Applications
        </h1>
        <div
          className="rounded-xl overflow-hidden border-l border-r overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <table className="w-full table-fixed overflow-auto">
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
                  Applied on
                </th>
                {/* <th className='w-[300px] max-md:w-[200px] text-left font-medium tracking-wide'>Review</th> */}
              </tr>
            </thead>
            <tbody>
              {internshipId ?
                (internshipId.map((studentItem, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-300 max-md:text-sm"
                  >
                    {internships
                      ?.filter((internship) => internship._id === studentItem)
                      .map((intern, internIndex) => (
                        <React.Fragment key={internIndex}>
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
                            {intern.students?.length}
                          </td>
                          <td className="w-[300px] max-md:w-[200px] py-3 capitalize text-sm">
                            {intern.createdAt.split("T")[0]}
                          </td>
                          {/* <td className='w-[300px] max-md:w-[200px] py-3 capitalize'>
                        <Link to={`/student/internships/read/${studentItem}`} className='block'><span><MdOutlineLibraryBooks /></span></Link>
                      </td> */}
                        </React.Fragment>
                      ))}
                  </tr>
                )).reverse()) :
                ((<div className='text-gray-700 text-lg font-medium'>No record </div>)) }
            </tbody>
          </table>
        </div>

        {/* Job - Application */}
      </div>

      {/* job applications */}
      <div className="w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg text-gray-700">
        <h1 className="text-3xl font-medium py-10 max-md:text-xl flex items-center justify-center gap-2 ">
          Job Applications
        </h1>
        <div
          className="rounded-xl overflow-hidden border-l border-r overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100 font-semibold text-base max-md:text-sm">
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
                  Applied on
                </th>
                {/* <th className='w-[300px] max-md:w-[200px] text-left font-medium tracking-wide'>Review</th> */}
              </tr>
            </thead>
            <tbody>
              {jobId ?
                (jobId.map((studentItem, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-300 max-md:text-sm"
                  >
                    {jobs
                      ?.filter((job) => job._id === studentItem)
                      .map((job, Index) => (
                        <React.Fragment key={Index}>
                          <td className="w-[300px] max-md:w-[200px] py-3 capitalize pl-5">
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
                            {job.students.length}
                          </td>
                          <td className="w-[300px] max-md:w-[200px] py-3 capitalize text-sm">
                            {job.createdAt.split("T")[0]}
                          </td>
                          {/* <td className='w-[300px] max-md:w-[200px] py-3 capitalize'>
                        <Link to={`/student/job/read/${studentItem}`} className='block'><span><MdOutlineLibraryBooks /></span></Link>
                      </td> */}
                        </React.Fragment>
                      ))}
                  </tr>
                )).reverse()) : 
              ((<div className='text-gray-700 text-lg font-medium'>No record </div>))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Application;
