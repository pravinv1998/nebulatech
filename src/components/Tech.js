import React from "react";
import java from "../assets/lngico/java.svg";
import php from "../assets/lngico/php.svg";
import javascript from "../assets/lngico/javascript.svg";
import selenium from "../assets/lngico/selenium.svg";
import servicenow from "../assets/lngico/servicenow.png";
import ui from "../assets/lngico/ui.png";

import MyModal from "./MyModal";

const Tech = () => {
  return (
    <div className="flex items-center justify-center w-screen overflow-hidden">
      <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-4  place-items-center  bg-gradient-to-r from-try to-info h-full w-full p-8 ">
        <div className="flex flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            data-aos="fade-right"
            className=" w-20 animate-nav md:w-24 rounded-xl h-auto hover:scale-125   duration-500"
            src={java}
            alt="java"
          />

          <h1
            data-aos="fade-left"
            className="text-center text-slate-900 font-sans font-semibold p-2 "
          >
            J2EE, Spring Framework, Microservices, Hibernate, Android
          </h1>
        </div>
        <div className="flex flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            data-aos="fade-down"
            className="w-20 md:w-24 h-auto  rounded-xl hover:scale-125  duration-500"
            src={servicenow}
            alt="php"
          />
          <h1
            data-aos="fade-up"
            className="text-center text-slate-900 font-sans font-semibold p-2 "
          >
            J2EE, Spring Framework, Microservices, Hibernate, Android
          </h1>
        </div>

        <div className="flex flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            data-aos="fade-up"
            className="w-20 md:w-24 0 rounded-xl h-auto hover:scale-125  duration-500"
            src={ui}
            alt="javascript"
          />
          <h1
            data-aos="fade-down"
            className="text-center text-slate-900 font-sans font-semibold p-2 "
          >
            HTML5, CSS3, JavaScript, React.Js, Angular.Js, Node.Js
          </h1>
        </div>
        <div className="flex flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            data-aos="fade-left"
            className="w-20 md:w-24  rounded-xl h-auto hover:scale-125  duration-500"
            src={selenium}
            alt="serlenium"
          />
          <h1
            data-aos="fade-right"
            className="text-center text-slate-900 font-sans font-semibold p-2 "
          >
            Manual, Automation, Core Java, Selenium, Cucumber, API Testing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tech;
