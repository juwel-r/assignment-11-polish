import { Link } from "react-router-dom";
import {
  GiBookshelf,
  GiCastle,
  GiEgyptianTemple,
  GiScrollUnfurled,
  GiTempleGate,
} from "react-icons/gi";
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaChalkboardTeacher,
  FaFlagUsa,
  FaGlobe,
  FaMosque,
} from "react-icons/fa";
import { PiCellTowerLight } from "react-icons/pi";
import { MdOutlineSchool, MdTranslate } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { useEffect, useState } from "react";

const LanguageCategories = () => {
  const [categoryCount, setCategoryCount] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/tutorials/count").then((res) =>
      setCategoryCount(res.data)
    );
  }, []);

  const categories = [
    <FaChalkboardTeacher />,
    <FaGlobe />,
    <PiCellTowerLight />,
    <GiCastle />,
    <GiBookshelf />,
    <GiTempleGate />,
    <FaMosque />,
    <GiEgyptianTemple />,
    <MdOutlineSchool />,
    <GiScrollUnfurled />,
    <FaFlagUsa />,
    <MdTranslate />,
  ];
  console.log(categories[0].logo);

  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold flex items-center my-6 mb-4 lg:mt-14 ">
        Explore Our &nbsp;{" "}
        <span className="text-primary flex items-center gap-1">
          Languages
          <LiaLanguageSolid />
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryCount.slice(0,12).map((category, index) => (
          <Fade triggerOnce delay={index * 30} key={category.id}>
            <Link
              to={`/find-tutors/${category._id.replace(" ", "-")}`}
              key={category.id}
              className="flex justify-between items-center hover:bg-white p-5 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.001] rounded-lg"
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl text-blue-500 bg-blue-100 p-3 rounded-full shadow-md">
                  {categories[index]}
                </span>
                <div>
                  <h3 className="text-xl font-bold ">{category._id}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.count} Teachers
                  </p>
                </div>
              </div>
              <FaArrowRight className="text-blue-500 text-xl transition-transform transform hover:translate-x-1" />
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategories;
