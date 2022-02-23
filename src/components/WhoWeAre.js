import React from "react";
import who from "../assets/img/who.jpg";

const WhoWeAre = () => {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url( ${who})` }}
        className=" bg-no-repeat bg-cover bg-fixed grid  md:grid-cols-2 gap-2 grid-cols-1 md:flex bg-gray-200 w-screen h-auto md:items-center md:justify-around  p-10 "
      >
        <div className="flex-1 rounded-md h-full bg-transparent p-4 space-x-4  text-slate-50 flex flex-wrap flex-col  justify-start">
          <h1 className=" font-mono font-bold text-2xl md:text-4xl">
            Who We Are
          </h1>
          <h1 className=" font-mono font-bold text-1xl md:text-2xl">
            We are a friendly, dynamic, knowledgeable, experienced and committed
            people works in the Geo-Spatial Domain. We put clients at the heart
            of what we do, though our services go far beyond that. For over 4
            years, we have been nurturing creativity and building the skills and
            processes to be your safe pair of hands to take your business to the
            next level. We have the power of will and a hunger for innovation
            which keeps us moving and growing. We see great work as a starting
            point, not an end. We look forward to create opportunities, because
            the world isn’t stopping and neither are we.
          </h1>
        </div>
        {/* <div className=" flex-1 flex-wrap flex justify-end">
          <img src={who} className="w-full h-full" alt="who_we_are" />
        </div> */}
      </div>
    </div>
  );
};

export default WhoWeAre;
