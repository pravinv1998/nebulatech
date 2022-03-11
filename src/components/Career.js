import React from "react";
import mobile from "../assets/img/17.png";
import tech from "../assets/img/15.jpg";
import Login from "./Login";
import Tech from "./Tech";

const Career = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center p-4 md:p-8 w-full h-full">
        <div className="grid grid-cols-1 w-full md:grid-cols-2  rounded-xl py-8 p-4 bg-blue-300/50">
          <div data-aos="fade-right">
            <img src={tech} className="rounded-xl w-full  " />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center  md:p-8 p-3"
          >
            <h1 className="text-2xl md:text-6xl hover:underline">Career</h1>
            <p className="text-lg  mt-4">
              nebula's career page shares a clear mission statement that
              inspires. It explicitly defines the type of employees they're
              seeking, while also intriguing great applicants with quotes from
              regular fireside chats with well-known innovators.
            </p>
          </div>
        </div>
        <Login />
      </div>
      <Tech />
    </div>
  );
};

export default Career;
