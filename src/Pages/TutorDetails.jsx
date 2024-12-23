import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const { _id, name, email, photoURL, category, price, description, review } =
    tutor;
  // name,image,language,description, price,review,book button
  return (
    <div className=" mx-auto border-t bg-primary pt-40">
      <div className="relative bg-white rounded-t-[32px] w-[95%] lg:w-8/12 md:10/12 mx-auto">
        <section className="absolute rounded-full -top-[20%] md:-top-[30%] left-[20%] md:left-[32%] lg:left-[30%] lg:-top-[35%] z-10 p-1 border-y-4 border-primary max-w-60 lg:max-w-72 ">
          <img
            className="rounded-full h-full w-full"
            src={photoURL}
            alt={name}
          />
        </section>
        <section className="p-4 md:px-8">
          <p className="text-2xl md:text-3xl font-semibold mt-24 md:mt-8">
            {name}
          </p>
          <p className="text-white font-normal text-nowrap text-sm bg-primary rounded-full  mt-2 px-4 py-1 w-fit flex items-center gap-2 ">
            <FaGraduationCap />
            {category}
          </p>
          <p className="text-gray-500 mt-6">{description}</p>
          <div className="flex items-start gap-4 lg:gap-6 mt-4">
            <p className="flex items-center">
              <strong>Review:</strong> &nbsp;{" "}
              <MdStar className="text-orange-500" /> {review}
            </p>
            <p>
              <strong>Fee:</strong> {price}
            </p>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl">About Tutor</h1>
            <p className="text-sm text-gray-500">
            Meet {name}, an experienced and passionate tutor specializing in {category} language learning. Whether you’re just starting or looking to refine your skills, {name} offers personalized lessons that focus on speaking, reading, writing, and listening. With a deep understanding of {category}, {name} will guide you through every step of your learning journey, ensuring that you gain confidence and proficiency in both everyday conversations and more advanced topics. Get ready to immerse yourself in {category} and unlock new opportunities for personal and professional growth with {name}'s expert guidance!
            </p>
          </div>
          <Link
            to={`/tutor/${_id}`}
            className="btn btn-ghost text-primary text-nowrap btn-outline btn-sm rounded-none mt-4"
          >
            Book a Session
          </Link>
        </section>
      </div>
    </div>
  );
};

export default TutorDetails;
