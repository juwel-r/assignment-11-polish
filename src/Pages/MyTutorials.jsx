import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";

const MyTutorials = () => {
  const { userInfo } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(null);

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
        Swal.fire({
          title: "Added Tutorial",
          text: "New Tutorial Added Successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed To Register!",
          text: error.code,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(currentTutorial);
    const updatedData = { title: "Updated Tutorial Title" }; // Example
    axios
      .put(`http://localhost:5000/tutorials`, currentTutorial)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `<span style="font-size: 20px; line-height: ;">Tutorial Update Successful!    </span>`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setIsModalOpen(false)
      })
      .catch((err) => {
        Swal.fire({
          title: "ERROR!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        console.log(err);
      });
  };

  return (
    <div className="p-8 bg-gradient-to-br  to-gray-200  md:w-11/12 mx-auto w-[95%]">
      <h2
        className="text-4xl font-extrabold text-center mb-12 tracking-wide"
        style={{ color: "#6A78FF" }}
      >
        My Tutorials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {myTutorials.length > 0 ? (
          myTutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="relative shadow-xl rounded-xl transform hover:-rotate-1 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              style={{ perspective: "1000px" }}
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  src={tutorial.photoURL}
                  alt={tutorial.name}
                />
              </div>

              {/* Content Section */}
              <div className="p-6 relative z-10 flex-grow">
                <h5
                  className="text-lg font-extrabold text-gray-800 truncate"
                  title={tutorial.name}
                  style={{ color: "#6A78FF" }}
                >
                  {tutorial.name}
                </h5>
                <p className="text-sm text-gray-600 mt-4">
                  <span className="font-semibold">Category:</span>{" "}
                  {tutorial.category}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Price:</span> $
                  {tutorial.price}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  {tutorial.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="p-4 flex justify-between items-end">
                <div className="font-bold text-sm ">
                  Reviews: {tutorial.review}
                </div>
                <div className="flex space-x-2">
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transform transition-all duration-300"
                    onClick={() => handleDelete(tutorial._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transform transition-all duration-300"
                    onClick={() => {
                      setIsModalOpen(true);
                      setCurrentTutorial(tutorial);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">
            No tutorials found.
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll p-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Update Tutorial's Data
            </h2>
            <form
              onSubmit={handleUpdate}
              className="sm:grid grid-cols-2 gap-x-2"
            >
              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={currentTutorial?.name || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      name: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  readOnly
                  value={currentTutorial?.email || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      email: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
                  required
                />
              </div>

              {/* Photo URL */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Photo URL
                </label>
                <input
                  type="url"
                  value={currentTutorial?.photoURL || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      photoURL: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
                  required
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Category
                </label>
                <input
                  type="text"
                  value={currentTutorial?.category || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      category: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
                  required
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Price
                </label>
                <input
                  type="number"
                  value={currentTutorial?.price || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      price: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
                  required
                />
              </div>

              {/* Review */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Review
                </label>
                <input
                  type="number"
                  readOnly
                  value={currentTutorial?.review || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      review: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
                  required
                  min="0"
                  max="5"
                />
              </div>

              {/* Description */}
              <div className="mb-4 col-span-2">
                <label className="block text-sm font-medium text-gray-500">
                  Description
                </label>
                <textarea
                  value={currentTutorial?.description || ""}
                  onChange={(e) =>
                    setCurrentTutorial({
                      ...currentTutorial,
                      description: e.target.value,
                    })
                  }
                  className="bg-white mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end mt-4 col-span-2">
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300 ease-in-out mr-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-white text-sm font-medium rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-600 hover:to-blue-600 transform transition-all duration-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;
