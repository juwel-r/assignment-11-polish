import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center">
      <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          This Page is Coming Soon!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
          We’re working hard to get this page ready. Stay tuned!
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
