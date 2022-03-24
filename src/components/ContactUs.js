import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import logo from "../assets/img/NebulaWhite.png";
import ContactUsFooter from "./ContactUsFooter";

const ContactUs = () => {
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
    <div className="w-full h-full grid grid-cols-1 gap-2  ">
      <div className="grid grid-cols-1 p-2  md:grid-cols-2 place-content-center ">
        <div className="grid bg-blue-300/50 grid-cols-1  place-items-center  w-full rounded-md m-4     p-2 ">
          <div
            data-aos="fade-bottom"
            className="w-full text-slate-100 md:w-3/4"
          >
            <Link to="/">
              <img
                className=" h-[70px] mb-4 left-0 object-contain "
                src={logo}
                alt="logo"
              />{" "}
            </Link>
            <div
              data-aos="flip-down"
              className="w-full shadow-lg items-center   rounded-md  bg-slate-50 mt-4 space-y-2 p-2 "
            >
              <h1
                data-aos="fade-right"
                className="flex flex-wrap text-slate-900 space-x-2  text-[1.3em] "
              >
                {" "}
                <PhoneIcon /> <a href="tel:+918668768612">8668768612</a> ,
                <a href="tel:+918097760688">8097760688</a> ,
                <a type="tel" href="tel:+917507316272">
                  7507316272
                </a>
              </h1>
              <h1
                data-aos="fade-left"
                className="flex flex-wrap text-slate-900 space-x-2  text-[1.3em] "
              >
                {" "}
                <EmailIcon /> <h1>hr@nebula-technology.com</h1>
              </h1>
            </div>
            <div
              data-aos="flip-up"
              className=" shadow-xl  w-full rounded-md  bg-slate-50 mt-4 space-y-2 p-2 "
            >
              <h1
                data-aos="fade-right"
                className=" text-slate-900  text-[1.3em] "
              >
                CTS No 349, 3rd floor, Shilavihar Colony,
              </h1>
              <h1
                data-aos="fade-left"
                className=" text-slate-900  text-[1.3em]  "
              >
                Opposite to Durga Mata Mandir,
              </h1>
              <h1
                data-aos="fade-right"
                className=" text-slate-900  text-[1.3em] "
              >
                Near Paud Phata Bus Stop,
              </h1>
              <h1
                data-aos="fade-left"
                className=" text-slate-900  text-[1.3em] "
              >
                Kothrud, Pune 411038
              </h1>
            </div>
          </div>
        </div>
        <div>
          <Login />
        </div>
      </div>

      <ContactUsFooter />
    </div>
  );
};

export default ContactUs;
