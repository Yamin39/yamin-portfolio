import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiLanguage } from "react-icons/hi2";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import aboutImg from "../../../assets/images/yamin2.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row gap-20 md:gap-10 items-center justify-around pt-[7.5rem]">
      <div className="sm:max-w-[40%]" data-aos="fade-up" data-aos-delay="100">
        <div
          className="relative max-w-[13rem] sm:max-w-[16.25rem] rounded-tl-[3.125rem] sm:rounded-tl-[6.25rem] rounded-br-[3.125rem] sm:rounded-br-[6.25rem] p-[0.375rem] bg-[#F6F3FC]"
          style={{
            boxShadow: "0 0 0.625rem 0.625rem #F6F3FC",
          }}
        >
          <img
            className="w-full relative z-[2] rounded-tl-[3.75rem] sm:rounded-tl-[5.625rem] rounded-br-[3.75rem] sm:rounded-br-[5.625rem]"
            src={aboutImg}
            alt="aboutImg"
          />
          <div className="absolute z-1 -top-7 -right-7 size-[6.25rem] bg-[#a5f0c0]"></div>
          <div className="absolute z-1 -bottom-7 -left-7 size-[6.25rem] bg-[#a3b9ff]"></div>
          <div className="about-animation absolute -top-7 -left-7 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[2.875rem] h-[3.125rem]" viewBox="0 0 46 50" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0721 46.0553C10.7708 44.8482 6.26742 44.2393 1.89887 43.6815C0.95795 43.5646 0.0843701 44.2172 0.0171615 45.1366C-0.117256 46.0567 0.555224 46.8981 1.42893 47.015C5.66307 47.552 10.0312 48.1267 14.131 49.2887C15.0047 49.5407 15.946 49.0219 16.2148 48.1294C16.4836 47.2375 15.9458 46.308 15.0721 46.0553Z"
                fill="#FF9533"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1087 28.9434C21.1862 21.8791 13.3901 15.7242 6.60202 8.47036C5.99714 7.7929 4.9218 7.7566 4.24972 8.38904C3.57763 9.02214 3.51069 10.0867 4.18277 10.7642C10.9708 18.0388 18.767 24.214 25.6895 31.2991C26.3616 31.9604 27.4366 31.9698 28.1087 31.3192C28.7136 30.6693 28.7808 29.6048 28.1087 28.9434Z"
                fill="#FF9533"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.0824 1.77146C41.284 5.81472 41.4852 9.85798 41.6869 13.9019C41.6869 14.8281 42.4938 15.5432 43.4347 15.4981C44.3756 15.4524 45.0473 14.6641 45.0473 13.7373C44.8457 9.68728 44.6444 5.63796 44.4428 1.58865C44.3756 0.662513 43.569 -0.0478815 42.6281 0.00252491C41.7543 0.0529313 41.0152 0.845995 41.0824 1.77146Z"
                fill="#FF9533"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="md:max-w-[50%] w-full border-l-[1rem] border-l-primary-color px-10 py-5" data-aos="fade-up" data-aos-delay="50">
        <h1 className="text-primary-gradient text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
          About me
        </h1>

        <p className="mt-5 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]" data-aos="fade-up" data-aos-delay="200">
          Hi, I&apos;m Md Mufazzal Hossain Yamin, a <strong>web developer</strong> skilled in <strong>HTML, CSS, JavaScript,</strong> and{" "}
          <strong>modern frameworks</strong>. I&apos;ve completed several personal and collaborative projects, specializing in{" "}
          <strong>responsive designs</strong> and <strong>seamless user experiences</strong>. I&apos;m passionate about building{" "}
          <strong>impactful digital solutions</strong> and continuously improving my skills. Excited to contribute to innovative projects and make a{" "}
          <strong>positive difference</strong> in the tech world.
        </p>

        <ul className="mt-4 space-y-1 sm:space-y-0">
          <li className="flex gap-3 items-center" data-aos="fade-up" data-aos-delay="300">
            <LiaBirthdayCakeSolid className="text-xl sm:text-[1.5625rem] text-primary-color" />
            <span className="text-sm leading-[2] sm:text-[1rem]">December 22, 2006</span>
          </li>
          <li className="flex gap-3 items-center" data-aos="fade-up" data-aos-delay="400">
            <HiOutlineLocationMarker className="text-xl sm:text-[1.5625rem] text-primary-color" />
            <span className="text-sm leading-[2] sm:text-[1rem]">Sylhet Sadar, Sylhet, Bangladesh</span>
          </li>
          <li className="flex gap-3 items-center" data-aos="fade-up" data-aos-delay="500">
            <HiLanguage className="text-xl sm:text-[1.5625rem] text-primary-color" />
            <span className="text-sm leading-[2] sm:text-[1rem]">English, Bengali</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
