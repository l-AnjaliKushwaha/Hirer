import React from "react";
import { Outlet } from "react-router-dom";

const Employee = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Employee;
