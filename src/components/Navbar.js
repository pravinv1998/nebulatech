import { Fragment, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo from "../assets/img/NebulaWhite.png";

import { Menu, Transition } from "@headlessui/react";
import Example from "../Example";
import Sidebar from "../components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ShowSidebar = () => {
    return (
      <svg
        onClick={() => setIsOpen(true)}
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 text-sky-50 transation_text "
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          ch1p-rule="evenodd"
        />
      </svg>
    );
  };

  const HideSidebar = () => {
    return (
      <svg
        onClick={() => setIsOpen(false)}
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 text-sky-50 transation_text "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  };

  const SidebarShow = () => {
    return <> {isOpen ? <div className="left">sidebar</div> : null}</>;
  };

  return (
    <div className="sticky top-0 z-50 animate-nav flex flex-wrap shadow-lg bg-gradient-to-r from-try to-info shadow-slate-400/20  w-full h-full  px-1 md:px-8   items-center justify-between ">
      <div className="flex text-sky-50 py-1 items-center justify-start text-1xl  flex-1 flex-wrap ">
        <Link to="/">
          <img
            className=" z-100 h-[70px] animate-navafter "
            src={logo}
            alt="logo"
          />{" "}
        </Link>
        {/* <Link to="career" className="mx-4 transation_text">
            Career
          </Link>
          <Link to="/contactus" className="mx-4 transation_text">
            Contact Us
          </Link>
          <Link to="aboutus" className="mx-4 transation_text">
            AboutUS ///////////////////
          </Link> */}
      </div>
      <div className=" flex  justify-around pr-2  ">
        {/* <Link to="/">
            <button
              type="button"
              className=" transation_text mr-3 text-cyan-50 bg-gradient-to-r from-blue-500 hover:bg-gradient-to-l hover:from-blue-500 p-3 rounded-md font-sans"
            >
              Home
            </button>{" "}
          </Link> */}
        {/* <Link to="contactus">
          <button
            type="button"
            className=" transation_text animate-navafter text-cyan-50 bg-transparent   from-blue-500 hover:bg-gradient-to-l hover:from-blue-500 p-3 rounded-md "
          >
            Contact Us
          </button>{" "}
        </Link> */}

        <Sidebar />
        {/* <div>{isOpen ? <HideSidebar /> : <ShowSidebar />}</div> */}
      </div>
    </div>
  );
}

export default Navbar;
