import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncUploadProfileImageStudent,
  asyncLogout as studentLogout,
} from "../../store/Actions/userActions";
import {
  asyncUploadProfileImageEmployee,
  asyncLogout as employeeLogout,
} from "../../store/Actions/employeeActions";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

const Header = () => {
  const var1 = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer);
  const { isAuth: isEmployeeAuth } = useSelector(
    (state) => state.employeeReducer
  );
  const student = useSelector((state) => state.userReducer.userData?.student);
  const employe = useSelector(
    (state) => state.employeeReducer.employeeData?.employe
  );
  const authStatus = isStudentAuth || isEmployeeAuth;
  const user = student || employe;

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setIsProfileOpen(false);
    setDropdown(false);
    setOpenMenu(false);
  }, [location]);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const Dropdown = () => {
    setDropdown(!dropdown);
  };

  const Menu = () => {
    setOpenMenu(!openMenu);
  };

  const backHandler = () => {
    setIsProfileOpen(false);
    setDropdown(false);
    setOpenMenu(false);
  };

  const middleItems = [
    {
      name: "Home",
      path: "",
    },
    {
      name: employe ? "Create Internship" : "Internships",
      path: "/internships",
    },
    {
      name: employe ? "Create Job" : "Jobs",
      path: "/jobs",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  const rightItems = [
    {
      name: "Login",
      path: "/student/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      path: "/student/signup",
      active: !authStatus,
    },
  ];

  const LogoutHandler = async () => {
    setLogoutLoader(true);
    if (isStudentAuth) {
      const error = await dispatch(studentLogout());
      setLogoutLoader(false);
      error
        ? toast.error(error.data.message)
        : toast.success("Logout Successfully");
      setIsProfileOpen(false);
      setDropdown(false);
      navigate("/");
    } else if (isEmployeeAuth) {
      const error = await dispatch(employeeLogout());
      setLogoutLoader(false);
      error
        ? toast.error(error.data.message)
        : toast.success("Logout Successfully");
      setIsProfileOpen(false);
      setDropdown(false);
      navigate("/");
    }
  };

  const handleProfileImageChange = async (e) => {
    const formData = new FormData();
    formData.set("avatar", e.target.files[0]);
    setPicLoader(true);
    // console.log(formData)
    if (student) {
      const errorStudent = await dispatch(
        asyncUploadProfileImageStudent(student._id, formData)
      );
      setPicLoader(false);
      errorStudent
        ? toast.error(errorStudent.data.message)
        : toast.success("Avatar Upadated");
    } else if (employe) {
      const erroremployee = await dispatch(
        asyncUploadProfileImageEmployee(employe._id, formData)
      );
      setPicLoader(false);
      erroremployee
        ? toast.error(erroremployee.data.message)
        : toast.success("Avatar Upadated");
    }
  };

  const [picLoader, setPicLoader] = useState(false);
  const [logoutLoader, setLogoutLoader] = useState(false);

  return (
    <header className={"w-full  bg-white] text-gray-500 font-semibold"}>
      <nav className="w-full px-10 py-5 flex justify-between items-center relative border-b-2 pb-3 ">
        {/* leftItem */}
        <div className="w-[200px]">
          <NavLink
            to={authStatus ? (isStudentAuth ? "/student" : "/employee") : ""}
          >
            <img
              className="max-sm:h-6 h-10"
              src="Job_Seeking2-removebg-preview.png"
              alt="./logo.jpg"
            />
          </NavLink>
        </div>

        {/* middleItems */}
        <ul className="hidden lg:flex justify-center gap-12 items-center">
          {middleItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={
                  authStatus
                    ? isStudentAuth
                      ? `/student${item.path}`
                      : `/employee${item.path}`
                    : `${item.path}`
                }
                className="text-black font-normal text-lg hover:text-[#2507B3] "
                // style={(e) => {
                //     return {
                //         backgroundColor: e.isActive ? "#10151cc2" : "",
                //         color: e.isActive ? "white" : "#ffffffc9",
                //         transition: ".2s"
                //     }
                // }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* rightItems */}
        {!authStatus && (
          <ul className="w-[200px] max-sm:hidden flex lg:flex justify-end gap-5 items-center ">
            {rightItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={`max-lg:hidden px-4 py-2 rounded-lg  border-2 border-[#2507B3] ${
                      item.name === "Signup"
                        ? "bg-[#2507B3] text-white"
                        : "text-[#2507B3]"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                  {/* max-lg:bg-transparent max-lg:border-none max-lg:text-gray-500 max-lg:hover:text-[#2507B3]  */}
                </li>
              ) : null
            )}
          </ul>
        )}

        {/* menuBar */}
        {!authStatus && (
          <div className="w-[200px]  lg:hidden flex justify-end text-black">
            <RiMenu3Fill onClick={Menu} className="max-sm:size-5 size-6" />
          </div>
        )}

        {authStatus && (
          <div className="w-[200px] flex justify-end gap-8 items-center">
            <div
              className="h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer"
              onClick={toggleProfile}
            >
              <img
                className="rounded-full h-full w-full"
                src={user.avatar.url}
                alt=""
              />
            </div>
          </div>
        )}
      </nav>

      {/*  profile options */}
      {authStatus ? (
        <>
          <motion.div
            className={
              isProfileOpen
                ? `overlay w-full h-screen fixed top-0 bg-black opacity-50`
                : "hidden"
            }
            onClick={backHandler}
          ></motion.div>
          <motion.div
            className="h-full w-full max-w-sm fixed top-0 right-0 bg-gray-100 p-4"
            variants={var1}
            initial="initial"
            animate={isProfileOpen ? "animate" : "exit"}
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <div className="w-full flex justify-end px-10 py-6">
              <RxCross2
                onClick={backHandler}
                size={27}
                className="cursor-pointer text-black "
              />
            </div>

            <div className="w-full flex flex-col items-center border-b py-2 mb-4">
              <div className="h-12 w-12 rounded-full border-2 relative flex justify-center items-center">
                {picLoader ? (
                  <>
                    <div className="w-screen h-screen fixed top-0 left-0 z-10"></div>
                    <CgSpinner class="animate-spin rounded-full h-[50%] w-[50%] text-gray-500" />
                  </>
                ) : (
                  <img
                    className="rounded-full h-full w-full"
                    src={user.avatar.url}
                    alt=""
                  />
                )}
                <AiOutlineEdit
                  size={27}
                  className="absolute -z-0 bottom-0 -right-8 cursor-pointer hover:bg-gray-200 rounded-full p-1.5 text-black"
                  onClick={() => fileInputRef.current.click()}
                />

                {/* // hidden input */}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />
              </div>
              <h6 className="text-black capitalize font-semibold text-sm">
                {user.firstname} {user.lastname}
              </h6>
              <span className="font-normal text-sm">{user.email}</span>
            </div>
            <div className="w-full flex flex-col gap-3 px-2 text-black text-lg font-normal">
              {student ? (
                <div className="w-full flex flex-col gap-3">
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student"
                    className="hover:text-blue-600"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student/jobs"
                    className="hover:text-blue-600"
                  >
                    Jobs
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student/internships"
                    className="hover:text-blue-600"
                  >
                    Internships
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student/application"
                    className="hover:text-blue-600"
                  >
                    My Application
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student/bookmark"
                    className="hover:text-blue-600"
                  >
                    My Bookmarks
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student/resume"
                    className="hover:text-blue-600"
                  >
                    Edit Resume
                  </Link>
                  {/* <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/student/edit/preference" className='hover:text-blue-600'>Edit Preferences</Link> */}
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/student/about"
                    className="hover:text-blue-600"
                  >
                    About
                  </Link>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-3">
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/employee"
                    className="hover:text-blue-600"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/employee/jobs"
                    className="hover:text-blue-600"
                  >
                    Create Job
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/employee/internships"
                    className="hover:text-blue-600"
                  >
                    Create Internship
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/employee/application"
                    className="hover:text-blue-600"
                  >
                    My Application
                  </Link>
                  <Link
                    onClick={() => (
                      setIsProfileOpen(false), setDropdown(false)
                    )}
                    to="/employee/about"
                    className="hover:text-blue-600"
                  >
                    About
                  </Link>
                </div>
              )}

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
                      onClick={() => setIsProfileOpen(false)}
                      to={
                        isStudentAuth
                          ? "/student/reset-password"
                          : "/employee/reset-password"
                      }
                      className="hover:text-blue-600"
                    >
                      Change Password
                    </Link>
                    <Link
                      onClick={() => setIsProfileOpen(false)}
                      to={
                        isStudentAuth
                          ? "/student/forget-password"
                          : "/employee/forget-password"
                      }
                      className="hover:text-blue-600"
                    >
                      Forget Password
                    </Link>
                    {logoutLoader ? (
                      <>
                        <div className="w-screen h-screen fixed top-0 left-0 z-10"></div>
                        <CgSpinner class="animate-spin h-5 w-5 text-gray-500 text-center m-auto" />
                      </>
                    ) : (
                      <Link
                        onClick={LogoutHandler}
                        className="hover:text-blue-600"
                      >
                        Logout
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        ""
      )}

      {/* menu options */}
      {!authStatus ? (
        <>
          <motion.div
            className={
              openMenu
                ? `overlay w-full h-screen fixed top-0 bg-black opacity-50`
                : "hidden"
            }
            onClick={backHandler}
          ></motion.div>

          <motion.div
            variants={var1}
            initial="initial"
            animate={openMenu ? "animate" : "exit"}
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-72 h-full bg-gray-100 fixed right-0 top-0"
          >
            <div className="w-full flex justify-end px-10 py-6">
              <RxCross2
                onClick={backHandler}
                size={27}
                className="cursor-pointer text-black "
              />
            </div>

            {/* <div className='w-full flex justify-end'> */}
            <div className="pl-[10%] flex flex-col">
              {middleItems.map((item) => (
                <Link
                  key={item.name}
                  to={
                    authStatus
                      ? isStudentAuth
                        ? `/student${item.path}`
                        : `/employee${item.path}`
                      : `${item.path}`
                  }
                  className="text-black font-normal text-lg hover:text-[#2507B3] mb-2"
                >
                  {item.name}
                </Link>
              ))}
              {rightItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-black font-normal text-lg hover:text-[#2507B3] mb-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
          {/* </div> */}
        </>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
