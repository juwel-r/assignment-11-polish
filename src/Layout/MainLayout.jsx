import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { isDark } = useContext(AuthContext);

  return (
    <div
      className="max-w-[2560px] mx-auto min-h-[calc(100vh - 244px)] relative overflow-y-scroll"
      data-theme={isDark ? "dark" : "light"}
    >
      <nav className="px-4 fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/80">
        <Navbar></Navbar>
      </nav>
      <div className="pt-12">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
