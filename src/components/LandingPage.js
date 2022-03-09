import React, { useEffect, useState } from "react";
import back from "../assets/img/back.png";
import icon from "../assets/lngico/icon.png";
import background from "../assets/back.png";
import "../App.css";

import { SocialMediaIconsReact } from "social-media-icons-react";

const LandingPage = () => {
  // const technology = ["Web App", "Mobile App", "Serverside App"];
  // const [tech, setTech] = useState("");

  // useEffect(() => {
  //   let i = 0;
  //   while (true) {
  //     i++;
  //     setTech(technology[i]);
  //   }
  // }, []);

  return (
    <div
      // style={{ backgroundImage: `url( ${background})` }}
      className="bg-repeat-x bg-blend-color-burn bg-left-bottom bg-cover    grid place-content-center bg-transparent  grid-cols-1 md:grid-cols-2 text-red-900 pt-2 md:py-8    md:h-screen "
    >
      <div className="flex animate-navafter justify-center  items-center  ">
        <div className="drop-shadow-3xl  ">
          <h1 className=" flex items-center text-4xl  md:text-8xl font-extrabold   ">
            N <img src={icon} className="w-16 h-16 bottom-0" alt="logo" /> bula
          </h1>
          <h1 className=" text-3xl md:text-6xl font-bold bg-red-800 text-slate-50 uppercase p-2 drop-shadow-2xl  ">
            Technology
          </h1>
          <h1 className=" pl-6 text-center text-3xl w-full font-Dynalight text-sky-800 md:text-4xl font-bold italic">
            where creation happens...
          </h1>
          <div className="flex mt-2 items-center flex-wrap ">
            <div className="mr-4 hover:scale-110 ">
              {" "}
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="github"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgb(27,31,35)"
                url="https://some-website.com/my-social-media-url"
                size="40"
              />
            </div>
            <div className="mr-4 hover:scale-110">
              {" "}
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="twitter"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(26,166,233,1)"
                url="https://some-website.com/my-social-media-url"
                size="40"
              />
            </div>
            <div className="mr-4 hover:scale-110">
              {" "}
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="linkedin"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgb(0,119,181)"
                url="https://some-website.com/my-social-media-url"
                size="40"
              />
            </div>
            <div className="mr-4 hover:scale-110">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="whatsapp"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgb(87,230,94)"
                url="https://some-website.com/my-social-media-url"
                size="40"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  logo animate-pulse h-full w-full justify-center  items-center ">
        <img
          src={icon}
          className="mt-4 w-[60%]  animate-company_logo "
          alt="nebula_tech"
        />
      </div>
    </div>
  );
};

export default LandingPage;
