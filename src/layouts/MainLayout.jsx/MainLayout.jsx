import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="h-[76px]">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
