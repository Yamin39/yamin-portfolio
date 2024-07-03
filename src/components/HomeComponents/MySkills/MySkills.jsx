import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const MySkills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#E54C21]",
      aosDelay: "100",
    },
    {
      name: "CSS",
      icon: <IoLogoCss3 className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#254BDD]",
      aosDelay: "200",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#16B6B0]",
      aosDelay: "300",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#e6d346]",
      aosDelay: "400",
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#f47811]",
      aosDelay: "500",
    },
    {
      name: "ReactJS",
      icon: <FaReact className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#58C4DC]",
      aosDelay: "600",
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#6DA55F]",
      aosDelay: "700",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#B0C1D4]",
      aosDelay: "800",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-8xl duration-500" />,
      hoverColor: "hover:text-[#00684A]",
      aosDelay: "900",
    },
  ];

  const tools = [
    "Git",
    "Bootstrap",
    "DaisyUI",
    "MUI",
    "Swiper",
    "Flowbite",
    "Framer",
    "NPM",
    "EmailJS",
    "React Hook Form",
    "React Router",
    "TanStack Query",
    "Jwt",
    "Figma",
    "Canva",
    "Photoshop",
  ];
  return (
    <div id="skills" className="pt-[4.375rem] sm:pt-[7.5rem]">
      <div className="max-w-[41.25rem] mx-auto text-center">
        <h1 className="text-primary-gradient text-[2.5rem] font-bold" data-aos="fade-up" data-aos-delay="100">
          My Skills
        </h1>
        <p className="text-sm sm:text-base leading-[1.8] sm:leading-[1.7]" data-aos="fade-up" data-aos-delay="150">
          Proficient in modern technologies, frameworks and tools. Skilled in responsive design, problem-solving, and creating seamless user experiences.
        </p>
      </div>

      {/* <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-10"> */}
      <div className="max-w-[1382px] mx-auto flex flex-wrap justify-center items-center gap-8 mt-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`min-w-[11.0625rem] fit flex flex-col justify-center items-center cursor-pointer ${skill.hoverColor} duration-500 p-6 sm:p-10 rounded-2xl bg-[#F6F3FC] border-[#D9D9D9] border-[0.05rem] sm:tooltip`}
            data-tip={skill.name}
            data-aos="fade-up"
            data-aos-delay={skill.aosDelay}
          >
            {skill.icon}
            <p className="text-xl font-medium mt-2 text-center block sm:hidden duration-500" style={{ color: "black" }}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-9 space-y-4">
        <div>
          <p className="text-2xl font-semibold w-max" data-aos="fade-up" data-aos-delay="100">
            Other tools i use
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-4">
            {tools.map((tool, i) => (
              <li
                key={i}
                className="border border-primary-color bg-[#8850f711] rounded-full px-6 py-2 text-primary-color font-semibold text-sm"
                data-aos="fade-up"
                data-aos-delay={i + "00"}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
