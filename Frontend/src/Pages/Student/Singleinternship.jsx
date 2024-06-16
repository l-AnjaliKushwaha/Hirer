import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";
import { SiOnlyoffice } from "react-icons/si";
import { applyinternship } from '../../store/Actions/userActions';
import { bookmarkinternship } from '../../store/Actions/userActions';
import { disbookmarkinternship } from '../../store/Actions/userActions';
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

import { toast } from 'react-toastify';


const Singleinternship = () => {

    const { id } = useParams()

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const internships = useSelector((state) => state.internshipReducer.internshipData)

    const internship = internships?.find(internship => internship._id === id)

    const student = useSelector((state) => state.userReducer.userData?.student)

    const bookmarkedInternships = student?.bookmarkinternship
    const bookmarkedInternship = bookmarkedInternships?.find((internId) => internId == id)

    const bookmarkHandler = async () => {
        await dispatch(bookmarkinternship(id));
    }

    const disbookmarkHandler = async () => {
        await dispatch(disbookmarkinternship(id));
    }

    const employee = useSelector((state)=> state.employeeReducer.employeeData)
    console.log(employee)
    const appliedInternship = student?.internships?.find((internid) => internid == id)

    const applyHandler = async () => {

        if (!appliedInternship) {
            const error = await dispatch(applyinternship(id));
            error ? toast.error(error.data.message)
                : toast.success("Applied successfully")
            navigate("/student")
        } else {
            toast.error("You have already applied")
        }

    }

    // Convert the ISO string to a Date object
    const date1 = new Date(internship?.createdAt)
    const date2 = new Date(); // Current date

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = date2 - date1;
    console.log(differenceInMilliseconds)

    // Convert milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    // console.log(`Difference in days: ${differenceInDays}`);



    // useEffect(() => {
    //     dispatch(internshipDetail(id));
    // }, [dispatch]);

    return (

        internship && <div className="w-full flex flex-col items-center text-gray-700 px-10">
            <h1 className="text-center text-2xl sm:text-3xl p-10 font-medium capitalize">{internship.profile} internship</h1>
            <div className="w-full sm:border py-2 rounded-lg">

                <div className="flex flex-col gap-4 px-10 py-5">
                    <div className='flex justify-between'>
                        <div className="flex items-center w-fit gap-2 px-4 py-1 border rounded-md text-gray-500 font-medium">
                            <FaArrowTrendUp size={14} className='text-[#2507B3]' />
                            <h6 className="text-xs">Actively hiring</h6>
                        </div>
                        <div className=''>
                            
                        {!employee&&<button>
                                {bookmarkedInternship ? <IoBookmark onClick={disbookmarkHandler} size={30}
                                    className='hover:bg-gray-200 rounded-full p-1.5' /> : <CiBookmark onClick={bookmarkHandler} size={30}
                                        className='hover:bg-gray-200 rounded-full p-1.5' />}
                            </button >
}</div >


                    </div>

                    {/* internship-profile */}
                    <div className="">
                        <h1 className="text-lg font-semibold capitalize tracking-wide">{internship.profile}</h1>

                        {/* company-name */}
                        <h1 className="text-md font-medium capitalize text-gray-500">{internship.company}</h1>
                    </div>

                    {/* location */}
                    <div className="flex items-center gap-1">
                        <IoLocationSharp size={16} />
                        <h1 className="text-md font-medium capitalize">{internship.location}</h1>
                    </div>

                    {/* start, salary, experience, and opening number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <FaRegCirclePlay />
                                <h1 className="text-sm tracking-wide font-semibold">START DATE</h1>
                            </div>
                            <h1 className="">{internship.from}</h1>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <FaMoneyBill />
                                <h1 className="text-sm tracking-wide font-semibold">CTC (ANNUAL)</h1>
                            </div>
                            <h1 className="">₹ {internship.stipend?.amount} /- Month</h1>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <IoBagCheck />
                                <h1 className="text-sm tracking-wide font-semibold uppercase">Duration</h1>
                            </div>
                            <h1 className="">{internship.duration}</h1>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-2">
                                <SiOnlyoffice />
                                <h1 className="text-sm tracking-wide font-semibold uppercase">internship TYPE</h1>
                            </div>
                            <h1 className="">{internship.internshiptype}</h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-2 px-2 sm:px-4 py-2 tex-gray-500 font-medium rounded-md bg-gray-100">
                            <RxCountdownTimer />
                            <h6 className="text-xs">Posted {differenceInDays} days ago</h6>
                        </div>
                        <div className="px-2 sm:px-4 py-2 tex-gray-500 font-medium rounded-md bg-gray-100">
                            <h6 className="text-xs">Internship</h6>
                        </div>
                        <div className="px-2 sm:px-4 py-2 tex-gray-500 font-medium rounded-md bg-gray-100">
                            <h6 className="text-xs">{internship.workingtype}</h6>
                        </div>
                    </div>


                    {/* Applicants */}
                    <div className="flex items-center gap-2 border-b pb-5">
                        <IoMdPeople size={30} />
                        <h1 className="font-medium">{internship.applicants} applicants</h1>
                    </div>

                    {/* description */}
                    <div className="pt-2">
                        <div>
                            <h1 className="font-semibold tracking-wide leading-loose">About the internship</h1>
                            <h3 className="whitespace-pre-line break-words">{internship.description}</h3>
                        </div>
                        <div className="whitespace-pre-line break-words">
                            <h1 className='py-5 capitalize'>Key Responsibilities :</h1>
                            <p className="whitespace-pre-line break-words">{internship.responsibility}</p>
                        </div>
                        <div className="whitespace-pre-line break-words">
                            <h1 className='py-5 capitalize'>Qualifications:</h1>
                            <p className="whitespace-pre-line break-words">{internship.qualifications}</p>
                        </div>
                        <div className="whitespace-pre-line break-words">
                            <h1 className='py-5 capitalize'>Compensation and working conditions:</h1>
                            <p className="whitespace-pre-line break-words">{internship.workconditions}</p>
                        </div>
                    </div >

                    {/* skills */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Skill(s) required :</h1>
                        <h1 className="">{internship.skills.split(',').map(item =>
                        (
                            <div className='px-5 py-1.5 inline-block ml-5 rounded-md bg-gray-100 mt-2'>{item}</div>
                        ))}</h1>
                    </div >

                    {/* Salary */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Stipend</h1>
                        <h3 className=" capitalize">{internship.stipend?.status} </h3>
                    </div>

                    {/* Joining */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Joining</h1>
                        <h3 className=" capitalize">{internship.startdate} </h3>
                    </div>

                    {/* Staring Date */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Duration Date</h1>
                        <h3 className="">{internship.from}   to   {internship.to}</h3>
                    </div>

                    {/* Openings */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Number of openings :</h1>
                        <h3 className="capitalize">{internship.openings}</h3>
                    </div>

                    {/* Perks */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Perks:</h1>
                        <h3 className="list-disc">
                            {internship.perks && internship.perks.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </h3>
                    </div>

                    {/* companyDetail */}
                    <div className=" whitespace-pre-line break-words">
                        <h1 className="font-semibold tracking-wide leading-loose">About {internship.company}</h1>
                        <h3 className="w-full whitespace-pre-line break-words"> {internship.companyDetail}, </h3>
                    </div>

                    {/* Contect Number */}
                    <div className="">
                        <h1 className="font-semibold tracking-wide leading-loose">Contact Number :</h1>
                        <h3 className="">{internship.contact}</h3>
                    </div>
                </div >

                <div className="flex justify-center items-center mt-8 py-8">
                    {!employee&&<button onClick={applyHandler} className="px-8 py-2 bg-[#2507B3] text-white font-semibold rounded-lg">Apply Now</button>}
                </div>
            </div>
        </div>




    )
}

export default Singleinternship
