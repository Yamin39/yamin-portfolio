import { Outlet } from "react-router-dom";
import heroShape from "../assets/images/hero-shape.webp";
import Navbar from "../components/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1440px] min-h-screen w-10/12 mx-auto font-sora">
      <img className="absolute top-0 right-0 opacity-70" src={heroShape} />
      <div className="relative">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
