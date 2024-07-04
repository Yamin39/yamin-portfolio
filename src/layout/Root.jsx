import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import heroShape from "../assets/images/hero-shape.webp";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

// AOS.init();

const Root = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const changeNavbarBg = () => {
    if (window.innerWidth > 330) {
      if (window.scrollY > 75) {
        setNavbarBg("bg-white");
      } else {
        setNavbarBg("bg-transparent");
      }
    } else {
      if (window.scrollY > 55) {
        setNavbarBg("bg-white");
      } else {
        setNavbarBg("bg-transparent");
      }
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  useEffect(() => {
    AOS.init({
      once: true, // Only animate elements once
      duration: 800, // Default animation duration
      offset: 50, // Offset (in px) from the original trigger point
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);
  return (
    <div className="font-sora">
      <img className="absolute top-0 right-0 opacity-70" src={heroShape} />
      <div className="relative">
        <div className={`${navbarBg} sticky top-0 z-50 duration-300`}>
          <Navbar></Navbar>
        </div>
        <div className="max-w-[1440px] w-10/12 mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>

      {/* custom cursor */}
      <div className={window.innerWidth >= 768 ? "block" : "hidden"}>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          showSystemCursor={true}
          // showSystemCursor={window.innerWidth >= 768 ? false : true}
          innerStyle={{
            backgroundColor: "black",
          }}
          outerStyle={{
            border: "0.1875rem solid black",
          }}
        />
      </div>

      <Toaster />
    </div>
  );
};

export default Root;
