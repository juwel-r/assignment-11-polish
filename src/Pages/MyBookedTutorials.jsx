import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../customHooks/useAuth";
import { MdStar } from "react-icons/md";
import Swal from "sweetalert2";

const MyBookedTutorials = () => {
  const { userInfo } = useAuth();
  const [bookedTutorials, setBookedTutorials] = useState([]);
  const [review, setReview] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booked-tutorials?email=${userInfo.email}`)
      .then((res) => {
        setBookedTutorials(res.data);
      });
  }, [review]);

  console.log(bookedTutorials);

  if (!bookedTutorials.length) {
    return (
      <div>
        <h1 className="text-center font-bold text-3xl pt-10">
          You haven't Booked Any Session
        </h1>
        <p className="text-center mt-4">
          Please select your tutor and book any session.{" "}
        </p>
      </div>
    );
  }

  const reviewUpdateHandler = (tutorId, reviews, name) => {
    axios.put(`http://localhost:5000/tutorials/${tutorId}`).then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful!",
            text: `You have reviewed ${name} Session.`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      setReview(reviews + 1);
      console.log(res.data);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-4">
      <h1 className=" text-2xl md:text-3xl lg:md:text-4xl font-semibold">
        You Have Booked {bookedTutorials.length} Sessions
      </h1>
      <p>You can feedback for your tutor as Review them.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 md:mt-8">
        {bookedTutorials.map((tutorial) => (
          <div
            key={tutorial._id}
            className="relative  shadow-xl  overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={tutorial.tutorPhoto}
                alt="Tutor"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h5 className="text-lg font-bold">{tutorial.tutorName}</h5>
                <h5 className="text-sm">{tutorial.tutorCategory}</h5>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <div className="">
                <p className="font-medium ">
                  Price:
                  <span className="text-sm text-gray-500 ml-2">
                    ${tutorial.tutorPrice}
                  </span>
                </p>
              </div>
              <p className="font-medium flex items-center">
                Reviews:
                <span className="text-sm ml-2">
                 
                  {tutorial.review}
                </span>
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 shadow-md">
              Booked
            </div>

            {/* Action Button */}
            <div
              onClick={() =>
                reviewUpdateHandler(tutorial.tutorId, tutorial.review, tutorial.tutorName)
              }
              className="p-4 border-t flex justify-start lg:justify-center"
            >
              <button className="btn btn-sm h-10 rounded-none px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white font-bold  hover:from-blue-600 hover:to-primary transition-color duration-500">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutorials;
