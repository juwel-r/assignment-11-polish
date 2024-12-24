import React, { useState } from "react";
import readingAnimation from "../assets/aniamtion_json/reading-animation.json";
import Lottie from "lottie-react";
import useAuth from "../customHooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddTutorial = () => {
  const { userInfo } = useAuth();
  const [category, setCategory] = useState("");
  const selectHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const review = parseFloat(form.review.value);
    const tutorialData = {
      name,
      email,
      photoURL,
      category,
      price,
      description,
      review,
    };
    axios
      .post("http://localhost:5000/tutorials", tutorialData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added Tutorial",
            text: "New Tutorial Added Successful!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed To Register!",
          text: error.code,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
    console.log(tutorialData);
  };

  const categories = [
    { id: 1, categoryName: "English" },
    { id: 2, categoryName: "Spanish" },
    { id: 3, categoryName: "French" },
    { id: 4, categoryName: "German" },
    { id: 5, categoryName: "Italian" },
    { id: 6, categoryName: "Chinese" },
    { id: 7, categoryName: "Arabic" },
    { id: 8, categoryName: "Japanese" },
    { id: 9, categoryName: "Portuguese" },
    { id: 10, categoryName: "Korean" },
    { id: 11, categoryName: "Russian" },
    { id: 12, categoryName: "Hindi" },
  ];


  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col md:flex-row md:gap-16">
        <div className="flex-1">
          <Lottie animationData={readingAnimation}></Lottie>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex-1 content-end w-full flex flex-col gap-2 mx-auto text-center"
        >
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl my-8">
            Add New Tutorial
          </h1>
          {/* Name */}
          <div className="w-full">
            <input
              value={userInfo.displayName}
              type="text"
              name="name"
              required
              placeholder="Name"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          {/* Email */}
          <div className="w-full">
            <input
              value={userInfo.email}
              type="email"
              name="email"
              required
              placeholder="Email"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          {/* Photo URL */}
          <div className="w-full">
            <input
              type="url"
              name="photoURL"
              required
              placeholder="Photo URL"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="lg:flex gap-2 lg:px-2">
            {/* Category */}
            <div className="w-full">
              <select
                className="rounded-none input input-bordered w-full max-w-xl"
                name="category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Language
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.categoryName}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
            {/* Price */}
            <div className="w-full mt-2 lg:mt-0">
              <input
                type="number"
                step="any"
                name="price"
                required
                placeholder="Price"
                className="rounded-none input input-bordered w-full max-w-xl"
              />
            </div>
          </div>
          {/* Description */}
          <div className="w-full">
            <input
              type="text"
              name="description"
              required
              placeholder="Description"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          {/* Review */}
          <div className="w-full">
            <input
              defaultValue="0"
              type="number"
              step="any"
              name="review"
              required
              placeholder="Review"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full text-center">
            <input
              type="submit"
              value="Submit"
              className="rounded-none input input-bordered w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
