import React from "react";

import college from "../assets/products/college.png";
import construction from "../assets/products/construction.png";
import dairy from "../assets/products/dairy.png";
import showroom from "../assets/products/showroom.png";
import society from "../assets/products/society.png";
import wheel from "../assets/products/wheel.png";

import Data from "./Data";

const Products = () => {
  return (
    <div className="w-full h-full  bg-transparent flex flex-col items-center justify-around  p-4">
      {" "}
      <h1 className="font-sans text-1xl md:text-3xl mb-8 items-center p-4 rounded-md  text-cyan-100">
        {" "}
        Our Products{" "}
      </h1>
      <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 w-full h-full ">
        {Data.map((arrVal, i) => (
          <div
            data-aos={i % 2 === 0 ? "flip-left" : "flip-right"}
            className="flex flex-col grid-cols-2 rounded-2xl  p-16    hover:bg-gradient-to-l hover:scale-110 duration-500 hover:from-blue-500  from-purple-500 to-pink-500  bg-blue-500/70   flex-wrap items-center justify-center space-y-4  w-[90%] h-[100%]"
            key={arrVal.id}
          >
            <div>
              <img
                className="w-70 h-70 top-0 hover:scale-125 duration-500 rounded-md mb-4  "
                src={arrVal.image}
              />
            </div>
            <div>
              <h4 className="font-mono mt-8 text-center text-1xl md:text-2xl text-cyan-100 bottom-0">
                {" "}
                {arrVal.name}{" "}
              </h4>
            </div>
          </div>
          // <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          //   <a href="#">
          //     <img class="rounded-t-lg" src={arrVal.image} alt={arrVal.name} />
          //   </a>
          //   <div class="p-5">
          //     <a href="#">
          //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          //         {arrVal.name}
          //       </h5>
          //     </a>
          //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          //       Here are the biggest enterprise technology acquisitions of 2021
          //       so far, in reverse chronological order.
          //     </p>
          //     <a
          //       href="#"
          //       class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          //     >
          //       Read more
          //       <svg
          //         class="ml-2 -mr-1 w-4 h-4"
          //         fill="currentColor"
          //         viewBox="0 0 20 20"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <path
          //           fill-rule="evenodd"
          //           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          //           clip-rule="evenodd"
          //         ></path>
          //       </svg>
          //     </a>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
