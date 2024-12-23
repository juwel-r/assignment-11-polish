import React from "react";

const TutorCard = ({ tutor }) => {
  const { name, email, photoURL, category, price, description, review } = tutor;
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-sm bg-white">
      {/* Tutor Image */}
      <div className="w-20 h-20  overflow-hidden mr-4 border">
        <img src={photoURL} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Tutor Info */}
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              {category}
            </p>
          </div>
          <p className="text-pink-600 font-bold text-lg">Price:{price}</p>
        </div>
        <p className="text-sm text-gray-500">
         {review}
        </p>
        {/* <p className="text-sm text-gray-500">Speaks Arabic (Native)</p> */}
        {/* <p className="text-sm text-gray-500 italic mt-1">
          Powered by Google Translate{" "}
          <a href="#" className="underline">
            Show original
          </a>
        </p> */}
        <p className="text-sm mt-2">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center ml-4">
        <p className="text-lg font-bold">${price}</p>
        <p className="text-sm text-gray-500">{review}</p>
        <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-full">
          Book trial lesson
        </button>
        <button className="mt-2 border px-4 py-2 rounded-full">
          Send message
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
