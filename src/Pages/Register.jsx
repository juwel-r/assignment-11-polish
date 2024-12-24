import React, { useContext, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import LoadingSpin from "../components/LoadingSpin";
import Lottie from "lottie-react";
import registerAnimation from "../assets/aniamtion_json/register-lottie-animation.json";

const Register = () => {
  const { createUser, loginWithGoogle, setUserInfo, updateUser, setLoading } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  //
  const [startSpin, setStartSpin] = useState(false);

  const validateSignup = () => {
    const errors = [];
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!name) errors.push("FirstName is required");
    if (!email) errors.push("Email is required");
    if (!photoURL) errors.push("Photo URL is required");
    if (!password) {
      errors.push("Password is required");
    } else if (!passwordRegex.test(password)) {
      errors.push(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long"
      );
    }
    return errors;
  };

  console.log(errorMessage);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignup();
    if (errors.length) {
      setErrorMessage(errors.join(", "));
    } else {
      setErrorMessage("");
      setStartSpin(true);
      createUser(email, password)
        .then((result) => {
          setStartSpin(false);
          e.target.reset();
          setLoading(false);
          setUserInfo(result.user);
          const userInfo = {
            displayName: name,
            photoURL: photoURL,
          };
          updateUser(userInfo);
          e.target.reset();
          Swal.fire({
            title: "Good job!",
            text: "Registration Successful!",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        })
        .catch((error) => {
          setStartSpin(false);
          Swal.fire({
            title: "Failed To Register!",
            text: error.code,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    }
  };

  //Google Login
  // const googleLogin = () => {
  //   setStartSpin(true);
  //   loginWithGoogle()
  //     .then((result) => {
  //       setStartSpin(false);
  //       setUserInfo(result.user);
  //       setLoading(false);
  //       Swal.fire({
  //         title: "Registration Successful!",
  //         icon: "success",
  //         showConfirmButton: false,
  //         timer: 800,
  //       });
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 1200);
  //     })
  //     .catch((error) => {
  //       setStartSpin(false);
  //       Swal.fire({
  //         title: "Failed To Register!",
  //         text: error.code,
  //         icon: "error",
  //         confirmButtonText: "Try Again",
  //       });
  //     });
  // };
  if (startSpin) {
  }
  return (
    <section className="bgImage pt-10 md:pt-4 relative mb-12 mt-4">
      {startSpin ? (
        <div className="">
          <LoadingSpin></LoadingSpin>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-center font-semibold text-2xl md: lg:text-3xl">
              Welcome To Edu Mate!
            </h1>
            <h1 className="text-center text-xl lg:text-2xl mt-3">
              Enter Your Details To Register!
            </h1>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:px-8 mt-8">
            <div className="max-w-72 lg:max-w-[30%] mx-auto">
              {" "}
              <Lottie animationData={registerAnimation}></Lottie>
            </div>
            <div className="w-10/12 md:w-[60%] lg:w-[35%] mx-auto shadow-2xl p-8">
              <form
                onSubmit={handleSubmit}
                className="rounded-none md:pt-8 md:-mt-0 pt-0"
              >
                {/* Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered rounded-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password Input */}
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    className="input input-bordered rounded-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute bottom-[15%] right-4 text-xl hover:text-gray-500"
                  >
                    {!showPass ? <VscEyeClosed /> : <VscEye />}
                  </span>
                </div>
                {/* Photo URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered rounded-none"
                    placeholder="Photo URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </div>
                {/* Submit Button */}
                <div className="form-control mt-6">
                  {errorMessage ? (
                    <p className="text-red-500 pb-2">{errorMessage}</p>
                  ) : (
                    ""
                  )}
                  <button
                    type="submit"
                    className="btn btn-outline rounded-none"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="google mx-auto divider">OR</div>
              {/* <button
                onClick={googleLogin}
                className=" btn btn-outline mb-4 rounded-none w-full"
              >
                <span className="text-2xl">
                  <FcGoogle />
                </span>
                Continue With Google{" "}
              </button> */}
              <p>
                Already Have Account?{" "}
                <Link className="text-primary" to="/login">
                  Login Here.
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Register;
