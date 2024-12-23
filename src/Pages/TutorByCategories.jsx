import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TutorByCategories = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/tutorials/${category}`).then((res) => {
      console.log(res.data);
      setTutors(res.data);
    });
  }, []);
  console.log(tutors);
  return <div></div>;
};

export default TutorByCategories;
