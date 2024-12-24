import axios from "axios";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import TutorCard from "../components/TutorCard";

const FindTutors = () => {
  const tutors = useLoaderData();
  return (
    <div className="md:w-11/12 mx-auto w-[95%]">
      <div className="text-center">
        <h1 className="md:w-8/12 mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">Find Your Perfect <span className="text-primary font-bold ">Tutor</span></h1>
        <p className="md:w-11/12 lg:w-[60%] mx-auto md:my-6 my-4 text-sm md:text-base">
          Explore top-rated tutors across various languages. Connect with
          experienced educators to enhance your learning journey. Book your
          session today and take the first step toward mastering a new language!
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 lg:mt-10">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
