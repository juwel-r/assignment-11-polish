import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center my-8">
      <div>
        <h2 className="text-2xl font-bold">20,000+</h2>
        <p className="text-gray-500">Experienced Tutors</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">300,000+</h2>
        <p className="text-gray-500">5-Star Tutor Reviews</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">120+</h2>
        <p className="text-gray-500">Languages Taught</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">180,000+</h2>
        <p className="text-gray-500">Total Users</p>
      </div>
    </div>
  );
};

export default Stats;
