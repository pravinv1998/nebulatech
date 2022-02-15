import React from "react";

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
      <div className="flex  flex-wrap items-start justify-around pt-4 p-4">
        <div>
          <h1 className=" font-mono font-bold text-1xl ">Industries</h1>
          <h1 className=" font-mono  text-1xl ">Consultancy</h1>
          <h1 className=" font-mono  text-1xl ">IT</h1>
          <h1 className=" font-mono  text-1xl ">Software Development</h1>
        </div>
        <div>
          <h1 className=" font-mono font-bold text-1xl ">Products</h1>
          <h1 className=" font-mono  text-1xl ">Web Design And Development</h1>
          <h1 className=" font-mono  text-1xl ">Mobile Apps</h1>
          <h1 className=" font-mono  text-1xl ">Desktop Apps</h1>
          <h1 className=" font-mono  text-1xl ">Cloud</h1>
        </div>
        <div>
          <h1 className=" font-mono font-bold text-1xl ">Nebula Technology</h1>
          <h1 className=" font-mono  text-1xl ">
            CTS No 349, 3rd floor, Shilavihar Colony,
          </h1>
          <h1 className=" font-mono  text-1xl ">
            Opposite to Durga Mata Mandir,
          </h1>
          <h1 className=" font-mono  text-1xl ">Near Paud Phata Bus Stop,</h1>
          <h1 className=" font-mono  text-1xl ">Kothrud, Pune 411038</h1>
          <h1 className="flex flex-wrap font-mono  text-1xl ">
            {" "}
            <PhoneIcon /> 8668768612, 8097760688, 7507316272
          </h1>
          <h1 className="flex flex-wrap font-mono  text-1xl ">
            {" "}
            <EmailIcon /> support_nebula@gmail.com
          </h1>
        </div>
      </div>
      <div className="flex mt-4 p-2 flex-wrap items-center justify-around">
        <h1>Copyright © 2018 - All Rights Reserved - Nebula Technology</h1>
        <h1>Developed by Pravin Vargad</h1>
      </div>
    </div>
  );
};

export default Footer;
