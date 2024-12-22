import React from "react";
import readingAnimation from "../assets/aniamtion_json/reading-animation.json";
import Lottie from "lottie-react";

const AddTutorial = () => {

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">
        <form onSubmit={submitHandler} className="flex-1 content-end w-full flex flex-col gap-2 mx-auto">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl my-8">Add New Tutorial</h1>
          <div className="w-full">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="email"
              required
              placeholder="Email"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="photoURL"
              required
              placeholder="Photo URL"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="language"
              required
              placeholder="Language"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="price"
              required
              placeholder="Price"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="description"
              required
              placeholder="Description"
              className="rounded-none input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
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
        <div className="flex-1">
          <Lottie animationData={readingAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default AddTutorial;
