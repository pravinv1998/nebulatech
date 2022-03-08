import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Login = () => {
  return (
    // shadow-lg shadow-slate-400/50 backdrop-blur-sm bg-primary/30 rounded-lg
    <div className="flex w-full h-full  py-4 flex-col flex-wrap items-center   ">
      <div className="  grid grid-cols-1  place-items-center w-full h-full    ">
        <div className=" w-full  flex flex-col items-center justify-center">
          <div className="bg-blue-200/30 shadow-lg shadow-slate-400/40 grid grid-cols-1 rounded-md  gap-4 p-8  ">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-center text-slate-900   text-2xl font-mono ">
                Contact Us
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-2 ">
              <div data-aos="fade-right">
                <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                  First Name
                </h1>
                <input
                  type="text"
                  placeholder="first name...."
                  className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                  name="username"
                  id="username"
                  required
                />
              </div>
              <div data-aos="fade-left">
                <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                  Last Name
                </h1>
                <input
                  type="text"
                  placeholder="last name...."
                  className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                  name="username"
                  id="username"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-2 ">
              <div data-aos="fade-right">
                <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                  Email
                </h1>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                  name="username"
                  id="username"
                  required
                />
              </div>
              <div data-aos="fade-left">
                <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                  Contact No
                </h1>
                <input
                  type="text"
                  placeholder="contact info..."
                  className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                  name="password"
                  id="password"
                  required
                />
              </div>
            </div>
            <div data-aos="fade-right">
              <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
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
            </div>
            <div className="flex items-center justify-center ">
              <button
                data-aos="fade-left"
                className="p-4  text-1xl hover:bg-gradient-to-l hover:from-blue-500 md:px-6 rounded-md    font-bold bg-slate-50  "
              >
                SEND
              </button>
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
