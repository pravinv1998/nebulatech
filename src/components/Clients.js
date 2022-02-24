import React from "react";
import itsupport from "../assets/img/itsupport.jpg";
import digital_matrix from "../assets/img/digital.jpg";
import infosys from "../assets/img/infosys.png";
import pursho from "../assets/img/pursho.jpg";

const Clients = () => {
  return (
    <div className=" w-full h-full bg-gray-200 flex flex-col flex-wrap items-center justify-around p-8  ">
      <h1 className="font-sans text-3xl mb-8 "> Our Clients </h1>

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
