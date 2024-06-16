import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JobCard from '../../Components/JobCard';
import { fetchJobs } from '../../store/Actions/jobActions';
import InternshipCard from '../../Components/InternshipCard';
import { fetchInternships } from '../../store/Actions/internshipActions';
import Button from '../../Components/Button';
import { MdArrowOutward } from 'react-icons/md';
import { IoMdSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import LoadingPage from '../../Components/Loading/LoadingPage';
import { Link } from 'react-router-dom';

const StudentHome = () => {

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);
  const internships = useSelector((state) => state.internshipReducer.internshipData)

  useEffect(() => {
    try {
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error)
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
  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   if (internships !== null && jobs !== null) {
  //     setLoader(false);
  //   }
  // });

  // if (loader) {
  //   return (
  //     <LoadingPage loader={loader} />
  //   )
  // }
  return (
    <>
      <div className="w-full py-2">
        <div className="w-full mt-14 px-4 md:px-10 flex flex-col items-center justify-center">
          <h1 className="w-full lg:w-[70%] text-4xl sm:5xl md:text-6xl sm:text-center font-medium tracking-wide leading-22">
            Find Your <span className="text-[#2507B3]">Dream Job</span> That
            Suits Exciting Opportunities
          </h1>
          <h4 className="text-gray-500 mt-12 text-base md:text-lg lg:text-center tracking-wider lg:w-[60%]">
            Embark on a journey towards your career, your ultimate job-finding
            companion! We've curated a platform that connects talented
            individuals with existing opportunities.
          </h4>
          <Link to={`/student/jobs`}>
            <Button
              className="mt-10 md:mt-20 flex items-center gap-2 py-3"
            >
              Get Started Now
              <MdArrowOutward />
            </Button></Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mt-16 md:mt-20 px-10 ">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-lg font-medium items-center whitespace-nowrap">
              Live Jobs
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">30000+</h1>
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-lg font-medium items-center whitespace-nowrap">
              Daily Job Post
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">5000+</h1>
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-lg font-medium items-center whitespace-nowrap">
              People Get Hired
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">25000+</h1>
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-lg font-medium items-center whitespace-nowrap">
              Companies
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">1000+</h1>
          </div>
        </div>

        {/* Company-scorllbar */}

        <div className="w-full bg-gray-50 py-20 overflow-hidden mt-14">
          <div className=" pb-10">
            <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium px-10">
              Trusted by the Best Companies
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

              <div className="h-[5vh] md:h-[7vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

              <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Internship-Card */}
        <section>
          <div className=" w-full overflow-hidden">
            <div className="py-14">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-medium">
                Explore all Internship Opportunity
              </h1>
            </div>

            <div className="bg-gray-50 px-10 py-10">
              {/* search bar */}
              <div
                id="job"
                className="w-full flex items-center gap-5 whitespace-nowrap  overflow-y-hidden overflow-x-scroll snap-mandatory  px-10 bg-gray-50 "
              >
                {/* {filterredInternships &&
                  filterredInternships.map((intern, index) => (
                    <InternshipCard
                      key={index}
                      index={index}
                      internship={intern}
                      color={generateRandomColor()}
                    />
                  ))} */}
                {internships &&
                  internships.map((intern, index) => (
                    <InternshipCard
                      key={index}
                      index={index}
                      internship={intern}
                      color={generateRandomColor()}
                    />
                  )).reverse() }
              </div>
            </div>
          </div>
        </section>

        {/* <JobCard /> */}
        <section>
          <div className=" w-full overflow-hidden">
            <div className="py-14">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-medium px-10">
                Explore all Job Opportunity
              </h1>
            </div>

            <div className="bg-gray-50 px-10 py-10">
              {/* search bar */}
              <div
                id="job"
                className="w-full flex items-center gap-5 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-x px-10 bg-gray-50 "
              >
                {/* {filterredJobs &&
                  filterredJobs.map((job, index) => (
                    <JobCard
                      key={index}
                      index={index}
                      job={job}
                      color={generateRandomColor()}
                    />
                  ))} */}
                {jobs &&
                  jobs.map((job, index) => (
                    <JobCard
                      key={index}
                      index={index}
                      job={job}
                      color={generateRandomColor()}
                    />
                  )).reverse() }
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default StudentHome;

