import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { currentUser as currentStudent } from "./store/Actions/userActions";
import { currentUser as currentEmployee } from "./store/Actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./Components/Loading/LoadingPage";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth: studentAuth } = useSelector((state) => state.userReducer);

  const { isAuth: employeeAuth } = useSelector(
    (state) => state.employeeReducer
  );

  useEffect(() => {
    dispatch(currentStudent());
  }, [studentAuth]);

  useEffect(() => {
    dispatch(currentEmployee());
  }, [employeeAuth]);

  useEffect(() => {
    if (studentAuth) {
      // console.log(studentAuth)
      navigate("/student");
    } else if (employeeAuth) {
      navigate("/employee");
    }
  }, [studentAuth, employeeAuth, navigate]);

  // Loading state
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (studentAuth !== null || employeeAuth !== null) {
      setLoader(false);
    }
  });

  if (loader) {
    return <LoadingPage loader={loader} />;
  }

  return (
    <div className="bg-white h-screen min-h-screen w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
