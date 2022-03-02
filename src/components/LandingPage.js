import React from "react";
import back from "../assets/img/back.png";
import { SocialMediaIconsReact } from "social-media-icons-react";

const LandingPage = () => {
  return (
    <div>
      <div className="flex text-sky-50 mt-8 justify-around flex-wrap items-center  w-full h-full bg-transparent">
        <div className="mb-3">
          <h1 className="flex-wrap text-3xl md:text-5xl lg:text-7xl font-mono drop-shadow-2xl  ">
            Nebula Technology
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
        <img
          src={back}
          className="mt-4 w-screen h-full md:w-11/12 md:h-3/5    md:rounded-3xl"
          alt="nebula_tech"
        />
      </div>
    </div>
  );
};

export default LandingPage;
