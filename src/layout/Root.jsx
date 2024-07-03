import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Outlet } from "react-router-dom";
import heroShape from "../assets/images/hero-shape.webp";
import Navbar from "../components/shared/Navbar/Navbar";

// AOS.init();

const Root = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Only animate elements once
      duration: 800, // Default animation duration
      offset: 50, // Offset (in px) from the original trigger point
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);
  return (
    <div className="max-w-[1440px] min-h-screen w-10/12 mx-auto font-sora">
      <img className="absolute top-0 right-0 opacity-70" src={heroShape} />
      <div className="relative">
        <Navbar></Navbar>
        <Outlet></Outlet>
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
          // showSystemCursor={true}
          showSystemCursor={window.innerWidth >= 768 ? false : true}
          innerStyle={{
            backgroundColor: "black",
          }}
          outerStyle={{
            border: "0.1875rem solid black",
          }}
        />
      </div>
    </div>
  );
};

export default Root;
