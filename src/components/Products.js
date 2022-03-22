import React from "react";

import Data from "./Data";
import Footer from "./Footer";

const Products = () => {
  return (
    <div>
      <div className="w-full h-full  bg-transparent flex flex-col items-center justify-around  p-4">
        {" "}
        <h1 className="font-sans text-1xl md:text-3xl mb-8 items-center p-4 rounded-md  text-cyan-100">
          {" "}
          Our Products{" "}
        </h1>
        <div className="grid place-items-center  md:grid-cols-6 grid-cols-1 gap-2 w-full h-full ">
          {Data.map((arrVal, i) => (
            <div
              data-aos={i % 2 === 0 ? "flip-left" : "flip-right"}
              className="flex flex-col grid-cols-2 rounded-2xl  p-16 md:p-6    hover:bg-gradient-to-l hover:scale-110 duration-500 hover:from-blue-500  from-purple-500 to-pink-500  bg-blue-500/70   flex-wrap items-center justify-between space-y-4  w-[90%] h-[100%]"
              key={arrVal.id}
            >
              <div>
                <img
                  className="w-70 h-70 top-0 hover:scale-125 duration-500 rounded-md mb-4  "
                  src={arrVal.image}
                  alt={arrVal.name}
                />
              </div>
              <div className="flex flex-col justify-start items-center ">
                <h4 className="font-mono mt-8 text-center text-1xl md:text-2xl text-cyan-100 bottom-0">
                  {" "}
                  {arrVal.name}{" "}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
