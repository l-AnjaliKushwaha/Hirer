import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Notfound = () => {
  return (
    <div className="pt-10 h-screen flex flex-col tracking-widest ">
      <h1 className="text-6xl md:text-9xl font-medium text-center mt-10 ">
        Opps...!
      </h1>
      <h1 className="text-6xl md:text-9xl font-medium text-[#2507B3] text-center mt-5 mr-10">
        404
      </h1>
      <h1 className="text-4xl md:text-6xl text-center font-medium">
        Page not found
      </h1>
      <h6 className="text-center text-lg mt-7">
        Sorry, we couldn’t find the page you’re looking for.
      </h6>

      <div className="flex flex-col md:flex-row items-center justify-center mt-16 gap-5 md:gap-10">
        <NavLink to="/">
          <button className="py-2 px-6 md:py-3 md:px-6 bg-[#2507B3] text-md md:text-md text-white rounded-lg tracking-wider">
            Go Back Home
          </button>
        </NavLink>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <NavLink to="/support">
            <button className="text-md md:text-lg tracking-wider">
              Contact Support
            </button>
          </NavLink>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Notfound;
