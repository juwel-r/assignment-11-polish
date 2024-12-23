import { Link } from "react-router-dom";
import {
  GiBookshelf,
  GiCastle,
  GiEgyptianTemple,
  GiScrollUnfurled,
  GiTempleGate,
} from "react-icons/gi";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaFlagUsa,
  FaGlobe,
  FaMosque,
} from "react-icons/fa";
import { PiCellTowerLight } from "react-icons/pi";
import { MdOutlineSchool, MdTranslate } from "react-icons/md";
import axios from "axios";

const categories = [
  {
    id: 1,
    title: "English Tutors",
    count: "2,476",
    logo: <FaChalkboardTeacher />,
  },
  {
    id: 2,
    title: "Spanish Tutors",
    count: "1,892",
    logo: <FaGlobe />,
  },
  {
    id: 3,
    title: "French Tutors",
    count: "2,041",
    logo: <PiCellTowerLight />,
  },
  {
    id: 4,
    title: "German Tutors",
    count: "1,732",
    logo: <GiCastle />,
  },
  {
    id: 5,
    title: "Italian Tutors",
    count: "1,482",
    logo: <GiBookshelf />,
  },
  {
    id: 6,
    title: "Chinese Tutors",
    count: "2,223",
    logo: <GiTempleGate />,
  },
  {
    id: 7,
    title: "Arabic Tutors",
    count: "1,810",
    logo: <FaMosque />,
  },
  {
    id: 8,
    title: "Japanese Tutors",
    count: "2,198",
    logo: <GiEgyptianTemple />,
  },
  {
    id: 9,
    title: "Portuguese Tutors",
    count: "1,499",
    logo: <MdOutlineSchool />,
  },
  {
    id: 10,
    title: "Korean Tutors",
    count: "1,673",
    logo: <GiScrollUnfurled />,
  },
  {
    id: 11,
    title: "Russian Tutors",
    count: "2,119",
    logo: <FaFlagUsa />,
  },
  {
    id: 12,
    title: "Hindi Tutors",
    count: "1,841",
    logo: <MdTranslate />,
  },
];


const LanguageCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {categories.map((category) => (
        <Link
          to={`/find-tutors/${category.title.replace(" ", "-")}`}
          key={category.id}
          className="flex justify-between items-center bg-white p-4 border shadow-sm hover:shadow-md rounded-lg"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl ">{category.logo}</span>
            <div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-gray-500">{category.count} teachers</p>
            </div>
          </div>
          <FaArrowRight className="text-gray-500 ml-2" />
        </Link>
      ))}
    </div>
  );
};

export default LanguageCategories;
