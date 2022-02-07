import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tech from "./components/Tech";
import WhoWeAre from "./components/WhoWeAre";

import img2 from "./assets/img/gifimg2.gif";
import ClientData from "./components/ClientData";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Career from "./components/Career";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";

function App() {
  // className = "bg-gradient-to-r from-blue-500";
  // className="w-full h-full" style={{ backgroundImage: `url( ${img2})` }}

  const Home = () => {
    return (
      <>
        {" "}
        <LandingPage />
        <Tech />
        <WhoWeAre />
        <Services />
        <ClientData />
        <Clients />
        <Footer />
      </>
    );
  };
  return (
    <div className="bg-gradient-to-r from-blue-500">
      <Navbar />
      <Routes>
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
