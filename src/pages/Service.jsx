import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import client from "../service";

const Service = () => {
  const [services, setService] = useState();  


  const getProducts = async (id = "") => {
    try {
      const res = await client.get(`/services${id ? `?cid=${id}` : ""}`);
      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
  });

  const getInitialData = async () => {
    getProducts();
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {services?.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                    serviceId={val._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
