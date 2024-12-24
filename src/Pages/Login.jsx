import React, { useContext, useState } from "react";
import { FaLock } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import LoadingSpin from "../components/LoadingSpin";
import Lottie from "lottie-react";
import loginAnimation from "../assets/aniamtion_json/login-lottie-animation.json";

const Login = () => {
  const { loginUser, loginWithGoogle, setUserInfo } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [startSpin, setStartSpin] = useState(false);

  const validateLogin = () => {
    const errors = [];
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (password.length < 6) errors.push("Password is wrong");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateLogin();
    if (errors.length > 0) {
      setErrorMessage(errors.join(". "));
    } else {
      setStartSpin(true);
      setErrorMessage("");
      loginUser(email, password)
        .then((result) => {
          setStartSpin(false);
          setUserInfo(result.user);
          e.target.reset();
          Swal.fire({
            title: "Login Successful!",
            icon: "success",
            showConfirmButton: false,
            timer: 800,
          });
          setTimeout(() => {
            if (location.state) navigate(location.state);
            else navigate("/");
          }, 1200);
        })
        .catch((error) => {
          setStartSpin(false);
          Swal.fire({
            title: "Failed To Login!",
            text: error.code,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    }
  };

  //Google Login
  const googleLogin = () => {
    setStartSpin(true);
    loginWithGoogle()
      .then((result) => {
        setStartSpin(false);
        setUserInfo(result.user);
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          showConfirmButton: false,
          timer: 800,
        });
        setTimeout(() => {
          if (location.state) navigate(location.state);
          else navigate("/");
        }, 1200);
      })
      .catch((error) => {
        setStartSpin(false);
        Swal.fire({
          title: "Failed To Login!",
          text: error.code,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  return (
    <section className="btImageLogin mb-12 mt-4">
      {startSpin ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <>
          <h1 className="text-center font-semibold text-2xl lg:text-3xl">
            Welcome Back!
          </h1>
          <h1 className="text-center text-xl lg:text-2xl mt-2">
            Enter Your Credential to Login!
          </h1>
          <div className="flex flex-col md:flex-row-reverse md:px-8 mt-8">
            <div className="max-w-72 lg:max-w-[40%] mx-auto">
              {" "}
              <Lottie animationData={loginAnimation}></Lottie>
            </div>
            <div className="w-10/12 md:w-[50%] lg:w-[30%] mx-auto shadow-2xl p-8">
              <form
                onSubmit={handleSubmit}
                className="rounded-none md:pt-8 md:-mt-0 pt-0 -mt-12"
              >
                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered rounded-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Password Input */}
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="password"
                    className="input input-bordered rounded-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute bottom-[15%] right-4 text-xl hover:text-gray-500 cursor-pointer"
                  >
                    {!showPass ? <VscEyeClosed /> : <VscEye />}
                  </span>
                </div>
                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-outline rounded-none"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="google mx-auto divider">OR</div>
              <button
                onClick={googleLogin}
                className=" btn btn-outline mb-4 rounded-none w-full"
              >
                <span className="text-2xl">
                  <FcGoogle />
                </span>
                Continue With Google{" "}
              </button>
              <p className="">
                Haven't Account?{" "}
                <Link className="text-primary" to="/register">
                  Register Here.
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Login;
