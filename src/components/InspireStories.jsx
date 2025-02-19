import React, { useContext } from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

// Sample data for stories
const stories = [
  {
    id: 1,
    name: "Emily Johnson",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJj3ZYDF7c0fYoBStJTj8K9Rx1rVsNM779tA&s",
    language: "Mastered Spanish",
    testimonial:
      "Learning Spanish was always my dream, and CareerUp made it so easy. The tutors are amazing!",
  },
  {
    id: 2,
    name: "Liam Wong",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQFWq0jjAuHLxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695781423858?e=2147483647&v=beta&t=xrq4rcVXp2WMiKaXXjA5Qqukj7V8URuBIVQgCPHBPbE",
    language: "Fluent in French",
    testimonial:
      "Thanks to CareerUp, I am now fluent in French. It boosted my confidence and career prospects!",
  },
  {
    id: 3,
    name: "Ava Brown",
    photo:
      "https://media.istockphoto.com/id/1278976856/photo/happy-student-girl-at-high-school.jpg?s=612x612&w=0&k=20&c=XiJQHTm-LKgCr0s3hURY0ATGFfMZQH4B8gE6h2TlK4U=",
    language: "Learned Mandarin",
    testimonial:
      "The personalized lessons were a game-changer. Mandarin is no longer intimidating!",
  },
];

const InspireStories = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <section
      className={` ${
        isDark ? "" : "bg-gradient-to-br from-blue-50 to-cyan-100"
      }  py-12 px-6 mt-6 md:mt-12`}
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">
          Inspire Through Stories
        </h2>
        <p className="text-gray-600 mt-4">
          See how our tutors have helped students achieve their language goals.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <Fade triggerOnce delay={i * 200} key={story.id}>
            <div
              key={story.id}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={story.photo}
                alt={story.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <Fade triggerOnce direction="down" delay={i * 200}>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {story.name}
                </h3>
                <p className="text-center text-sm text-gray-500 mb-4">
                  {story.language}
                </p>
                <p className="text-sm text-gray-600 italic">
                  "{story.testimonial}"
                </p>
              </Fade>
            </div>
          </Fade>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Bounce direction="">
          <Link to={"coming-soon"} className="md:px-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:from-transparent hover:to-transparent hover:border-2 hover:text-primary border-primary  transform transition-all duration-300">
            Start Your Journey Today
          </Link >
        </Bounce>
      </div>
    </section>
  );
};

export default InspireStories;

