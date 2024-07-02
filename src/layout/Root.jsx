import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1440px] min-h-screen w-10/12 mx-auto font-sora">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
