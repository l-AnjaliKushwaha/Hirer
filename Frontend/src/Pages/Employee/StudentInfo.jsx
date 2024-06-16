import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentInfo,
  getStudentResume,
  setStudentResume,
} from "../../store/Actions/resumeActions";
import { RiDownload2Line } from "react-icons/ri";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../ResumeDocument/MyDocument";

import Button from "../../Components/Button";
import { RxCross2 } from "react-icons/rx";
import { Navigate } from "react-router-dom";
const StudentInfo = ({ id }) => {
  const style = {
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
  };
  const updatedResume = useSelector(
    (state) => state.resumeReducer?.resumeData?.updatedResume
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentResume(id));
  }, [id]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleDownload = (studentId) => {
    // Dispatch action to get student resume
    // dispatch(getStudentResume(studentId));
    // Close confirmation dialog
    setShowConfirmation(true);
  };

  const setReume = () => {
    // dispatch(setStudentResume())
    setShowConfirmation(false);
    // Navigate("/employee")
  };
  return (
    <>
      <div>
        <div className="py-3 px-12 bg-gray-100 rounded-lg flex gap-32 mx-16">
          <h1 className="w-1/4">{updatedResume?.details?.firstname}</h1>
          <h1 className="w-1/4">{updatedResume?.details?.lastname}</h1>
          <h1 className="w-1/4">{updatedResume?.details?.email}</h1>

          <div>
            <RiDownload2Line onClick={() => handleDownload(id)} size={25} />
          </div>
        </div>
      </div>
      {/* Confirmation dialog */}
      {showConfirmation && (
        <div
          style={style}
          className={`mx-auto w-full max-w-xs bg-white rounded-xl p-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
        >
          <div className="">
            <p className="text-center leading-tight mt-5">
              Are you sure you want to download this student's resume?
            </p>
            <div className="flex mt-5 justify-center gap-10">
              <PDFDownloadLink
                document={<MyDocument updatedResume={updatedResume} />}
                fileName="resume"
              >
                <Button
                  type="submit"
                  bgColor="bg-[#1F2937]"
                  className="px-5 font-semibold"
                >
                  Download
                </Button>
              </PDFDownloadLink>
            </div>
          </div>

          <Button
            type="submit"
            bgColor=""
            textColor="#1F2937"
            className="px-5 font-semibold absolute right-0 top-0"
            onClick={setReume}
          >
            <RxCross2 size={20} />
          </Button>
        </div>
        // <div>
        //   <p>Are you sure you want to download this student's resume?</p>
        //   <PDFDownloadLink document={<MyDocument updatedResume={updatedResume} />} fileName='resume'
        //   >
        //     <button>Yes</button>
        //   </PDFDownloadLink>
        //   <button onClick={setReume}>No</button>
        // </div>
      )}
    </>
  );
};

export default StudentInfo;
