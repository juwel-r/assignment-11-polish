import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary  mb-4">
          This Page is Coming Soon!
        </h1>
        <p className="text-lg text-gray-600  mb-6">
          We’re working hard to get this page ready. Stay tuned!
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-500 ">
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
