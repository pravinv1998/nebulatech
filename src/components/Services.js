import React from "react";
import img1 from "../assets/img/gifimg1.gif";
import img2 from "../assets/img/gifimg2.gif";

// import data from "./ServiceData/Data";

import erp from "../assets/img/1.png";
import custom from "../assets/img/2.png";
import web from "../assets/img/3.png";
import product from "../assets/img/4.png";
import digital from "../assets/img/5.png";
import desktop from "../assets/img/6.png";
import android from "../assets/img/7.png";
import ios from "../assets/img/8.png";
import manpower from "../assets/img/9.png";
import devops from "../assets/img/10.png";
import cloud from "../assets/img/11.png";

const Data = [
  {
    id: 1,
    image: erp,
    name: "ERP Service",
  },
  {
    id: 2,
    image: custom,
    name: "Custom Software",
  },
  {
    id: 3,
    image: web,
    name: "Web Development",
  },
  {
    id: 4,
    image: product,
    name: "Product Development",
  },
  {
    id: 5,
    image: digital,
    name: "Digital Marketing",
  },
  {
    id: 6,
    image: desktop,
    name: "Desktop Application",
  },
  {
    id: 7,
    image: android,
    name: "Android Application",
  },
  {
    id: 8,
    image: ios,
    name: "IOS Application",
  },
  {
    id: 9,
    image: manpower,
    name: "Manpower Provider",
  },
  {
    id: 9,
    image: devops,
    name: "DevOps",
  },
  {
    id: 9,
    image: cloud,
    name: "Cloud Services",
  },
];

const Services = () => {
  return (
    <div
      className="w-full h-full flex   flex-col bg-primary items-center justify-around  p-4"
      // style={{ backgroundImage: `url( ${img1})` }}
    >
      <h1 className="font-sans text-3xl mb-8 text-cyan-50"> Our Services </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full ">
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
      </div>
    </div>
  );
};

export default Services;
