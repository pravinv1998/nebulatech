import React from "react";
import whoweare from "../assets/img/whoweare.jpg";
import who from "../assets/img/who.jpg";

const WhoWeAre = () => {
  return (
    <div className="  ">
      <div
        // style={{ backgroundImage: `url( ${who})` }}
        className="flex justify-center items-center  bg-no-repeat bg-cover bg-fixed   w-full h-full  "
      >
        <div
          data-aos="zoom-in"
          className="md:h-[70vh] w-[90vw] grid grid-cols-1 md:grid-cols-2 my-4 rounded-xl bg-blue-500/70 p-4 align-middle place-items-center"
        >
          <div data-aos="fade-right">
            <img src={who} className="rounded-xl md:w-full md:h-[60vh] " />
          </div>

          <div
            data-aos="fade-left"
<<<<<<< HEAD
            className="flex flex-col text-cyan-100 justify-center items-center h-full md:p-8 p-4 "
=======
            className="flex flex-col justify-center items-center h-full md:p-8 p-4 "
>>>>>>> 75857997c6ace8ba861224cb6084a9745fe39906
          >
            <h1 className="text-2xl hover:underline">Who We Are</h1>
            <p className="text-sm mt-2 p-2 overflow-hidden">
              We are a friendly, dynamic, knowledgeable, experienced and
              committed people works in the Geo-Spatial Domain. We put clients
              at the heart of what we do, though our services go far beyond
              that. For over 4 years, we have been nurturing creativity and
              building the skills and processes to be your safe pair of hands to
              take your business to the next level. We have the power of will
              and a hunger for innovation which keeps us moving and growing. We
              see great work as a starting point, not an end. We look forward to
              create opportunities, because the world isn’t stopping and neither
              are we.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
