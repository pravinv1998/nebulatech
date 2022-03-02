import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/NebulaWhite.png";

const Footer = () => {
  const PhoneIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    );
  };

  const EmailIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    );
  };
  return (
    <div className="flex flex-col text-cyan-50 bg-primary text-1xl ">
      <div className="flex flex-col md:flex-row items-start  md:items-center justify-around space-y-8 px-10 py-10">
        <div className="w-full md:w-3/4">
          <div className="w-full md:w-3/4">
            <Link to="/">
              <img
                className=" h-[70px] mb-4 left-0 object-contain "
                src={logo}
                alt="logo"
              />{" "}
            </Link>
            <div className="w-full rounded-md backdrop-blur-sm bg-white/30 mt-4 space-y-2 p-4 ">
              <h1 className="flex flex-wrap   text-1xl ">
                {" "}
                <PhoneIcon /> 8668768612, 8097760688, 7507316272
              </h1>
              <h1 className="flex flex-wrap   text-1xl ">
                {" "}
                <EmailIcon /> hr@nebula-technology.com
              </h1>
            </div>
            <div className=" w-full rounded-md backdrop-blur-sm bg-white/30 mt-4 space-y-2 p-4 ">
              <h1 className="   text-1xl ">
                CTS No 349, 3rd floor, Shilavihar Colony,
              </h1>
              <h1 className="   text-1xl  ">Opposite to Durga Mata Mandir,</h1>
              <h1 className="   text-1xl ">Near Paud Phata Bus Stop,</h1>
              <h1 className="   text-1xl ">Kothrud, Pune 411038</h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <iframe
            className=" rounded-md w-full top-0 left-0 relative overflow-hidden cover "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15133.991230574691!2d73.8231593!3d18.5063932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12d81c9f02199c77!2sNebula%20Technology!5e0!3m2!1sen!2sin!4v1646203735297!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="flex mt-4 py-6 px-4 md:px-0 flex-wrap bg-slate-800 items-center justify-around">
        <h1>Copyright © 2018 - All Rights Reserved - Nebula Technology</h1>
        <h1>Developed by Pravin Vargad</h1>
      </div>
    </div>
  );
};

export default Footer;
