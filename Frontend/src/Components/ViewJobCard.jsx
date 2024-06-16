import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import { BsCalendarDate } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";

const ViewJobCard = ({ index, job, color }) => {
  const defaultColor = "#dadada";

  const colors = [];

  // Convert the ISO string to a Date object
  const date1 = new Date(job?.createdAt);
  const date2 = new Date(); // Current date

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = date2 - date1;
  console.log(differenceInMilliseconds);

  // Convert milliseconds to days
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  const calculateAnnualSalary = (monthlySalary) => {
    let salary = Math.floor(job.package / 12);
    return salary;
  };

  return (
    <>
      <Link to={`/student/jobs/readjob/${job._id}`}>
        <div
          key={job._id}
          className={`m-2 w-80 mb-5 p-4 text-black border hover:border-[#2507B3] bg-white shrink-0 rounded-xl ${
            colors[index % colors.length]
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 py-1 px-3 border rounded-md">
              <span className="">
                <RxCountdownTimer color="blue" />
              </span>
              <h3 className="text-xs font-medium">
                posted {differenceInDays} days ago
              </h3>
            </div>
          </div>

          <div className="py-4 border-b flex justify-between items-center">
            <div>
              <div className="">
                <h3 className="text-lg font-semibold capitalize text-gray-700">
                  {job.profile}
                </h3>
              </div>

              <div className="">
                <h3 className="text-sm font-medium capitalize text-gray-500">
                  {job.company}
                </h3>
              </div>
            </div>
            <div
              className={`h-10 w-10 uppercase flex justify-center items-center font-bold text-white rounded-full`}
              style={{ backgroundColor: color || defaultColor }}
            >
              {job?.company?.charAt(0)}
            </div>
          </div>

          <div className="py-4 text-sm capitalize text-gray-500">
            <div className="flex items-center gap-2 mt-2">
              <IoLocationSharp />
              <h3 className="">{job.location}</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <BsCalendarDate />
              <h3 className="">₹ {calculateAnnualSalary(job.salary)} /month</h3>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <HiMiniUsers />
              <h3 className="">{job.applicants} applicants</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ViewJobCard;
