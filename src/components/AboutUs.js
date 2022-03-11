import React from "react";
import erp from "../assets/img/1.png";

import product from "../assets/img/4.png";
import digital from "../assets/img/5.png";

import android from "../assets/img/7.png";

import manpower from "../assets/img/9.png";

import mobile from "../assets/img/17.png";
import tech from "../assets/img/15.jpg";

import ClientData from "./ClientData";
import Clients from "./Clients";
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
    image: manpower,
    name: "HR Solutions",
  },

  {
    id: 4,
    image: android,
    name: "Mobile Application",
  },

  {
    id: 5,
    image: digital,
    name: "Digital Marketing",
  },
];

const AboutUs = () => {
  return (
    <div className="w-screen h-full ">
      <div
        // style={{ backgroundImage: `url( ${about})` }}
        className="w-screen h-1/6 md:h-1/5 bg-cover no-repeat bg-fixed bg-left flex justify-center items-center "
      >
        <h1 className="text-2xl md:text-4xl text-center justify-center text-cyan-100 ">
          About Us
        </h1>
      </div>
      <div id="blogs" className="p-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">
          {Data.map((data, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
              className=" hover:scale-110 flex flex-col justify-between rounded-xl   bg-pink-400 p-8  "
            >
              <div className="flex justify-center items-center">
                <img
                  className="rounded-xl  w-16 h-16 fill-slate-900 "
                  src={data.image}
                />
              </div>

              <div className="bottom-0">
                <h1 className="text-2xl mt-6 text-slate-900 font-bold">
                  {" "}
                  {data.name}{" "}
                </h1>

                <p className="mt-3 text-slate-900 text-sm">
                  Learn HTML in Hindi Free SUDO POWER YouTube Channel. Keep
                  Learning, Keep Working hard!!!
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 rounded-xl p-8 bg-blue-400/50">
          <div data-aos="fade-right">
            <img src={tech} className="rounded-xl" />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center align-middle md:p-8 p-3"
          >
            <h1 className="text-2xl hover:underline">HR Solution</h1>
            <p className="text-lg mt-4">
              We have many kinds of HR services nowadays, from contingency
              search, retained search and Recruitment Process Outsourcing (RPO)
              services. Most HR service provider's main roles are to help
              businesses to run a hiring process more effectively, improve their
              talent pool by acquiring the skilled candidates.
            </p>
          </div>
        </div>

        <div className="  grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 rounded-xl p-8 bg-blue-400/50">
          <div>
            <img data-aos="fade-right" src={mobile} className="rounded-xl" />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center align-middle md:p-8 p-3"
          >
            <h1 className="text-2xl hover:underline">Google SEO Management</h1>
            <p className="text-lg mt-4">
              SEO, or search engine optimization, is the practice of including
              content on your site that has the potential to improve your site's
              visibility to search engines and their users.
            </p>
          </div>
        </div>
      </div>
      <ClientData />
      <Clients />
    </div>
  );
};

export default AboutUs;
