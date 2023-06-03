import React, { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import client from "../service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import { NavLink } from "react-router-dom";

function ServiceDetail() {
  const { serviceId } = useParams(); // Retrieve the serviceId from the URL parameter
  const [service, setService] = useState(null); // State to store the service details
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  useEffect(() => {
    // Fetch the service details based on the serviceId
    const fetchServiceDetails = async () => {
      try {
        const response = await client.get(`/services/${serviceId}`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch service details");
        }
        const serviceDetails = response.data;
        toggleLoading();
        setService(serviceDetails);
      } catch (error) {
        toggleLoading();
        console.error(error);
      }
    };
    fetchServiceDetails();
  }, [serviceId]);

  // Render loading state if service details are still being fetched
  if (!service) {
    // return <div>Loading...</div>;
    return <></>;
  }
  const { imgsrc, title, description } = service;

  return (
    <>
      <div className="container col-md-10 mt-5">
        <div className="card mb-3">
          <div className="row g-0 ">
            <div className="col-md-4">
              {loading ? (
                <div>
                  <Skeleton height="240px" width="370px" />
                </div>
              ) : (
                <img
                  src={imgsrc}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {loading ? (
                  <div>
                    <Skeleton height="30px" width="300px" />
                  </div>
                ) : (
                  <h5 className="card-title">{title}</h5>
                )}

                {loading ? (
                  <div>
                    <Skeleton height="60px" width="550px" />
                  </div>
                ) : (
                  <p className="card-text">{description}</p>
                )}
                <button type="button" className="btn btn-outline-dark btn-sm">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
