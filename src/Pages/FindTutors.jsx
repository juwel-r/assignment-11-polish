import React, { useEffect, useState } from "react";
import TutorCard from "../components/TutorCard";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/tutorials/search?value=${searchValue}`)
      .then((res) => {
        setTutors(res.data);
      })
      .catch((error) => {
        console.error("Error fetching tutorials:", error);
      });
  }, [searchValue]);
  

  return (
    <div className="md:w-11/12 mx-auto w-[95%] py-8">
      <div className="text-center mb-8">
        <h1 className="md:w-8/12 mx-auto text-2xl md:text-3xl font-semibold">
          Find Your Perfect{" "}
          <span className="text-primary font-bold">Tutor</span>
        </h1>
        <p className="md:w-11/12 lg:w-[60%] mx-auto md:my-6 my-4 text-sm md:text-base text-gray-500">
          Explore top-rated tutors across various languages. Connect with
          experienced educators to enhance your learning journey. Book your
          session today and take the first step toward mastering a new language!
        </p>
      </div>
      <div className="mb-6">
        <form onSubmit={(e)=>e.preventDefault()} className="flex justify-between items-center w-full md:w-1/2  border border-gray-300 rounded-md mx-auto">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            name="search"
            placeholder="Search for tutors..."
            className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
       <button> <IoIosSearch className="text-2xl mx-2" /></button>
        </form>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 lg:mt-10">
        {Array.isArray(tutors) && tutors.length > 0 ? (
          tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))
        ) : (
          <p className="text-center text-red-500">
            No tutors found. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default FindTutors;
