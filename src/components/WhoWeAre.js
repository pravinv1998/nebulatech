import React from "react";
import whoweare from "../assets/img/whoweare.jpg";
import who from "../assets/img/who.jpg";

const WhoWeAre = () => {
  return (
    <div className="">
      <div
        // style={{ backgroundImage: `url( ${who})` }}
        className=" bg-no-repeat bg-cover bg-fixed bg-transparent w-full h-full  "
      >
        <div className=" rounded-md   bg-slate-300/20 p-10 py-16 space-x-4  text-slate-100 flex  flex-col items-start  justify-around">
          <h1 className="item-center justify-center font-mono font-bold text-2xl md:text-4xl">
            Who We Are
          </h1>
          <h1 className="   text-1xl md:text-2xl">
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
      </div>
    </div>
  );
};

export default WhoWeAre;
