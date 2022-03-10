import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import background from "./assets/back.png";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tech from "./components/Tech";
import WhoWeAre from "./components/WhoWeAre";

import img2 from "./assets/img/gifimg2.gif";
import img1 from "./assets/img/gifimg1.gif";
import img3 from "./assets/img/gifimg3.webp";
import galaxy1 from "./assets/app/galaxy1.gif";
import galaxy2 from "./assets/app/galaxy2.gif";
import ClientData from "./components/ClientData";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Career from "./components/Career";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import Blog from "./components/Blog";
// import Main from "./components/Main";

import earth from "./assets/earth.gif";
import earth2 from "./assets/earth2.gif";

import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import { SocialMediaIconsReact } from "social-media-icons-react";

function App() {
  // className = "bg-gradient-to-r from-blue-500";
  // className="w-full h-full" style={{ backgroundImage: `url( ${img2})` }}
  // bg-gradient-to-r from-blue-200 to-blue-100

  const Home = () => {
    return (
      <div>
        {/* <Main /> */}
        <LandingPage />
        <Tech />
        <WhoWeAre />
        <Services />
        {/* <ClientData />
        <Clients /> */}
        <Products />
        <AboutUs />
        <Login />
      </div>
    );
  };

  return (
    <div className=" w-screen h-full backdrop-blur-xl  bg-bottom bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary   bg-cover bg-fixed  ">
      <ScrollToTop />
      {/* <Sidebar /> */}
      <Navbar />
      {/* <Navbar /> */}
      <div className="flex flex-col absolute  left-0 top-1/3">
        <div className="flex flex-col fixed left-0 top-1/3 bg-blue-400/50 pl-2 py-2 rounded-md   items-center flex-wrap">
          <div className="mr-4 hover:scale-110 ">
            {" "}
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              icon="github"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgb(27,31,35)"
              url="https://some-website.com/my-social-media-url"
              size="50"
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
              size="50"
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
              size="50"
            />
          </div>
          <div className="mr-4 hover:scale-110">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              icon="whatsapp"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgb(87,230,94)"
              url="https://some-website.com/my-social-media-url"
              size="50"
            />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/career" element={<Career />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contactus" element={<Login heading="Contact Us" />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
