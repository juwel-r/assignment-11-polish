import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSpinner } from "react-icons/fa";

const MainLayout = () => {
  const { isDark } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data (Replace with your actual API call)
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]); // Example data
      setLoading(false); // Stop loading
    }, 2000); // Simulated delay
  }, []);

  return (
    <div
      className="max-w-[2560px] mx-auto min-h-[calc(100vh - 244px)] relative"
      data-theme={isDark ? "dark" : "light"}
    >
      {loading ? (
        <div className="flex items-center justify-center h-screen"><FaSpinner className="text-9xl text-primary animate-spin w-full mx-auto " /></div>
      ) : (
        <>
          {" "}
          <nav className=" fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/80">
            <Navbar></Navbar>
          </nav>
          <div
            className="pt-[47px] lg:pt-[64px]"
            style={{ minHeight: `calc(100vh - 269px)` }}
          >
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default MainLayout;
