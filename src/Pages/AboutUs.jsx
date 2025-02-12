import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Edu Mate</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Edu Mate is an innovative educational platform designed to enhance learning experiences
          through interactive tools and expert-curated resources. We strive to make quality 
          education accessible and engaging for everyone.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h2>
          <p className="text-gray-600">
            We aim to redefine learning by integrating technology with education, ensuring an 
            interactive and personalized experience for all learners.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to foster an inclusive and supportive learning community where 
            students and educators can thrive and achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;