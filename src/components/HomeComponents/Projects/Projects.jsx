import artistryStudio from "../../../assets/images/atistry-studio.png";
import innova from "../../../assets/images/innova.png";
import tenantix from "../../../assets/images/tenantix.png";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      name: "Artistry Studio",
      img: artistryStudio,
      desc: "Artistry Studio is an online platform for browsing, adding, and managing art and craft items, with a focus on painting and drawing categories. It provides a centralized place for artists to showcase and manage their artworks, making it easier for users to explore and purchase unique art pieces.",
      features: [
        "User authentication with Email-Password, Google and GitHub login options.",
        "Ability for users to add, update, and delete their own art items.",
        "Support for both light and dark modes on the homepage.",
      ],
      technologies: ["React", "TailwindCSS", "ExpressJS", "NodeJS", "MongoDB", "Firebase"],
      liveLink: "https://artistry-studio-yamin39.web.app/",
      clientCodeLink: "https://github.com/Yamin39/artistry-studio-client",
      serverCodeLink: "https://github.com/Yamin39/artistry-studio-server",
    },
    {
      name: "Innova",
      img: innova,
      desc: "Innova is a hotel booking platform allowing users to register, log in, and book rooms. Users can also leave reviews and manage their bookings. This project simplifies the process of booking hotel rooms and managing reservations, ensuring a seamless experience for travelers.",
      features: [
        "User authentication with Email-Password and Google login options.",
        "Users can browse and book various types of rooms.",
        "Users can leave reviews, which are showcased on the home page.",
      ],
      technologies: ["React", "TailwindCSS", "ExpressJS", "NodeJS", "MongoDB", "Firebase"],
      liveLink: "https://innova-yamin39.web.app/",
      clientCodeLink: "https://github.com/Yamin39/innova-client",
      serverCodeLink: "https://github.com/Yamin39/innova-server",
    },
    {
      name: "Tenantix",
      img: tenantix,
      desc: "Tenantix is a property management platform designed for landlords and tenants to manage rental properties, payments, and communications seamlessly. This project streamlines the management of rental properties, providing a central platform for communication, payment processing, and property management tasks.",
      features: [
        "Admins can control the agreements in the dashboard.",
        "Secure online rent payment processing.",
        "Admins can add, delete, and update the coupons.",
      ],
      technologies: ["React", "TailwindCSS", "ExpressJS", "NodeJS", "MongoDB", "Firebase"],
      liveLink: "https://tenantix.web.app/",
      clientCodeLink: "https://github.com/Yamin39/tenantix-client",
      serverCodeLink: "https://github.com/Yamin39/tenantix-server",
    },
  ];
  return (
    <div id="projects" className="pt-[4.375rem] sm:pt-[7.5rem]">
      <div className="max-w-[41.25rem] mx-auto text-center">
        <h1 className="text-primary-gradient text-[2.5rem] font-bold" data-aos="fade-up" data-aos-delay="100">
          My Projects
        </h1>
        <p className="text-sm sm:text-base leading-[1.8] sm:leading-[1.7]" data-aos="fade-up" data-aos-delay="150">
          Showcasing diverse web development projects demonstrating skills in coding, design, and problem-solving with real-world applications
        </p>
      </div>

      <div>
        {projects.map((project, i) => (
          <Project key={i} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
