import React from "react";
import itsupport from "../assets/img/itsupport.jpg";
import digital_matrix from "../assets/img/digital.jpg";
import infosys from "../assets/img/infosys.png";
import pursho from "../assets/img/pursho.jpg";

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
    <div className=" w-full h-full bg-transparent flex flex-col flex-wrap items-center justify-around p-8  ">
      <h1 className="font-sans md:text-3xl text-2xl mb-8 text-cyan-50 ">
        {" "}
        Our Clients{" "}
      </h1>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-auto h-auto  ">
        <div className="w-50 h-40">
          <img
            src={infosys}
            alt="infosys"
            className="w-full h-full rounded-xl hover:scale-110 duration-300"
          />
        </div>
        <div className="w-50 h-40">
          <img
            src={itsupport}
            alt="itsupport"
            className="w-full h-full rounded-xl hover:scale-110 duration-300"
          />
        </div>
        <div className="w-50 h-40">
          <img
            src={digital_matrix}
            alt="digital_matrix"
            className="w-full h-full rounded-xl hover:scale-110 duration-300"
          />
        </div>
        <div className="w-50 h-40">
          <img
            src={pursho}
            alt="pursho"
            className="w-full h-full rounded-xl hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
