import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../customHooks/useAuth';

const MyTutorials = () => {
    const { userInfo } = useAuth(); 
  const [myTutorials, setMyTutorials] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tutorials?email=${userInfo.email}`)
      .then((res) => {
        setMyTutorials(res.data);
      })
      .catch((err) => console.error(err));
  }, [userInfo.email]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/tutorials/${id}`)
      .then(() => {
        setMyTutorials(myTutorials.filter((tutorial) => tutorial._id !== id));
      })
      .catch((err) => console.error(err));
  };

  const handleUpdate = (id) => {
    const updatedData = { title: 'Updated Tutorial Title' }; // Example
    axios
      .put(`http://localhost:5000/tutorials/${id}`, updatedData)
      .then(() => {
        alert('Tutorial updated successfully!');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#6A78FF' }}>
        My Tutorials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myTutorials.length > 0 ? (
          myTutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                className="w-full h-40 object-cover"
                src={tutorial.image}
                alt={tutorial.title}
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-2" style={{ color: '#6A78FF' }}>
                  {tutorial.title}
                </h5>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Category:</span> {tutorial.category}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Price:</span> ${tutorial.price}
                </p>
                <p className="text-gray-600 mb-2">{tutorial.description}</p>
                <p className="text-yellow-500 font-bold">Review: {tutorial.review}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(tutorial._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleUpdate(tutorial._id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No tutorials found.</p>
        )}
      </div>
    </div>
  );
};

export default MyTutorials;
