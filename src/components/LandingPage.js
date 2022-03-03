import React from "react";
import back from "../assets/img/back.png";
import icon from "../assets/lngico/icon.png";

import { SocialMediaIconsReact } from "social-media-icons-react";

const LandingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-sky-50 py-8 justify-around flex-wrap items-center  w-full h-full bg-transparent">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="flex-wrap text-2xl md:text-4xl lg:text-6xl font-mono drop-shadow-2xl  ">
            Nebula
          </h1>
          <h1 className="flex-wrap text-3xl md:text-5xl lg:text-7xl font-mono drop-shadow-2xl  ">
            Technology
          </h1>
          <h1 className="flex-wrap text-1xl md:text-2xl font-mono italic">
            Where creation happens...
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
      <div className="flex justify-center items-center">
        <img src={icon} className="mt-4 w-[50%] h-[50%]  " alt="nebula_tech" />
      </div>
    </div>
  );
};

export default LandingPage;
