import React from 'react';

const ___Draft = () => {
    // {
    //     "_id": "676a985894e040d8cbb38bf4",
    //     "tutorId": "676937ac9b4494c1feedb831",
    //     "tutorPhoto": "https://avatars.preply.com/i/logos/i/logos/avatar_4z4kyfsty2t.jpg",
    //     "tutorCategory": "Italian Tutors",
    //     "tutorPrice": 149.34,
    //     "tutorEmail": "lian.wei@gmail.com",
    //     "studentEmail": "juwel.jem@gmail.com",
    //     "review": 4,
    //     "tutorName": "Ahmed Farah"
    // }
    return (
        <div>
            
        </div>
    );
};

export default ___Draft;


<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {bookedTutorials.map((tutorial) => (
      <div
        key={tutorial._id}
        className="relative bg-gradient-to-b from-blue-50 via-white to-white shadow-xl  overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        {/* Image Section */}
        <div className="relative">
          <img
            src={tutorial.tutorPhoto}
            alt="Tutor"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h5 className="text-lg font-bold">{tutorial.tutorCategory}</h5>
            <p className="text-sm">Price: ${tutorial.tutorPrice}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <p className="text-gray-700 font-medium">
              Tutor Email:
              <span className="block text-sm text-gray-500">{tutorial.tutorEmail}</span>
            </p>
          </div>
          <p className="text-gray-700 font-medium mt-2">
            Student Email:
            <span className="block text-sm text-gray-500">{tutorial.studentEmail}</span>
          </p>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 shadow-md">
          Booked
        </div>

        {/* Action Button */}
        <div className="p-6 border-t flex justify-center">
          <button className="px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white font-bold  hover:from-blue-600 hover:to-primary transition-colors">
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
</div>