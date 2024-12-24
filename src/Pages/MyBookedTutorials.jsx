import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../customHooks/useAuth";

const MyBookedTutorials = () => {
  const { userInfo } = useAuth();
  const [bookedTutorials, setBookedTutorials] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booked-tutorials?email=${userInfo.email}`)
      .then((res) => {
        setBookedTutorials(res.data);
      });
  }, []);
return (
    <div className="container">
        <div className="row">
            {bookedTutorials.map((tutorial) => (
                <div key={tutorial._id} className="col-12 col-sm-6 col-md-4 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img 
                            src={tutorial.tutorPhoto} 
                            className="w-52" 
                            alt="Tutor" 
                            style={{ objectFit: 'cover', height: '200px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{tutorial.tutorCategory}</h5>
                            <p className="card-text">Price: ${tutorial.tutorPrice}</p>
                            <p className="card-text">Tutor Email: {tutorial.tutorEmail}</p>
                            <p className="card-text">Student Email: {tutorial.studentEmail}</p>
                            <p className="card-text">Review: {tutorial.review}</p>
                        </div>  
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default MyBookedTutorials;
