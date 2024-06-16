import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer);
  const { isAuth: isEmployeeAuth } = useSelector(
    (state) => state.employeeReducer
  );
  const authStatus = isStudentAuth || isEmployeeAuth;

  return (
    <div className="py-10 md:py-16 mt-10 bg-[#000000] text-white px-10 md:px-20 lg:px-32">
      <div className="sm:flex justify-between w-full ">
        <div className="mb-10">
          <Link
            to={authStatus ? (isStudentAuth ? "/student" : "/employee") : ""}
          >
            <img
              className="h-10 w-fit bg-white px-3 py-2 rounded-sm"
              src="Job_Seeking2-removebg-preview.png"
              alt="./logo.jpg"
            />
          </Link>
        </div>
        <div className="sm:flex inline-flex justify-between flex-wrap gap-10 md:gap-16 lg:gap-32 text-gray-200 text-sm">
          <div className="flex flex-col gap-1">
            <h6 className="font-semibold text-lg text-white mb-1">Company</h6>
            <h6 className="cursor-pointer">About us</h6>
            <h6 className="cursor-pointer">Blog</h6>
            <h6 className="cursor-pointer">Career advice</h6>
            <h6 className="cursor-pointer">Career explorer</h6>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-semibold text-lg text-white mb-1">Support</h6>
            <h6 className="cursor-pointer">FAQ</h6>
            <h6 className="cursor-pointer">Contact us</h6>
            <h6 className="cursor-pointer">Privacy Policy</h6>
            <h6 className="cursor-pointer">Terms & Conditions</h6>
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="font-semibold text-lg text-white mb-1">Others</h6>
            <h6 className="cursor-pointer">Hirer events</h6>
            <h6 className="cursor-pointer">Work at hirer</h6>
            <h6 className="cursor-pointer">Browse jobs</h6>
            <h6 className="cursor-pointer">Browse internships</h6>
            {/* <h6 className="cursor-pointer" >Browse companies</h6> */}
          </div>
        </div>
      </div>

      <div className="sm:flex justify-between mt-10 items-end">
        <div>
          <h1 className="font-semibold text-lg mb-2">Follow Us</h1>
          <div className="flex gap-6">
            <FaInstagram className="text-xl md:text-2xl cursor-pointer" />
            <FaFacebook className="text-xl md:text-2xl cursor-pointer" />
            <FaLinkedinIn className="text-xl md:text-2xl cursor-pointer" />
            <RiTwitterXFill className="text-xl md:text-2xl cursor-pointer" />
            <FaYoutube className="text-xl md:text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="">
          <h6 className="text-sm text-center mt-10">
            <span className="cursor-pointer">©️ Copyright 2024 Hirer</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
