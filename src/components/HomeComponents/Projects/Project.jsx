import PropTypes from "prop-types";
import { CgWebsite } from "react-icons/cg";
import { MdLiveTv } from "react-icons/md";
import { TbServerBolt } from "react-icons/tb";

const Project = ({ project }) => {
  const { name, img, desc, features, technologies, liveLink, clientCodeLink, serverCodeLink } = project;
  return (
    <div className="flex gap-4 flex-col-reverse p-7 rounded-2xl bg-[#F6F3FC] border-[#D9D9D9] border-[0.05rem] mt-10">
      <div className="md:max-w-1/2 w-full">
        <div>
          <h4 className="text-[#2a1454] text-[1.875rem] font-semibold" data-aos="fade-up" data-aos-delay="100">
            {name}
          </h4>
          <p className="mt-1 leading-[1.7]" data-aos="fade-up" data-aos-delay="100">
            {desc}
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-[#2a1454] text-xl font-semibold" data-aos="fade-up" data-aos-delay="100">
            Core Features
          </h4>
          <ul className="text-sm mt-2 space-y-2 text-gray-700 list-disc ml-4">
            {features.map((feature, i) => (
              <li key={i} data-aos="fade-up" data-aos-delay={i + 1 + "00"}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-[#2a1454] text-xl font-semibold" data-aos="fade-up" data-aos-delay="100">
            Used technologies
          </h4>
          <ul className="flex flex-wrap gap-4 mt-4">
            {technologies.map((technology, i) => (
              <li
                key={i}
                className="border border-primary-color bg-[#8850f711] rounded-full px-6 py-2 text-primary-color font-semibold text-sm"
                data-aos="fade-up"
                data-aos-delay={i + 1 + "00"}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-[#2a1454] text-xl font-semibold" data-aos="fade-up" data-aos-delay="100">
            Links
          </h4>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={liveLink}
              target="_blank"
              className="border border-black rounded-full px-6 py-2 font-semibold text-sm flex justify-center items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <MdLiveTv className="text-lg" />
              <span>Live link</span>
            </a>
            <a
              href={clientCodeLink}
              target="_blank"
              className="border border-black rounded-full px-6 py-2 font-semibold text-sm flex justify-center items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CgWebsite className="text-lg" />
              <span>Code link (Client)</span>
            </a>
            <a
              href={serverCodeLink}
              target="_blank"
              className="border border-black rounded-full px-6 py-2 font-semibold text-sm flex justify-center items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <TbServerBolt className="text-lg" />
              <span>Code link (Server)</span>
            </a>
          </div>
        </div>
      </div>
      <div className="md:max-w-1/2 w-full">
        <img src={img} className="w-full rounded-xl" alt={name} data-aos="fade-up" data-aos-delay="100" />
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
