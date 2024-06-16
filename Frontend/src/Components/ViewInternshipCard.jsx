import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import { BsCalendarDate } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";

const ViewInternshipCard = ({ index, internship, color }) => {
  const defaultColor = "#dadada";

  const colors = [];
  // const colors = ["bg-[#D8E8D4]", "bg-[#FFE0CD]",];

  // Convert the ISO string to a Date object
  const date1 = new Date(internship?.createdAt);
  const date2 = new Date(); // Current date

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = date2 - date1;
  // console.log(differenceInMilliseconds);

  // Convert milliseconds to days
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  // console.log(`Difference in days: ${differenceInDays}`);

  return (
    <div className="snap-center">
      <Link to={`/student/internships/readinterbship/${internship._id}`}>
        <div
          key={internship._id}
          className={`m-2 w-80 mb-5 p-4 shrink-0 rounded-xl bg-white text-black border hover:border-[#2507B3]  ${
            colors[index % colors.length]
          }`}
        >
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 py-1 px-3 border rounded-md">
              <span className="">
                <RxCountdownTimer color="blue" />
              </span>
              <h3 className="font-medium text-xs">
                posted {differenceInDays} days ago
              </h3>
            </div>
          </div>

          <div className="py-4 border-b flex justify-between items-center">
            <div>
              <div className="">
                <h3 className="text-lg font-semibold capitalize text-gray-700">
                  {internship.profile}
                </h3>
              </div>

              <div className="">
                <h3 className="text-sm font-medium capitalize text-gray-500">
                  {internship.company}
                </h3>
              </div>
            </div>
            <div
              className={`h-10 w-10 uppercase flex justify-center items-center font-bold text-white rounded-full`}
              style={{ backgroundColor: color || defaultColor }}
            >
              {internship?.company?.charAt(0)}
            </div>
          </div>

          <div className="py-4 text-sm capitalize text-gray-500">
            <div className="flex items-center gap-2 mt-2">
              <IoLocationSharp />
              <h3 className="">{internship.location}</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <BsCalendarDate />
              <h3 className="">₹ {internship.stipend.amount} /month</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaMoneyBill />
              <h3 className="">{internship.duration} months</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <HiMiniUsers />
              <h3 className="">{internship.applicants} applicants</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ViewInternshipCard;
