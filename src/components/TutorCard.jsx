import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  // name, image,language, price, review, details

  const { _id, name, email, photoURL, category, price, description, review } =
    tutor;
  return (
<div className="grid grid-cols-2 md:grid-cols-[2fr_5fr]  p-6 shadow-lg rounded-lg  gap-4 transform transition duration-300 ease-in-out hover:scale-[1.001] hover:shadow-2xl hover:-rotate-[0.5deg]">
  {/* Photo */}
  <section className="relative md:row-span-3 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:rotate-2">
    <img
      className="h-full w-full object-cover rounded-lg"
      src={photoURL}
      alt={name}
    />
    <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-3 py-1 rounded-full shadow-lg">
      {category}
    </div>
  </section>

  {/* Top Section */}
  <section className="flex flex-col justify-between md:flex-row md:justify-between mt-4 md:mt-0">
    <div className="flex flex-col md:w-[70%]">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
        {name}
      </h3>
      <div className="flex items-center gap-2 mt-2 text-sm text-primary font-medium">
        <FaGraduationCap className="text-lg" />
        {category}
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-start gap-6 mt-4 md:mt-0">
      {/* Review */}
      <div className="flex md:flex-col flex-row-reverse items-start gap-2 md:gap-0">
        <span className="font-semibold">
          {review}
        </span>
        <p className="md:text-sm font-normal text-gray-500">Reviews</p>
      </div>

      {/* Price */}
      <div className="flex md:flex-col flex-row-reverse items-start gap-2 md:gap-0">
        <span className="font-semibold">
          ${price}
        </span>
        <p className="md:text-sm font-normal text-gray-500">Price</p>
      </div>
    </div>
  </section>

  {/* Description */}
  <p className="mt-4 text-gray-600 text-sm leading-relaxed col-span-2 md:col-span-1">
    {description}
  </p>

  {/* Bottom Section */}
  <div className="col-span-2 md:col-span-1 md:place-self-end">
    <Link
      to={`/tutor/${_id}`}
      className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-md hover:bg-primary/90 transition duration-200 transform hover:scale-105"
    >
      View Details
    </Link>
  </div>
</div>

  );
};

export default TutorCard;
