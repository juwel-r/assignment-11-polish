import React from "react";
import { useParams } from "react-router-dom";

const TutorByCategories = () => {
  const { category } = useParams();
  console.log(category);
  return <div></div>;
};

export default TutorByCategories;
