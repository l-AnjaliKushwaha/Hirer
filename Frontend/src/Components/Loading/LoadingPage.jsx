import React from "react";
import { CgSpinner } from "react-icons/cg";

const LoadingPage = ({ loader }) => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center text-xl font-medium fixed top-0">
      {loader && (
        <div className="flex items-center gap-5">
          Loading
          <CgSpinner class="animate-spin h-5 w-5 mr-3 text-black text-center" />
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
