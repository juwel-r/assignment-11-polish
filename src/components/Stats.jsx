import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setStartCount(false);
    }
  }, [inView]);
  const stats = [
    { title: "Experienced Tutors", count: 14, color: "text-blue-600" },
    { title: "Tutor Reviews", count: 27, color: "text-green-600" },
    { title: "Languages Taught", count: 12, color: "text-purple-600" },
    { title: "Total Users", count: 19, color: "text-orange-600" },
  ];
  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center my-12"
    >
      {startCount && (
        <>
          {stats.map((data, index) => (
            <div
              key={index}
              className="p-4 hover:bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 min-h-[114px]"
            >
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${data.color}`}>
                <CountUp
                  start={0}
                  end={data.count}
                  duration={2.5}
                  separator=","
                />
                +
              </h2>
              <p className="mt-2 text-sm text-gray-500">{data.title}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Stats;
