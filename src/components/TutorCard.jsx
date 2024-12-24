import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  // name, image,language, price, review, details

  const {_id, name, email, photoURL, category, price, description, review } = tutor;
  return (
    <div className="grid grid-cols-[1fr_5fr] border p-4 shadow-lg">

      {/* Photo */}
      <section className="border md:row-span-2">
        <img className="h-full w-full object-cover" src={photoURL} alt={name} />
      </section>

      {/* Top */}
      <section className="md:text-2xl text-xl md:font-semibold font-semibold md:ml-6 ml-4 flex flex-col md:flex-row md:justify-between">
        <p>
          {name}
          <p className="text-white font-normal text-nowrap text-sm bg-primary/80  mt-2 px-3 w-fit flex items-center gap-2">
            <FaGraduationCap />
            {category}
          </p>
        </p>

        <div className="flex items-start gap-4 lg:gap-6 mt-4 md:mt-0">
          <p className="flex flex-col items-start">
            <span className="flex gap-1 items-center">
              <MdStar />
              {review}
            </span>
            <p className="text-sm font-normal text-gray-500">Review</p>
          </p>
          <p className="flex flex-col items-start">
            ${price}
            <p className="text-sm font-normal text-gray-500">Price</p>
          </p>
        </div>
      </section>
      {/* Bottom */}
      <div className="md:ml-6 flex flex-col md:flex-row justify-between col-span-2 md:col-span-1 gap-4 mt-4 flex-wrap">
        <div className="bottom-left text-sm text-gray-500">
          {description}
        </div>
        <div className="bottom-right self-end">
          <Link to={`/tutor/${_id}`} className="btn btn-ghost text-primary text-nowrap btn-outline btn-sm rounded-none">
            View Details
          </Link >
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
