import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { Typewriter } from "react-simple-typewriter";
import img from "../../../assets/images/yamin.jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-6 sm:p-12 md:pr-6 rounded-2xl bg-[#F6F3FC] border-[#D9D9D9] border-[0.05rem]">
        <div>
          <span className="text-sm">Web developer</span>
          <h1 className="text-4xl sm:text-5xl sm:leading-[3.75rem] font-semibold">
            Hello I&apos;m <br />{" "}
            <span className="text-primary-color">
              <Typewriter words={["Mufazzal Hossain Yamin"]} typeSpeed={60} />
            </span>
          </h1>
          <p className="max-w-[43.75rem] sm:text-xl font-light text-[#140C1C] leading-[1.875rem] mt-1">
            I am crafting websites with responsive design, modern UI/UX, and cutting-edge web technologies.
          </p>

          <div className="mt-4 sm:mt-8 flex items-center gap-6">
            <button
              href="#"
              className="hire-me btn bg-primary-color text-white hover:bg-primary-color hover:brightness-90 h-auto min-h-0 lg:text-base rounded-3xl py-2 lg:px-5"
            >
              Resume
              <LuDownload />
            </button>

            <div className="flex items-center gap-5 text-primary-color">
              <a
                href="https://www.linkedin.com/in/mufazzal-hossain-yamin/"
                target="_blank"
                className="text-[1.375rem] p-[0.375rem] border-primary-color border rounded-full hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
              >
                <TiSocialLinkedin />
              </a>
              <a
                href="https://github.com/Yamin39/"
                target="_blank"
                className="p-2 border-primary-color border rounded-full hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.facebook.com/mhyamin39/"
                target="_blank"
                className="text-2xl border-primary-color border rounded-full p-1 hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="https://www.instagram.com/yam_in39/"
                target="_blank"
                className="border-primary-color border rounded-full p-2 hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/Mufazzal_Yamin/"
                target="_blank"
                className="hidden sm:inline text-base p-2 border-primary-color border rounded-full hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
              >
                <RiTwitterXLine />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[30%] hidden md:block">
          <div className="max-w-[12.5rem] rounded-full" style={{ boxShadow: "0 0 0.625rem 0.625rem rgba(128, 128, 128, 0.185)" }}>
            <img className="w-full object-cover rounded-full" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
