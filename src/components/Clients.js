import React from "react";

import garage_on_the_wheel from "../assets/clients/garage_on_the_wheel.jpg";
import lauro from "../assets/clients/lauro.jpg";
import mahadev_clg from "../assets/clients/mahadev_clg.jpg";
import tarasa from "../assets/clients/tarasa.png";
import tech_mahindra from "../assets/clients/tech_mahindra.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "../App.css";

// import required modules
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Pagination, Navigation, Scrollbar, A11y]);

const Clients = () => {
  return (
    <div className="overflow-hidden w-full h-full bg-try/20  flex flex-col flex-wrap items-center justify-around p-8  ">
      <h1 className="font-sans md:text-3xl text-2xl mb-8 text-cyan-100 ">
        {" "}
        Our Clients{" "}
      </h1>

      <div className=" grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-auto h-auto  ">
        <div data-aos="flip-up" className="w-30   h-60 p-2 ">
          <img
            src={tech_mahindra}
            alt="infosys"
            className="w-full h-full object-center  hover:scale-125 duration-500"
          />
        </div>
        <div data-aos="fade-down" className="w-30 h-60 p-2 ">
          <img
            src={tarasa}
            alt="itsupport"
            className="w-full h-full  hover:scale-125 duration-500"
          />
        </div>
        <div data-aos="fade-up" className="w-30  h-60 p-2 ">
          <img
            src={garage_on_the_wheel}
            alt="digital_matrix"
            className="w-full h-full  hover:scale-125 duration-500"
          />
        </div>
        <div data-aos="flip-down" className="w-30  h-60 p-2 ">
          <img
            src={mahadev_clg}
            alt="pursho"
            className="w-full h-full object-center  hover:scale-125 duration-500"
          />
        </div>
        <div data-aos="flip-down" className="w-30  h-60 p-2 ">
          <img
            src={lauro}
            alt="pursho"
            className="w-full h-full object-center  hover:scale-125 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
