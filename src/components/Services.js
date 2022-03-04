import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../App.css";

import img1 from "../assets/img/gifimg1.gif";
import img2 from "../assets/img/gifimg2.gif";

// import data from "./ServiceData/Data";
import galaxy1 from "../assets/app/galaxy1.gif";

import erp from "../assets/img/11.jpg";
import custom from "../assets/img/2.png";
import web from "../assets/img/3.png";
import product from "../assets/img/4.png";
import digital from "../assets/img/15.jpg";
import desktop from "../assets/img/6.png";
import android from "../assets/img/17.png";
import ios from "../assets/img/8.png";
import manpower from "../assets/img/19.jpg";
import cloud from "../assets/img/11.png";

import college from "../assets/products/college.png";
import construction from "../assets/products/construction.png";
import dairy from "../assets/products/dairy.png";
import showroom from "../assets/products/showroom.png";
import society from "../assets/products/society.png";
import wheel from "../assets/products/wheel.png";

import React, { useRef, useState } from "react";

const Data = [
  {
    id: 1,
    image: erp,
    name: "ERP Service",
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
      className=" md:p-10 bg-slate-300/20 text-2xl"
      // style={{ backgroundImage: `url( ${img1})` }}
    >
      <h1 className="font-sans flex justify-center text-3xl mb-8 text-cyan-100">
        {" "}
        Our Services{" "}
      </h1>

      <Carousel
        infiniteLoop={true}
        showArrows={true}
        interval={3000}
        autoPlay={true}
      >
        {Data.map((data, i) => (
          <div className="image " key={i}>
            <img src={data.image} />
            <p className="text-slate-100 "> {data.name} </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
