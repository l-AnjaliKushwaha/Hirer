import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication }) => {
  const navigate = useNavigate();
  const { userData, isAuth: studentAuth } = useSelector(
    (state) => state.userReducer
  );
  const { employeeData, isAuth: employeeAuth } = useSelector(
    (state) => state.employeeReducer
  );
  const authStatus = studentAuth || employeeAuth;

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/student/login");
    } else if (!authentication && authStatus !== authentication) {
      if (userData) {
        navigate("/student");
      } else if (employeeData) {
        navigate("/employee");
      }
    }
  }, [authStatus, navigate, authentication]);

  return <>{children}</>;
};

export default AuthLayout;
