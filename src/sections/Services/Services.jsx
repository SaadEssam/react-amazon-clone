import React from "react";
import "./Services.css";
import { data } from "../../constants";

const Services = () => {
  return (
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {data.services.map((service, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <div className="icon">{service.icon}</div>
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0">{service.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
