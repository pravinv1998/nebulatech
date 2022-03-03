import React from "react";

import college from "../assets/products/college.png";
import construction from "../assets/products/construction.png";
import dairy from "../assets/products/dairy.png";
import showroom from "../assets/products/showroom.png";
import society from "../assets/products/society.png";
import wheel from "../assets/products/wheel.png";

const Data = [
  {
    id: 1,
    image: dairy,
    name: "College ERP",
  },
  {
    id: 2,
    image: wheel,
    name: "Construction ERP Application",
  },
  {
    id: 3,
    image: dairy,
    name: "Milk Bank System",
  },
  {
    id: 4,
    image: wheel,
    name: "Showroom ERP Application",
  },
  {
    id: 5,
    image: dairy,
    name: "Society Management System",
  },
  {
    id: 6,
    image: wheel,
    name: "Garage On Wheel",
  },
];
const Products = () => {
  return (
    <div className="w-full h-full  bg-transparent flex flex-col items-center justify-around  p-4">
      {" "}
      <h1 className="font-sans text-3xl mb-8 items-center p-4 rounded-md backdrop-blur-sm bg-white/30 text-cyan-50">
        {" "}
        Our Products{" "}
      </h1>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full ">
        {Data.map((arrVal, i) => (
          <div
            className="flex flex-col rounded-2xl  p-16   hover:bg-gradient-to-l hover:scale-110 duration-500 hover:from-blue-500  from-purple-500 to-pink-500 backdrop-blur-sm bg-white/40   flex-wrap items-center justify-between  w-[90%] h-[100%]"
            key={arrVal.id}
          >
            <img
              className="w-70 h-70 top-0 hover:scale-125 duration-500  mb-4  "
              src={arrVal.image}
            />
            <h4 className="font-mono text-2xl text-cyan-50 bottom-0">
              {" "}
              {arrVal.name}{" "}
            </h4>
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
