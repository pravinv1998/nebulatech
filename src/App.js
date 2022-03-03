import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";

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

function App() {
  // className = "bg-gradient-to-r from-blue-500";
  // className="w-full h-full" style={{ backgroundImage: `url( ${img2})` }}

  const Home = () => {
    return (
      <div>
        {" "}
        <LandingPage />
        <Tech />
        <WhoWeAre />
        <Services />
        <ClientData />
        <Clients />
      </div>
    );
  };
  return (
    <div
      className="w-screen h-full bg-no-repeat bg-cover bg-fixed bg-left "
      style={{ backgroundImage: `url( ${galaxy2})` }}
    >
      {/* <Sidebar /> */}
      <Navbar />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
