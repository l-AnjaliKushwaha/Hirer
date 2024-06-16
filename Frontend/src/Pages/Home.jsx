import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInternships } from "../store/Actions/internshipActions";
import { fetchJobs } from "../store/Actions/jobActions";
import InternshipCard from "../Components/InternshipCard";
import JobCard from "../Components/JobCard";
import Button from "../Components/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { LuArrowDown } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import LoadingPage from "../Components/Loading/LoadingPage";

const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);
  const internships = useSelector(
    (state) => state.internshipReducer.internshipData
  );

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

  // const [internshipTitleInput, setInternshipTitleInput] = useState("")
  // const [internshipLocationInput, setinternshipLocationInput] = useState("")
  // const [jobTitleInput, setJobTitleInput] = useState("")
  // const [jobLocationInput, setJobLocationInput] = useState("")
  // const [filterredInternships, setFilteredInternships] = useState([])
  // const [filterredJobs, setFilteredJobs] = useState([])

  // useEffect(() => {
  //   if (internships && !internshipTitleInput && !internshipLocationInput) {
  //     // console.log("hello")
  //     setFilteredInternships(internships);
  //   }

  // }, [internships, internshipTitleInput, internshipLocationInput]);

  // useEffect(() => {
  //   if (jobs && !jobTitleInput && !jobLocationInput) {
  //     // console.log("hey")
  //     setFilteredJobs(jobs);
  //   }
  // }, [jobs, jobTitleInput, jobLocationInput]);

  // const titleHandleChange = (value) => {
  //   setInternshipTitleInput(value);
  //   console.log(internshipTitleInput)
  //   // without search button filter
  //   // if (value === "") {
  //   //   setFilteredInternships(internships);
  //   // } else {
  //   //   const filtered = internships.filter((internship) => {
  //   //     return (
  //   //       (internship.profile && internship.profile.toLowerCase().startsWith(value.toLowerCase()))
  //   //     );
  //   //   });
  //   //   setFilteredInternships(filtered);
  //   // }
  // };

  // const locationHandleChange = (value) => {
  //   setinternshipLocationInput(value);
  //   console.log(internshipLocationInput)
  //   // if (value === "") {
  //   //   setFilteredInternships(internships);
  //   // } else {
  //   //   const filtered = internships.filter((internship) => {
  //   //     return (
  //   //       (internship.location && internship.location.toLowerCase().startsWith(value.toLowerCase()))
  //   //     );
  //   //   });
  //   //   setFilteredInternships(filtered);
  //   // }
  // };

  // const handleInternshipSearch = () => {
  //   // console.log(internshipLocationInput, internshipTitleInput)
  //   if (internshipTitleInput === "" && internshipLocationInput === "") {
  //     setFilteredInternships(internships);
  //     console.log(internships)
  //   }
  //   else {
  //     const filtered = internships.filter((internship) => {
  //       return (
  //         (internship.location && internship.location.toLowerCase().startsWith(internshipLocationInput.toLowerCase()))
  //         &&
  //         (internship.profile && internship.profile.toLowerCase().startsWith(internshipTitleInput.toLowerCase()))
  //       );
  //     });
  //     setFilteredInternships(filtered);
  //     // console.log(filtered)
  //   }
  // }

  // const handleJobSearch = () => {
  //   // console.log(jobLocationInput, jobTitleInput)
  //   if (jobTitleInput === "" && jobLocationInput === "") {
  //     setFilteredJobs(jobs);
  //     console.log(jobs)
  //   }
  //   else {
  //     const filtered = jobs.filter((job) => {
  //       return (
  //         (job.location && job.location.toLowerCase().startsWith(jobLocationInput.toLowerCase()))
  //         &&
  //         (job.profile && job.profile.toLowerCase().startsWith(jobTitleInput.toLowerCase()))
  //       );
  //     });
  //     setFilteredJobs(filtered);
  //     // console.log(filtered)
  //   }
  // }

  const navigate = useNavigate();

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

  // Loading state
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (internships !== null && jobs !== null) {
      setLoader(false);
    }
  });

  if (loader) {
    return <LoadingPage loader={loader} />;
  }
  return (
    <div className="w-full ">
      <div className=" w-full flex justify-center px-10 pb-10 lg:pb-40">
        <div className="pt-10 md:pt-20 md:flex flex-col items-center">
          <div className="flex flex-wrap gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider">
              Welcome To
            </h1>
            <img
              className="h-10 sm:h-12 md:h-14"
              src="Job_Seeking2-removebg-preview.png"
              alt="./logo.jpg"
            />
          </div>
          <span className="text-3xl md:text-4xl block mt-3 tracking-wide">
            Your Gateway to Career Opportunities!
          </span>

          <p className="text-gray-500 mt-10 text-base md:text-lg md:text-center tracking-wider">
            Discover endless opportunities and unlock your career Potential and
            explore <br /> endless possibilities with{" "}
            <span className="font-semibold">
              Hirer- An amazing job search platform.
            </span>
          </p>

          <Button
            className="mt-10 md:mt-20 flex items-center gap-2 py-3"
            onClick={() => navigate("/student/signup")}
          >
            Get Started Now
            <MdArrowOutward />
          </Button>

          {/* <div class="animate-bounce bg-[#2507B3] rounded-full absolute bottom-5">
              <LuArrowDown className="text-white p-5 size-16" />
            </div> */}
          <div className="hidden lg:block animate-bounce rounded-full absolute bottom-20 h-14 w-14">
            <img src="Job_Seeking_logo-removebg-preview1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full sm:py-16 bg-gray-50 px-10 py-16">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium px-10 pb-16">
          <span className=" font-semibold text-[#2507B3]"></span> Follow these
          steps
        </h3>
        <div className="w-full h-full flex flex-wrap justify-center gap-10 sm:gap-20">
          <div className="one hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
            <div className="top text-4xl">01</div>
            <div className="bottom">
              <h1 className="font-semibold">Register Account</h1>
              <p className="text-sm text-gray-700">
                Create a personalized account to access all platform exclusive
                features.
              </p>
            </div>
          </div>
          <div className="two hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
            <div className="top text-4xl">02</div>
            <div className="bottom">
              <h1 className="font-semibold">Search For Job</h1>
              <p className="text-sm text-gray-700">
                Explore diverse job listings and find the perfect match for your
                skills.
              </p>
            </div>
          </div>
          <div className="three hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
            <div className="top text-4xl">03</div>
            <div className="bottom">
              <h1 className="font-semibold">Create Resume</h1>
              <p className="text-sm text-gray-700">
                Craft a professional resume to showcase your qualifications and
                experience.
              </p>
            </div>
          </div>
          <div className="four hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
            <div className="top text-4xl">04</div>
            <div className="bottom">
              <h1 className="font-semibold">Apply For Job</h1>
              <p className="text-sm text-gray-700">
                Submit applications easily and track your job search progress
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* scroller animation */}
      <div className="w-full  bg-gray-50 py-16 overflow-hidden ">
        <div className="">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium px-10 pb-16">
            Trusted <span className=" font-semibold text-[#2507B3]">1000+</span>{" "}
            company find best job seekers
          </h3>
        </div>

        <div className="flex">
          <div
            id="scroller"
            className="w-fit gap-16 px-10 flex whitespace-nowrap "
          >
            {/* Add your company logos here with appropriate styling */}

            <div className="h-[5vh] md:h-[8vh] w-32 md:w-40 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>
          </div>

          <div
            id="scroller"
            className="w-fit gap-16 px-10 flex whitespace-nowrap "
          >
            {/* Add your company logos here with appropriate styling */}

            <div className="h-[5vh] md:h-[8vh] w-32 md:w-40 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[6vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Explore Internships */}
      <div className="w-full overflow-hidden">
        <div className="py-14 sm:py-20 px-10">
          <h1 className="text-4xl sm:text-center font-medium">
            Explore all Internship Opportunity
          </h1>
        </div>

        <div className="bg-gray-50 px-10 py-10">
          {/* search bar */}
          {/* <div className="flex items-center bg-white shadow-lg  hover-border text-black w-1/3 rounded-full m-auto overflow-hidden mb-10">

            <div className="w-full flex items-center gap-2 pl-5 h-10">
              <div><IoMdSearch size={20} className="text-gray-500" /></div>
              <input
                type="text"
                placeholder="Internship title"
                className="w-full bg-transparent h-full outline-none"
                value={internshipTitleInput}
                onChange={(e) => setInternshipTitleInput(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center gap-2 pl-5 h-10">
              <div><IoLocationSharp className="text-gray-500" /></div>
              <input
                type="text"
                placeholder="City or remote"
                className="w-full h-full outline-none"
                value={internshipLocationInput}
                onChange={(e) => setinternshipLocationInput(e.target.value)}
              />
            </div>
            <div className="h-10">
              <button
                type="submit"
                className="w-full h-full outline-none bg-[#2507B3] text-white text-sm px-3"
                onClick={handleInternshipSearch}>
                Search
              </button>
            </div>
          </div> */}
          <div
            id="job"
            className="w-full flex items-center gap-5 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-x "
          >
            {/* {
              filterredInternships &&
              (filterredInternships.map((internship, index) => (
                <InternshipCard key={index} index={index} internship={internship} color={generateRandomColor()} />
              )))
            } */}
            {internships &&
              internships
                .map((internship, index) => (
                  <InternshipCard
                    key={index}
                    index={index}
                    internship={internship}
                    color={generateRandomColor()}
                  />
                ))
                .reverse()}
          </div>
        </div>
      </div>
      {/* Explore Job */}
      <div className=" w-full overflow-hidden ">
        <div className="py-14 sm:py-20 px-10">
          <h1 className="text-4xl sm:text-center font-medium">
            Explore all Job Opportunity
          </h1>
        </div>

        <div className="bg-gray-50 px-10 py-10">
          {/* search bar */}
          {/* <div className="flex items-center bg-white shadow-lg  hover-border text-black w-1/3 rounded-full m-auto overflow-hidden mb-10">

            <div className="w-full flex items-center gap-2 pl-5 h-10">
              <div><IoMdSearch size={20} className="text-gray-500" /></div>
              <input
                type="text"
                placeholder="Job title"
                className="w-full bg-transparent h-full outline-none"
                value={jobTitleInput}
                onChange={(e) => setJobTitleInput(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center gap-2 pl-5 h-10">
              <div><IoLocationSharp className="text-gray-500" /></div>
              <input
                type="text"
                placeholder="City or remote"
                className="w-full h-full outline-none"
                value={jobLocationInput}
                onChange={(e) => setJobLocationInput(e.target.value)}
              />
            </div>
            <div className="h-10">
              <button
                type="submit"
                className="w-full h-full outline-none bg-[#2507B3] text-white text-sm px-3"
                onClick={handleJobSearch}>
                Search
              </button>
            </div>
          </div> */}
          <div
            id="job"
            className="w-full flex items-center gap-5 whitespace-nowrap  overflow-y-hidden overflow-x-scroll snap-mandatory"
          >
            {/* {
              filterredJobs &&
              (filterredJobs.map((job, index) => (
                <JobCard key={index} index={index} job={job} color={generateRandomColor()} />
              )))
            } */}
            {jobs &&
              jobs
                .map((job, index) => (
                  <JobCard
                    key={index}
                    index={index}
                    job={job}
                    color={generateRandomColor()}
                  />
                ))
                .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
