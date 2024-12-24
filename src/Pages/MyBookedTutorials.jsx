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

  const reviewUpdateHandler = (tutorId, reviews, name) => {
    axios
      .put(`http://localhost:5000/tutorials/${tutorId}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `<span style="font-size: 20px; line-height: ;">Reviewed Successfully!    </span>`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setReview(reviews + 1);
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "ERROR!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        console.log(err);
      });
  };

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

  return (
<div className="container mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
    You Have Booked {bookedTutorials.length} Sessions
  </h1>
  <p className="text-center text-lg text-gray-600 mb-8">
    Review and provide feedback for your tutors.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {bookedTutorials.map((tutorial) => (
      <div
        key={tutorial._id}
        className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:rotate-[0.5deg] hover:scale-[1.01] hover:shadow-xl"
      >
        {/* Image Section */}
        <div className="relative group">
          <img
            src={tutorial.tutorPhoto}
            alt="Tutor"
            className="w-full h-64 object-cover group-hover:opacity-90 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h5 className="text-2xl font-bold">{tutorial.tutorName}</h5>
            <h5 className="text-lg">{tutorial.tutorCategory}</h5>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-800 font-semibold text-lg">
              ${tutorial.tutorPrice}
            </p>
            <div className="flex items-center gap-2 text-yellow-500">
              <MdStar className="text-xl" />
              <span className="font-semibold">{tutorial.review}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            {tutorial.description || "No description available."}
          </p>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg">
          Booked
        </div>

        {/* Action Button */}
        <div
          onClick={() =>
            reviewUpdateHandler(
              tutorial.tutorId,
              tutorial.review,
              tutorial.tutorName
            )
          }
          className="p-4 border-t flex justify-center"
        >
          <button className="px-6 py-2 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-primary transition-all duration-500">
            Review
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default MyBookedTutorials;
