import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../store/Actions/jobActions";
import { fetchInternships } from "../../store/Actions/internshipActions";
import { LuArrowDown } from "react-icons/lu";
import { MdArrowOutward, MdOutlineDone } from "react-icons/md";
import Button from "../../Components/Button";

const EmployeeHome = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);
  const internships = useSelector(
    (state) => state.internshipReducer.internshipData
  );
  const students = useSelector((state) => state.userReducer.userData);
  useEffect(() => {
    try {
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);

  useEffect(() => {
    dispatch;
  }, [dispatch]);
  return (
    <>
      <div className="w-full py-2">
        <div className="w-full mt-14 px-4 md:px-10 flex flex-col items-center justify-center">
          <h1 className="w-full lg:w-[70%] text-4xl sm:5xl md:text-6xl sm:text-center font-medium tracking-wide leading-22">
            Find the best <span className="text-[#2507B3]">Candidates</span>{" "}
            <br />
            for your Company
          </h1>
          <h4 className="text-gray-500 mt-12 text-base md:text-lg lg:text-center tracking-wider lg:w-[60%]">
            Get more sales and maximize the conversion rates. Discover the most
            productive channels. Discover the optimal match for your Company and
            get the best results together
          </h4>
          <Link to={`/employee/jobs`}>
            <Button className="mt-10 md:mt-20 flex items-center gap-2 py-3">
              Get Started Now
              <MdArrowOutward />
            </Button>
          </Link>
        </div>

        <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 mt-8 sm:mt-12">
          <div class="text-center mb-8 py-5">
            <h1 className="text-center text-[#1F2937] text-3xl md:text-5xl font-medium leading-relaxed md:pl-12 capitalize tracking-normal">
              Leverage Global World-Class
              <span className="text-[#2507B3] leading-snug">
                <br />
                Talented
              </span>{" "}
              People
            </h1>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 lg:px-16 mt-8 sm:mt-10">
            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl cursor-pointer">
              <div class="flex items-center mb-4">
                <h1 class="text-xl font-medium text-[#2507B3]">01.</h1>
                <h1 class="text-xl font-medium capitalize ml-2">
                  80% Fast hiring
                </h1>
              </div>
              <p class="text-base capitalize tracking-wider">
                "Experience an 80% reduction in hiring time with our streamlined
                process. Say goodbye to endless back-and-forth and discover
                qualified candidates swiftly, ensuring your team is up and
                running in no time."
              </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-8 sm:col-start-1 sm:row-start-2 hover:shadow-2xl cursor-pointer">
              <div class="flex items-center mb-4">
                <h1 class="text-xl font-medium text-[#2507B3]">02.</h1>
                <h1 class="text-xl font-medium capitalize ml-2">
                  Decrease Spendings
                </h1>
              </div>
              <p class="text-base capitalize tracking-wider">
                "Cut recruitment costs by securing top candidates below market
                rates. Our innovative approach ensures the right fit for your
                team while saving significantly. Say goodbye to overspending
                with tailored, budget-friendly solutions."
              </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl cursor-pointer">
              <div class="flex items-center mb-4">
                <h1 class="text-xl font-medium text-[#2507B3]">03.</h1>
                <h1 class="text-xl font-medium capitalize ml-2">
                  Top 0.1% Candidates
                </h1>
              </div>
              <p class="text-base capitalize tracking-wide">
                To secure top 0.1% talent at lower-than-market rates, leverage
                non-monetary incentives such as remote work, flexible hours, and
                growth opportunities while highlighting your company's culture
                and potential.
              </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl cursor-pointer">
              <div class="flex items-center mb-4">
                <h1 class="text-xl font-medium text-[#2507B3]">04.</h1>
                <h1 class="text-xl font-medium capitalize ml-2">
                  Effortless Integration
                </h1>
              </div>
              <p class="text-base capitalize tracking-wide">
                Streamline onboarding and integration with our seamless process.
                Ensure new hires smoothly transition into your team, maximizing
                productivity from day one. Say hello to hassle-free integration
                and goodbye to wasted time.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
          <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center justify-center">
            <div class="w-full flex flex-col items-center leading-normal py-7 border-b-2 border-gray-400">
              <h1 class="text-4xl font-medium text-center">
                The All-in-one Hiring Platform
              </h1>
              <p class="text-center tracking-wide mt-4">
                Get more sales and maximize conversion rates. <br />
                Discover the most productive channels.
              </p>
              <button class="px-5 py-2 bg-[#2507B3] text-white mt-8 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 py-5">
            <div class="flex items-center gap-2 mb-4 sm:mb-0">
              <span class="py-1 px-1 bg-[#2507B3] rounded-full text-white">
                <MdOutlineDone size={16} />
              </span>
              <h1 class="font-medium text-[#2507B3]">Web Application</h1>
            </div>
            <div class="flex items-center gap-2">
              <span class="py-1 px-1 bg-[#2507B3] rounded-full text-white">
                <MdOutlineDone size={16} />
              </span>
              <h1 class="font-medium text-[#2507B3]">Mobile Friendly</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeHome;
