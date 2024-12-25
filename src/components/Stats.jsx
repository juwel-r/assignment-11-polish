import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-12">
      <div className="p-4 hover:bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-blue-600">
          <CountUp start={0} end={20000} duration={2.5} separator="," />+
        </h2>
        <p className="mt-2 text-sm text-gray-600">Experienced Tutors</p>
      </div>
      <div className="p-4 hover:bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-green-600">
          <CountUp start={0} end={300000} duration={2.5} separator="," />+
        </h2>
        <p className="mt-2 text-sm text-gray-600">5-Star Tutor Reviews</p>
      </div>
      <div className="p-4 hover:bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-purple-600">
          <CountUp start={0} end={120} duration={2.5} separator="," />
        </h2>
        <p className="mt-2 text-sm text-gray-600">Languages Taught</p>
      </div>
      <div className="p-4 hover:bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-orange-600">
          <CountUp start={0} end={180000} duration={2.5} separator="," />+
        </h2>
        <p className="mt-2 text-sm text-gray-600">Total Users</p>
      </div>
    </div>
  );
};

export default Stats;

