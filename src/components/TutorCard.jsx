import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaGraduationCap } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  // name, image,language, price, review, details

  const { _id, name, email, photoURL, category, price, description, review } =
    tutor;
  return (
    <div className="min-h-[275px] grid grid-cols-2 md:grid-cols-[2fr_5fr] p-6 shadow-lg rounded-lg gap-x-4 transform transition duration-300 ease-in-out hover:scale-[1.005] hover:shadow-2xl hover:-rotate-[0.5deg] hover:bg-gray-50">
      {/* Photo */}
      <section className="relative md:row-span-3 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:rotate-2">
        <Fade triggerOnce direction="up" delay={50}>
          {" "}
          <img
            className="h-full w-full object-cover rounded-lg"
            src={photoURL}
            alt={name}
          />
        </Fade>
        <Fade triggerOnce delay={50}>
          <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            {category}
          </div>
        </Fade>
      </section>

      {/* Top Section */}
      <section className="flex flex-col sm:justify-between md:flex-row md:justify-between mt-4 md:mt-0 md:pt-4">
        <Fade triggerOnce className="flex flex-col md:w-[70%]">
          <h3 className="text-xl md:text-2xl font-semibold  hover:text-primary transition duration-200">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-sm text-primary font-medium">
            <FaGraduationCap className="text-lg" />
            {category}
          </div>
        </Fade>

        <div className="flex flex-col items-start sm:gap-x-6 mt-4 md:mt-0">
          {/* Review */}
          <div className="flex  flex-row-reverse items-start gap-2">
            <span className="font-semibold text-primary">{review}</span>
            <p className="md:text-sm font-normal text-gray-500">Reviews:</p>
          </div>

          {/* Price */}
          <div className="flex  flex-row-reverse items-start gap-2 ">
            <span className="font-semibold text-primary">${price}</span>
            <p className="md:text-sm font-normal text-gray-500">Price: </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <Fade
        triggerOnce
        direction="up"
        className="mt-4 text-gray-500 text-sm leading-relaxed col-span-2 md:col-span-1"
      >
        <p>{description.slice(0, 200)}...</p>
      </Fade>

      {/* Bottom Section */}
      <Fade
        triggerOnce
        delay={100}
        className="col-span-2 md:col-span-1 md:justify-self-end mt-2 "
      >
        <Link to={`/tutor/${_id}`} className="text-sm font-medium green-button">
          View Details
        </Link>
      </Fade>
    </div>
  );
};

export default TutorCard;
