import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Login = () => {
  return (
    // shadow-lg shadow-slate-400/50 backdrop-blur-sm bg-primary/30 rounded-lg
    <div className="flex w-full h-full  flex-col flex-wrap items-center p-8  ">
      <div className=" grid grid-cols-1 p-4 md:grid-cols-1 place-items-center w-full h-full   bg-transparent ">
        <div className=" w-full  flex flex-col items-center justify-center">
          <h1 className="font-bold text-slate-900  mt-10 text-2xl font-mono ">
            Send Message
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-4 pt-4  ">
            <div data-aos="fade-right">
              <h1 className="font-mono text-1xl text-slate-900 bottom-0">
                First Name
              </h1>
              <input
                type="text"
                placeholder="first name...."
                className="p-4 text-1xl w-full md:w-[30vw] rounded-md mb-2"
                name="username"
                id="username"
                required
              />
            </div>
            <div data-aos="fade-left">
              <h1 className="font-mono text-1xl text-slate-900 bottom-0">
                Last Name
              </h1>
              <input
                type="text"
                placeholder="last name...."
                className="p-4 text-1xl w-full md:w-[30vw] rounded-md mb-2"
                name="username"
                id="username"
                required
              />
            </div>
            <div data-aos="fade-right">
              <h1 className="font-mono text-1xl text-slate-900 bottom-0">
                Email
              </h1>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="p-4 text-1xl w-full rounded-md mb-2"
                name="username"
                id="username"
                required
              />
            </div>
            <div data-aos="fade-left">
              <h1 className="font-mono text-1xl text-slate-900 bottom-0">
                Country
              </h1>
              <input
                type="text"
                placeholder="place..."
                className="p-4 text-1xl w-full rounded-md mb-2"
                name="password"
                id="password"
                required
              />
            </div>
            <div data-aos="fade-right">
              <h1 className="font-mono text-1xl text-slate-900 bottom-0">
                Message
              </h1>
              <textarea
                type="text"
                placeholder="share your view..."
                className="p-4 text-1xl w-full rounded-md mb-2"
                name="password"
                id="password"
                required
              />
              <button
                data-aos="fade-left"
                className="p-4 w-full text-1xl hover:bg-gradient-to-l hover:from-blue-500 px-4 rounded-md mb-4 mt-2  font-bold bg-slate-50  "
              >
                SEND
              </button>
              <div
                data-aos="fade-up"
                className="flex mt-2 items-center flex-wrap "
              >
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
        </div>
        {/* <div className="flex  w-full h-full rounded-md flex-col justify-center items-start p-4 text-slate-900">
          {" "}
          <h1 className="text-xl md:text-1xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            reiciendis quia! Non voluptate sapiente, expedita assumenda itaque
            debitis porro accusamus exercitationem. Voluptates perspiciatis ab,
            nobis consectetur saepe doloribus quidem enim!
          </h1>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default Login;
