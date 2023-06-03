import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ imgsrc, title, serviceId, description }) => {
  const navigate = useNavigate();

  const handleServiceDetails = () => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-bold">{title}</h5>
            {/* {movieName.length >= 15 ? `${movieName} ...` : movieName} */}

            <p className="card-text">
              {description.length > 30
                ? `${description.slice(0, description.indexOf(" ", 60))} ...`
                : description}
            </p>
            <button
              to=""
              className="btn btn-outline-success btn-sm"
              onClick={handleServiceDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
