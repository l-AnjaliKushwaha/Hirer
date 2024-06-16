import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogout as employeeLogout } from "../../store/Actions/employeeActions";
import { toast } from "react-toastify";

const EmployeeHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();
  const employe = useSelector(
    (state) => state.employeeReducer.employeeData?.employe
  );

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const Dropdown = () => {
    setDropdown(!dropdown);
  };

  const backHandler = () => {
    setIsProfileOpen(false);
    setDropdown(false);
  };

  const LogoutHandler = async () => {
    const error = await dispatch(employeeLogout());
    error
      ? toast.error(error.data.message)
      : toast.success("Logout Successfully");
    setIsProfileOpen(false);
    setDropdown(false);
    // Navigate to the appropriate page after logout
  };

  return (
    <header className="w-full  bg-white text-gray-500 font-semibold">
      <nav className="w-full px-10 py-5 flex justify-between items-center relative border-b-2 pb-3 ">
        {/* leftItem */}
        <div className="w-[200px]">
          <Link to="/employee">
            <img
              className="max-sm:h-6 h-10"
              src="Job Seeking2.png"
              alt="./logo.jpg"
            />
          </Link>
        </div>
        {/* middleItems */}
        <ul className="hidden lg:flex justify-center gap-12 items-center">
          <li>
            <Link
              to="/employee/internships"
              className="text-black font-normal text-lg hover:text-[#2507B3]"
            >
              Internships
            </Link>
          </li>
          <li>
            <Link
              to="/employee/jobs"
              className="text-black font-normal text-lg hover:text-[#2507B3]"
            >
              Jobs
            </Link>
          </li>
        </ul>
        {/* rightItems */}
        <div className="w-[200px] flex justify-end gap-8 items-center">
          <div
            className="h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleProfile}
          >
            <img
              className="rounded-full h-full w-full"
              src={employe.avatar.url}
              alt=""
            />
          </div>
        </div>
      </nav>
      {/*  profile options */}
      <div
        className={
          isProfileOpen
            ? `overlay w-full h-screen fixed top-0 bg-black opacity-50`
            : "hidden"
        }
        onClick={backHandler}
      ></div>
      <div
        className={`h-full w-full max-w-sm fixed top-0 right-0 bg-gray-100 p-4 ${
          isProfileOpen ? "animate__slideInRight" : "animate__slideOutRight"
        }`}
      >
        <div className="w-full flex justify-end px-10 py-6">
          <RxCross2
            onClick={backHandler}
            size={27}
            className="cursor-pointer text-black "
          />
        </div>
        <div className="w-full flex flex-col items-center border-b py-2 mb-4">
          <div className="h-12 w-12 rounded-full border-2 relative">
            <img
              className="rounded-full h-full w-full"
              src={employe.avatar.url}
              alt=""
            />
            <AiOutlineEdit
              size={27}
              className="absolute bottom-0 -right-8 cursor-pointer hover:bg-gray-200 rounded-full p-1.5 text-black"
            />
          </div>
          <h6 className="text-black capitalize font-semibold text-sm">
            {employe.firstname} {employe.lastname}
          </h6>
          <span className="font-normal text-sm">{employe.email}</span>
        </div>
        <div className="w-full flex flex-col gap-3 px-2 text-black text-lg font-normal">
          <div className="w-full flex flex-col gap-3">
            <Link
              to="/employee"
              onClick={backHandler}
              className="hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/employee/internships/create"
              onClick={backHandler}
              className="hover:text-blue-600"
            >
              Create Internship
            </Link>
            <Link
              to="/employee/jobs/create"
              onClick={backHandler}
              className="hover:text-blue-600"
            >
              Create Job
            </Link>
          </div>
          <div className="w-full">
            <button
              className="w-full flex justify-between items-center mb-3 hover:text-blue-600"
              onClick={Dropdown}
            >
              <span>Manage Account</span>
              <RiArrowDropDownLine size={25} />
            </button>
            {dropdown && (
              <div className="w-5/6 ml-auto flex flex-col gap-3">
                <Link
                  to="/employee/reset-password"
                  onClick={backHandler}
                  className="hover:text-blue-600"
                >
                  Change Password
                </Link>
                <Link
                  to="/employee/forget-password"
                  onClick={backHandler}
                  className="hover:text-blue-600"
                >
                  Forget Password
                </Link>
                <Link onClick={LogoutHandler} className="hover:text-blue-600">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default EmployeeHeader;
