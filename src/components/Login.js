import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Login = () => {
  return (
    <div className="flex w-full h-screen flex-col flex-wrap items-center  ">
      <h1 className="font-bold  mt-10 text-2xl font-mono ">Login Page </h1>
      <div className="flex m-4 mt-4 flex-col items-start ">
        <div>
          <h1 className="font-mono text-1xl bottom-0">Email</h1>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="p-2 w-full rounded-md mb-2"
            name="username"
            id="username"
            required
          />
        </div>
        <div>
          <h1 className="font-mono text-1xl bottom-0">Password</h1>
          <input
            type="password"
            placeholder="**********"
            className="p-2 w-full rounded-md mb-2"
            name="password"
            id="password"
            required
          />
        </div>
        <button className="p-2 hover:bg-gradient-to-l hover:from-blue-500 px-4 rounded-md mb-4 mt-2  font-bold bg-slate-50  ">
          Login
        </button>
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
              icon="facebook"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgb(72,103,170)"
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
              icon="mail"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgb(87,230,94)"
              url="https://some-website.com/my-social-media-url"
              size="40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
