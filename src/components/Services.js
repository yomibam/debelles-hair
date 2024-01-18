import React from "react";
import serviceData from "../data/ServiceData.js";
import hr from "../assets/hr.png";

const ServiceLink = ({ serviceName }) => {
  return (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/2349136225444?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20${serviceName}.`,
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
};

const DisplayServices = ({ services }) => {
  return services.map((service) => (
    <div onClick={ServiceLink(service)} className="flex flex-col gap-3">
      <div className="w-[300px] h-[300px] overflow-hidden">
        <img
          src={require(`../assets/${service.serviceImg}`)}
          alt={service.serviceName}
        />
      </div>
      <h3 className="pt-3 text-3xl font-medium text-black">
        {service.serviceName}
      </h3>
      <p className="text-black text-[15px] font-light">
        {service.serviceDescription}
      </p>
    </div>
  ));
};

function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-5  py-[10%] bg-[#fff2f2]">
      <h2 className="text-center text-black text-[2rem] font-medium px-[5%]">
        Our Services
      </h2>
      <h3 className="text-center text-black text-[1rem] font-light px-[6%]">
        When it comes to your looks, your hair is Key! Your hair and hair
        accessories give more importance to your personal taste and preferences.
      </h3>
      <div className="flex items-center gap-5 overflow-x-auto text-center flex-nowrap w-[100%] justify-start py-[5%]">
        <DisplayServices services={serviceData} />
      </div>
      <img src={hr} alt="line break" className="w-[120px] pt-[20%]" />
    </div>
  );
}

export default Services;
