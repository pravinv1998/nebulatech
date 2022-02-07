import React from "react";
import itsupport from "../assets/img/itsupport.jpg";
import digital_matrix from "../assets/img/digital.jpg";
import infosys from "../assets/img/infosys.png";
import pursho from "../assets/img/pursho.jpg";

const Clients = () => {
  return (
    <div className=" w-full h-full bg-gray-200 flex flex-col flex-wrap items-center justify-around p-8 mb-8 ">
      <h1 className="font-sans text-3xl mb-8 "> Our Services </h1>

      <div className=" w-full h-full  flex flex-wrap items-center justify-evenly  ">
        <div className="w-50 h-40">
          <img
            src={infosys}
            alt="infosys"
            className="w-full h-full rounded-xl "
          />
        </div>
        <div className="w-50 h-40">
          <img
            src={itsupport}
            alt="itsupport"
            className="w-full h-full rounded-xl "
          />
        </div>
        <div className="w-50 h-40">
          <img
            src={digital_matrix}
            alt="digital_matrix"
            className="w-full h-full rounded-xl "
          />
        </div>
        <div className="w-50 h-40">
          <img
            src={pursho}
            alt="pursho"
            className="w-full h-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
