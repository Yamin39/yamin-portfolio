import { IoMdArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#2A1454] py-20 text-white text-center">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <p className="font-semibold text-2xl lg:text-4xl mx-auto">Yamin.</p>
          </Link>
        </div>
      </div>

      <ul className="flex flex-wrap gap-6 justify-center mt-8">
        <li>
          <a className="hover:text-primary-color cursor-pointer hover:bg-transparent font-semibold" onClick={() => window.scrollTo(0, 0)}>
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary-color cursor-pointer hover:bg-transparent font-semibold"
            onClick={() => document.getElementById("about").scrollIntoView()}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary-color cursor-pointer hover:bg-transparent font-semibold"
            onClick={() => document.getElementById("skills").scrollIntoView()}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary-color cursor-pointer hover:bg-transparent font-semibold"
            onClick={() => document.getElementById("projects").scrollIntoView()}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary-color cursor-pointer hover:bg-transparent font-semibold"
            onClick={() => document.getElementById("educations").scrollIntoView()}
          >
            Education
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary-color cursor-pointer hover:bg-transparent font-semibold"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Contact
          </a>
        </li>
      </ul>

      <p className="mt-5 text-[#cdbde9]">
        © {new Date().getFullYear()} All Rights Reserved by{" "}
        <a className="font-semibold" href="https://mhyamin.me">
          mhyamin.me
        </a>
      </p>

      <button
        onClick={() => window.scrollTo(0, 0)}
        className="absolute cursor-pointer bottom-5 right-5 border border-primary-color bg-[#8850f711] rounded-full p-3 text-primary-color font-semibold text-sm"
      >
        <IoMdArrowRoundUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
