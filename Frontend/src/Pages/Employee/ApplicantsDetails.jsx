import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  getStudentResume,
  setStudentResume,
} from "../../store/Actions/resumeActions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../ResumeDocument/MyDocument";
import { RiDownload2Line } from "react-icons/ri";
import Button from "../../Components/Button";
import { RxCross2 } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ApplicantsDetails = () => {
  const style = {
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
  const internships = useSelector(
    (state) => state.internshipReducer.internshipData
  );
  // console.log(internships)
  const internship = internships?.find((internship) => internship._id == id);
  // console.log(internship)

  const jobs = useSelector((state) => state.jobReducer.jobData);
  // console.log(jobs)
  const job = jobs?.find((job) => job._id == id);
  // console.log(job)

  const students =
    (internship && internship?.students) || (job && job?.students);
  // console.log(students)

  const resumes = useSelector((state) => state.resumeReducer?.resumeData);

  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  // const handleDownload = (studentId) => {
  //   // Dispatch action to get student resume
  //   dispatch(getStudentResume(studentId));
  //   // Close confirmation dialog
  //   setShowConfirmation(true);
  // };

  const [updatedResume, setupdatedResume] = useState(null);

  const handleDownload = (studentId) => {
    setupdatedResume(resumes.find((resume) => resume.details.id === studentId));
    setShowConfirmation(true);
  };

  // const setReume = () => {
  //   dispatch(setStudentResume())
  //   setShowConfirmation(false)
  // }

  useEffect(() => {
    students.map((studentId) => dispatch(getStudentResume(studentId)));

    // return () => {
    //   dispatch(setStudentResume())
    // }
  }, []);

  // const updatedResume = useSelector((state) => state.resumeReducer?.resumeData?.updatedResume)
  // console.log(updatedResume)

  return (
    <>
      <div className="w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg text-gray-700">
        <h1 className="text-3xl  font-medium py-10 max-md:text-xl flex items-center justify-center gap-2">
          Candidates
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
                  Name
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Email
                </th>
                <th className="w-[300px] max-md:w-[200px] text-left font-medium tracking-wide">
                  Resume
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {resumes &&
                resumes.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-300 max-md:text-sm"
                  >
                    <td className="w-[300px] max-md:w-[200px] py-3 capitalize pl-5">
                      {item?.details?.firstname} {item?.details?.lastname}
                    </td>
                    {/* <td className='w-[300px] max-md:w-[200px] py-3 capitalize'>{item?.details?.lastname}</td> */}
                    <td className="w-[300px] max-md:w-[200px] py-3 ">
                      {item?.details?.email}
                    </td>
                    <td className="w-[300px] max-md:w-[200px] py-3 capitalize">
                      <RiDownload2Line
                        className="cursor-pointer"
                        onClick={() => handleDownload(item?.details?.id)}
                        size={20}
                        color="blue"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation dialog */}
      {showConfirmation && (
        <div className="w-full h-screen fixed top-[0]">
          <div className="w-full h-screen overlay bg-black opacity-50"></div>
          <div
            style={style}
            className={`mx-auto w-full max-w-xs bg-white rounded-lg p-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
          >
            <div className="">
              <p className="text-center leading-tight mt-5">
                Are you sure want to download this student's resume?
              </p>
              <div className="flex mt-5 justify-center gap-10">
                {updatedResume && (
                  <PDFDownloadLink
                    document={<MyDocument updatedResume={updatedResume} />}
                    fileName="resume"
                  >
                    <Button
                      type="submit"
                      bgColor="bg-[#2507B3]"
                      className="px-5 font-semibold"
                    >
                      Download
                    </Button>
                  </PDFDownloadLink>
                )}
              </div>
            </div>

            <Button
              type="submit"
              bgColor=""
              textColor="#1F2937"
              className="px-5 font-semibold absolute right-0 top-0"
              onClick={() => setShowConfirmation(false)}
            >
              <RxCross2 size={20} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicantsDetails;

// < tbody >
// { internshipId && internshipId.map((studentItem, index) => (
//   <tr key={index} className='border-b border-zinc-300 max-md:text-sm'>
//     {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
//       <>
//         <td className='w-[300px] max-md:w-[200px] py-3 capitalize pl-5'>{intern.company}</td>
//         <td className='w-[300px] max-md:w-[200px] py-3 capitalize flex items-center gap-5'>{intern.profile} <Link to={`/student/internships/read/${studentItem}`} ><FiExternalLink size={13} color='blue' cursor='pointer' /></Link></td>
//         <td className='w-[300px] max-md:w-[200px] py-3 capitalize'>{intern.internshiptype}</td>
//         <td className='w-[300px] max-md:w-[200px] py-3 capitalize text-sm'>{intern?.students?.length}</td>
//         <td className='w-[300px] max-md:w-[200px] py-3 capitalize text-sm'>{intern?.createdAt.split('T')[0]}</td>
//         {/* <td className='py-2 px-4 pl-16'>
//                       <Link to={`/student/internship/singleintership/${studentItem}`}><MdOutlineLibraryBooks /></Link>
//                     </td> */}
//         <td className=''>
//           <Link to={`/employee/application/applicants/${studentItem}`}
//             className='px-3 py-1.5 bg-[#2507B3] rounded-md text-white text-sm'>
//             view
//           </Link>
//         </td>
//       </>
//     ))}
//   </tr>
// ))}
//           </tbody >
