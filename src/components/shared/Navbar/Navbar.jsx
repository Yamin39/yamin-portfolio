import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a className="hover:text-primary-color hover:bg-transparent" onClick={() => window.scrollTo(0, 0)}>
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-primary-color hover:bg-transparent" onClick={() => document.getElementById("about").scrollIntoView()}>
          About
        </a>
      </li>
      <li>
        <a className="hover:text-primary-color hover:bg-transparent" onClick={() => document.getElementById("skills").scrollIntoView()}>
          Skills
        </a>
      </li>
      <li>
        <a className="hover:text-primary-color hover:bg-transparent" onClick={() => document.getElementById("projects").scrollIntoView()}>
          Projects
        </a>
      </li>
      <li>
        <a className="hover:text-primary-color hover:bg-transparent" onClick={() => document.getElementById("educations").scrollIntoView()}>
          Education
        </a>
      </li>
      <li>
        <a className="hover:text-primary-color hover:bg-transparent" onClick={() => document.getElementById("contact").scrollIntoView()}>
          Contact
        </a>
      </li>
    </>
  );
  return (
    <nav className="max-w-[1440px] w-10/12 mx-auto mb-8">
      <div className="py-3">
        <div className="navbar px-0 justify-between">
          <div>
            <div className="drawer z-50 md:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  {navLinks}
                </ul>
              </div>
            </div>

            <div>
              <Link to="/" className="flex items-center gap-3">
                <p className="font-semibold text-2xl lg:text-3xl">
                  <span className="text-primary-color">Yamin</span>.
                </p>
              </Link>
            </div>
          </div>
          <div>
            <ul className="nav-container hidden md:flex menu menu-horizontal gap-1 2xl:gap-2 2xl:px-1 font-medium lg:text-base">{navLinks}</ul>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView()}
              className="hire-me btn bg-primary-color text-white hover:bg-primary-color hover:brightness-90 h-auto min-h-0 lg:text-base rounded-3xl py-2 lg:px-5 lg:ml-12"
            >
              Hire me
              <FaArrowUp className="arrow-up rotate-[39deg] duration-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
