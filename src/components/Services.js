import img1 from "../assets/img/gifimg1.gif";
import img2 from "../assets/img/gifimg2.gif";

// import data from "./ServiceData/Data";
import galaxy1 from "../assets/app/galaxy1.gif";

import erp from "../assets/img/1.png";
import custom from "../assets/img/2.png";
import web from "../assets/img/3.png";
import product from "../assets/img/4.png";
import digital from "../assets/img/5.png";
import desktop from "../assets/img/6.png";
import android from "../assets/img/7.png";
import ios from "../assets/img/8.png";
import manpower from "../assets/img/9.png";
import cloud from "../assets/img/11.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
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

const Data = [
  {
    id: 1,
    image: erp,
    name: "ERP Service",
  },

  {
    id: 2,
    image: product,
    name: "Product Development",
  },
  {
    id: 3,
    image: digital,
    name: "Digital Marketing",
  },

  {
    id: 4,
    image: android,
    name: "Mobile Application",
  },

  {
    id: 5,
    image: manpower,
    name: "HR Solutions",
  },
];

const Services = () => {
  return (
    <div
      className=" p-8"
      // style={{ backgroundImage: `url( ${img1})` }}
    >
      <h1 className="font-sans flex justify-center text-3xl mb-8 text-cyan-50">
        {" "}
        Our Services{" "}
      </h1>
      {/* <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full ">
        {Data.map((arrVal, i) => (
          <div
            className="flex flex-col rounded-2xl  pt-5 pb-2  bg-gradient-to-r hover:bg-gradient-to-l hover:scale-125 duration-500 hover:from-blue-500  from-purple-500 to-pink-500  flex-wrap items-center  w-[95%] h-auto"
            key={arrVal.id}
          >
            <img className="w-24 h-24  mb-4  " src={arrVal.image} />
            <h4 className="font-mono text-2xl text-cyan-50 bottom-0">
              {" "}
              {arrVal.name}{" "}
            </h4>
          </div>
        ))}
      </div> */}
      <div className=" bg-transparent  flex justify-center items-center py-8 px-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation
          navigation={true}
          // scrollbar={{ draggable: true }}
          modules={[Pagination, Navigation]}
        >
          {Data.map((arrVal) => (
            <SwiperSlide className="swiper" key={arrVal.id}>
              <div
                className=" swiper-slide bg-slate-900 flex flex-col pt-5 pb-2  flex-wrap items-center w-full md:w-[70%] h-full md:h-auto"
                key={arrVal.id}
              >
                <img className="w-24 h-24  mb-4  " src={arrVal.image} />
                <h4 className="font-mono text-2xl text-cyan-50 bottom-0">
                  {arrVal.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
