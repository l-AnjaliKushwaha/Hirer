import React from "react";

const About = () => {
  return (
    <>
      {/* main-div */}
      <div className="">
        {/* About-div */}
        <div className="py-5 px-4 md:pl-16 md:mt-10 md:ml-5">
          <h1 className="text-3xl md:text-5xl border-b-2 w-fit leading-tight border-black font-semibold font-sans">
            About Hirer
          </h1>
        </div>

        <div className="py-2 px-4 md:pl-16 md:ml-6">
          <h3 className="text-2xl md:text-3xl font-medium text-[#2507B3]">
            Let’s get to work
          </h3>
        </div>

        <div className="px-4 md:pl-16 md:ml-6 text-gray-700 flex flex-col gap-1.5">
          <h6 className="w-full md:w-3/5 tracking-wide">
            So, what is Hirer? We’re a thriving community for workplace
            conversations, driven by a simple mission: helping people everywhere
            find jobs and companies they love.
          </h6>
          <h6 className="w-full md:w-3/5 tracking-wide">
            But the way we do it? That’s not so simple.
          </h6>
          <h6 className="w-full md:w-3/5 tracking-wide">
            Every day, we’re inspired by a vision to make positive workplace
            change through radical transparency. Through the products we make
            and the communities we create, we’re breaking down barriers that
            lead to discrimination, pay gaps, and toxic work environments.
            Together, we’re fostering a world where people have the support and
            resources they need to find a job that loves them back.
          </h6>
        </div>

        <div className="mt-10 md:mt-28 flex flex-col items-center">
          <h1 className="text-center text-2xl md:text-4xl py-5 font-medium text-[#2507B3]">
            What we do
          </h1>
          <h3 className="text-center text-lg md:text-xl w-full md:w-1/2 tracking-wider text-gray-700">
            Wherever you are on your career journey, Hirer makes it easier for
            workers and companies to find the perfect match.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 mt-8 md:mt-16 bg-gray-100 py-10 md:py-20 px-10">
          <div className="p-6 md:p-8 bg-white rounded-lg hover:shadow-2xl hover:text-black duration-500 cursor-pointer shadow-md">
            <h1 className="font-medium py-2 text-xl text-[#2507B3] ">
              For job seekers
            </h1>
            <p className="w-full md:w-56 tracking-wide text-gray-700 text-md">
              We simplify your search, so you can apply for jobs with
              confidence. Filter millions of jobs and ratings, talk to
              professionals, and get smart on salary—then apply with ease.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-lg hover:shadow-2xl hover:text-black duration-500 cursor-pointer shadow-md">
            <h1 className="font-medium py-2 text-xl text-[#2507B3] ">
              For employees
            </h1>
            <p className="w-full md:w-56 tracking-wide text-gray-700 text-md">
              We amplify your voice, so you can enhance your workplace
              experience. Leave reviews, search and post salaries, and join
              candid conversations about life at work.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-lg hover:shadow-2xl hover:text-black duration-500 cursor-pointer shadow-md">
            <h1 className="font-medium py-2 text-xl text-[#2507B3] ">
              For employers
            </h1>
            <p className="w-full md:w-56 tracking-wide text-gray-700 text-md">
              We give you a place to shape and share your story, so you can find
              and keep the best talent. Post jobs, respond to reviews, and gain
              insights to shape your messaging.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-28 flex flex-col items-center">
          <h1 className="text-center text-2xl md:text-4xl py-5 font-medium text-[#2507B3]">
            Hirer by the numbers
          </h1>
          <h3 className="text-center text-lg md:text-xl w-full md:w-1/2 tracking-wider text-gray-700">
            Since 2024, Hirer has been a proud champion of transparency in the
            workplace. Today, our mission guides us in serving a global
            community of millions.
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 mt-8 md:mt-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-7xl text-center font-medium text-[#2507B3]">
              55{" "}
              <span className="text-xl md:text-6xl font-medium text-[#2507B3]">
                M+
              </span>
            </h1>
            <h3 className="text-lg md:text-xl font-medium text-center">
              unique monthly visitors
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-7xl text-center font-medium text-[#2507B3]">
              180{" "}
              <span className="text-xl md:text-6xl font-medium text-[#2507B3]">
                M+
              </span>
            </h1>
            <h3 className="text-lg md:text-xl font-medium text-center">
              reviews, salaries & <br /> insights
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-7xl text-center font-medium text-[#2507B3]">
              2.5{" "}
              <span className="text-xl md:text-6xl font-medium text-[#2507B3]">
                M+
              </span>
            </h1>
            <h3 className="text-lg md:text-xl font-medium text-center">
              employer profiles
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
