import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import JobCard from "../../Components/JobCard";
import InternshipCard from "../../Components/InternshipCard";
import { FaCircle } from "react-icons/fa";
const Bookmark = () => {
  const internshipId = useSelector(
    (state) => state.userReducer.userData?.student.bookmarkinternship
  );
  console.log(internshipId);
  const internships = useSelector(
    (state) => state.internshipReducer.internshipData
  );

  const jobId = useSelector(
    (state) => state.userReducer.userData?.student.bookmarkjob
  );
  console.log(jobId);

  const jobs = useSelector((state) => state.jobReducer.jobData);

  function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the color code in hexadecimal format
    const colorCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16
    )}`;

    return colorCode;
  }

  return (
    <>
      {/* Internship - BookMark */}
      <div className=" w-full overflow-hidden">
        <div className="py-3 mt-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-medium ">
            Bookmark Internship
          </h1>
        </div>

        <div
          id="job"
          className="w-full flex items-center gap-5 whitespace-nowrap  overflow-y-hidden overflow-x-scroll snap-mandatory  px-10 bg-gray-50 py-5"
        >
          <ul className="flex items-center gap-10 whitespace-nowrap">
            {internshipId ?
              (internshipId.map((studentItem, index) => (
                <React.Fragment key={index}>
                  {internships
                    ?.filter((internship) => internship._id === studentItem)
                    .map((intern, internIndex) => (
                      <InternshipCard
                        internship={intern}
                        index={index}
                        key={internIndex}
                        color={generateRandomColor()}
                      />
                    ))}
                </React.Fragment>
              )).reverse()) :
              ((<div className='text-gray-700 text-lg font-medium'>No record </div>))}
          </ul>
        </div>
      </div>

      {/* Jobs - BookMark */}
      <div className=" w-full overflow-hidden">
        <div className="py-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-medium ">
            Bookmark Job
          </h1>
        </div>

        <div
          id="job"
          className="w-full flex items-center gap-5 whitespace-nowrap  overflow-y-hidden overflow-x-scroll snap-mandatory  px-10 bg-gray-50 py-5"
        >
          <ul className="flex items-center gap-10 whitespace-nowrap">
            {jobId ?
              (jobId.map((studentItem, index) => (
                <React.Fragment key={index}>
                  {jobs
                    ?.filter((job) => job._id === studentItem)
                    .map((job, jobIndex) => (
                      <JobCard
                        job={job}
                        key={jobIndex}
                        index={index}
                        color={generateRandomColor()}
                      />
                    ))}
                </React.Fragment>
              )).reverse()) :
            ((<div className='text-gray-700 text-lg font-medium'>No record </div>))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
