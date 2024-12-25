import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../customHooks/useAuth";
import { MdStar } from "react-icons/md";
import Swal from "sweetalert2";

const MyBookedTutorials = () => {
  const { userInfo } = useAuth();
  const [bookedTutorials, setBookedTutorials] = useState([]);
  const [review, setReview] = useState(0);
  console.log(bookedTutorials);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booked-tutorials?email=${userInfo.email}`)
      .then((res) => {
        setBookedTutorials(res.data);
      });
  }, [review]);

  const reviewUpdateHandler = (tutorId, reviews) => {
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
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
        You Have Booked {bookedTutorials.length} Sessions
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Review and provide feedback for your tutors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookedTutorials.map((tutorial) => (
          <div
            key={tutorial._id}
            className="hover:*:bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:rotate-[0.5deg] hover:scale-[1.01] hover:shadow-xl"
          >
            <div className="max-w-lg mx-auto p-6 shadow-md border border-primary/50">
              <div className="flex flex-col items-center pt-4">
                <img
                  src={tutorial.tutorPhoto}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full shadow-md mb-4"
                />
                <>
                  {tutorial.tutorName ? (
                    <h1 className="text-2xl font-semibold">
                      {tutorial.tutorName}
                    </h1>
                  ) : (
                    <p className="left-6 text-xl text-red-600 pr-2">
                      This Tutorial hss Deleted!
                    </p>
                  )}

                  <p className="text-gray-500">{tutorial.tutorCategory}</p>
                  <div className="flex items-center gap-2">
                    Reviews:
                    <span className="font-semibold">{tutorial.review}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    Price:
                    <span className="font-semibold">
                      ${tutorial.tutorPrice}
                    </span>
                  </div>
                  <button
                    className="green-button mt-4"
                    onClick={() =>
                      reviewUpdateHandler(tutorial.tutorId, tutorial.review)
                    }
                  >
                    Review
                  </button>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutorials;
