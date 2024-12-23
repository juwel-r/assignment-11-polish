import axios from "axios";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import TutorCard from "../components/TutorCard";

const FindTutors = () => {
const tutors = useLoaderData()
  return <div>
    {
        tutors.map(tutor =><TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
    }
  </div>;
};

export default FindTutors;
