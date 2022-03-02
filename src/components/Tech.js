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
    <div className="flex  overflow-x-auto flex-wrap   items-center justify-around  mt-10 bg-transparent p-8 ">
      <img
        className=" w-20 md:w-24 h-auto hover:scale-125   duration-300"
        src={java}
        onClick={(e) => (
          <MyModal
            name={"Java"}
            data={"J2EE, Spring Framework, Microservices, Hibernate, Android"}
          />
        )}
        alt="java"
      />
      <img
        className="w-20 md:w-24 h-auto hover:scale-125  duration-300"
        src={servicenow}
        onClick={(e) => (
          <MyModal
            name={"Service Now"}
            data={"Larvel Framework, Codeignite Framework"}
          />
        )}
        alt="php"
      />
      <img
        className="w-20 md:w-24 h-auto hover:scale-125  duration-300"
        src={ui}
        onClick={(e) => (
          <MyModal
            name={"JavaScript"}
            data={"ReactJs, Angular, React Native"}
          />
        )}
        alt="javascript"
      />
      <img
        className="w-20 md:w-24 h-auto hover:scale-125  duration-300"
        src={selenium}
        onClick={(e) => (
          <MyModal
            name={"Selenium"}
            data={
              "Selenium is an open-source umbrella project for a range of tools and libraries aimed at supporting web browser automation.Larvel Framework, Codeignite Framework"
            }
          />
        )}
        alt="serlenium"
      />
    </div>
  );
};

export default Tech;
