import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import ThemeController from "./ThemeController";
import { RxCross2 } from "react-icons/rx";
import { IoIosList } from "react-icons/io";
import logo from "../assets/edu-mate-logo.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { userInfo, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuClose, setMenuClose] = useState(false);
  const email1stLetter = userInfo && userInfo.email.charAt(0).toUpperCase();
  const menus = (
    <>
      <NavLink to="/" className="px-2">
        Home
      </NavLink>
      <NavLink to="/find-tutors" className="px-2">
        Find Tutors
      </NavLink>
      <NavLink to="/add-tutorial" className="px-2">
        Add Tutorials
      </NavLink>
      <NavLink to="/my-tutorials" className="px-2">
        My Tutorials
      </NavLink>
      <NavLink to="my-booked-tutorials" className="px-2">
        My Booked Tutorials
      </NavLink>
    </>
  );

  //Log Out
  const logOut = () => {
    Swal.fire({
      title: "Do you really want to Log out?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8672FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            navigate("/");
            Swal.fire({
              title: "Logged Out!",
              // text: "Your file has been deleted.",
              icon: "info",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Failed To Register!",
              text: error.code,
              icon: "error",
              confirmButtonText: "Try Again",
            });
          });
      }
    });
  };
  return (
    <nav className="h-[48px] md:h-[64px] flex lg:justify-between items-center relative">
      {/* Right section */}
      <div
        tabIndex={0}
        onBlur={() => setMenuClose(false)}
        onClick={() => setMenuClose(!menuClose)}
        className="block lg:hidden z-50 relative h-5 w-5 text-2xl pr-4"
      >
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            menuClose ? "opacity-100" : "opacity-0"
          }`}
        >
          <RxCross2 />
        </span>
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            menuClose ? "opacity-0" : "opacity-100"
          }`}
        >
          <IoIosList />
        </span>
      </div>
      {/* Logo */}
      <div className="text-2xl lg:text-3xl text-nowrap px-2 min-w-fit">
        <img className="h-9 w-full md:h-10" src={logo} alt="edu-mate-logo" />
      </div>

      {/* Menu */}
      <section className="top-menu flex justify-center w-full mx-auto ">
        <div
          className={`text-left z-40 flex flex-col lg:flex-row absolute lg:static backdrop-blur-sm bg-white/70 lg:bg-transparent  lg:backdrop-blur-none lg:shadow-none shadow-md p-5 rounded-sm transition-all duration-200 ease-in-out h-screen lg:h-auto ${
            menuClose
              ? " top-[100%] -left-[3%]"
              : "top-[100%] md:-left-[45%] -left-[65%]"
          }`}
        >
          {menus}
          <div className="flex flex-col lg:hidden">
            {userInfo ? (
              <button onClick={logOut} className="text-left px-2">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="px-2">
                  Login
                </Link>
                <Link to="/register" className="px-2">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      {/* Right Section */}
      <section className="flex items-center justify-between gap-2">
        {/* Avatar */}
        {userInfo && (
          <div className="avatar online placeholder">
            <div className="text-neutral-content w-10 rounded-full">
              {userInfo?.photoURL ? (
                <img src={userInfo.photoURL} alt="" />
              ) : (
                <h1 className="text-2xl font-bold">{email1stLetter}</h1>
              )}
            </div>
          </div>
        )}

        <div className="hidden lg:flex items-center">
          {userInfo ? (
            <button
              className="btn btn-outline btn-sm rounded-none"
              onClick={logOut}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/register"
                className="myBtn mr-2 btn btn-outline btn-sm rounded-none"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="myBtn mr-2 btn btn-outline btn-sm rounded-none"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* theme controller */}
        <ThemeController></ThemeController>
      </section>
    </nav>
  );
};

export default Navbar;
