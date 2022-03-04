import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Login = () => {
  return (
    // shadow-lg shadow-slate-400/50 backdrop-blur-sm bg-primary/30 rounded-lg
    <div className="flex w-full h-screen  flex-col flex-wrap items-center p-8  ">
      <div className=" grid grid-cols-1  md:grid-cols-2 place-items-center w-full h-full shadow-lg shadow-slate-400/50 backdrop-blur-sm bg-primary/30 rounded-lg">
        <div className=" w-4/5 md:w-2/5 h-4/5 border-b-2 md:border-b-0 md:border-r-2 border-cyan-50 flex flex-col items-center justify-center">
          <h1 className="font-bold text-cyan-50  mt-10 text-2xl font-mono ">
            Login Page{" "}
          </h1>
          <div className="flex m-4 mt-4 flex-col items-start ">
            <div>
              <h1 className="font-mono text-1xl text-cyan-50 bottom-0">
                Email
              </h1>
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
              <h1 className="font-mono text-1xl text-cyan-50 bottom-0">
                Password
              </h1>
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
        <div className="flex flex-col justify-center items-start p-4 text-cyan-50">
          {" "}
          <h1 className="text-1xl md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            reiciendis quia! Non voluptate sapiente, expedita assumenda itaque
            debitis porro accusamus exercitationem. Voluptates perspiciatis ab,
            nobis consectetur saepe doloribus quidem enim!
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
