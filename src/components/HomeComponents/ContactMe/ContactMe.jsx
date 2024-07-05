import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdContentCopy, MdOutlinePhone } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_cmz0kzd", "template_all8fjc", form.current, {
        publicKey: "UnP7mVj-PZo540gX4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error?.text);
          toast.error("Failed, Please try again!");
          setLoading(false);
        }
      );
  };
  return (
    <div id="contact" className="mb-10 pt-[4.375rem] sm:pt-[7.5rem]">
      <div className="max-w-[41.25rem] mx-auto text-center">
        <h1 className="text-primary-gradient text-[2.5rem] font-bold" data-aos="fade-up" data-aos-delay="100">
          Contact me
        </h1>
        <p className="text-sm sm:text-base leading-[1.8] sm:leading-[1.7]" data-aos="fade-up" data-aos-delay="150">
          I&apos;m currently available to take on new projects, also available to be hired! so feel free to send me a message.
        </p>
      </div>

      <div className="mt-10 flex flex-col-reverse md:flex-row gap-4 md:gap-6 justify-between">
        <div className="md:w-[48%]">
          <form ref={form} onSubmit={sendEmail} className="card-body p-0">
            <p className="text-2xl font-semibold w-max mb-4" data-aos="fade-up" data-aos-delay="100">
              Get in touch
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow form-control" data-aos="fade-up" data-aos-delay="100">
                <label htmlFor="firstName" className="label">
                  <span className="label-text text-base font-semibold">First name</span>
                </label>
                {/* first name */}
                <input name="firstName" id="firstName" type="text" placeholder="First name" className="input py-7 input-bordered rounded-2xl" required />
              </div>

              <div className="flex-grow form-control" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="lastName" className="label">
                  <span className="label-text text-base font-semibold">Last name</span>
                </label>
                {/* lastName */}
                <input name="lastName" id="lastName" type="text" placeholder="Last name" className="input py-7 input-bordered rounded-2xl" required />
              </div>
            </div>

            <div className="flex-grow form-control" data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="email" className="label">
                <span className="label-text text-base font-semibold">Email</span>
              </label>
              {/* email */}
              <input name="email" id="email" type="email" placeholder="you@company.com" className="input py-7 input-bordered rounded-2xl" required />
            </div>

            <div className="flex-grow form-control" data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="phoneNumber" className="label">
                <span className="label-text text-base font-semibold">Phone number</span>
              </label>
              {/* phoneNumber */}
              <input
                name="phoneNumber"
                id="phoneNumber"
                type="number"
                placeholder="+1 (555) 000-0000"
                className="input input-bordered py-7 rounded-2xl"
                required
              />
            </div>

            <div className="flex-grow form-control" data-aos="fade-up" data-aos-delay="500">
              <label htmlFor="message" className="label">
                <span className="label-text text-base font-semibold">Message</span>
              </label>
              {/* message */}
              <textarea
                name="message"
                id="message"
                rows={5}
                className="textarea textarea-bordered rounded-2xl"
                placeholder="Leave a message"
                required
              ></textarea>
            </div>

            <div className="form-control mt-2">
              <button
                className="btn bg-primary-color text-white hover:bg-primary-color hover:brightness-90 h-auto min-h-0 text-base rounded-xl py-3 xl:px-7 mt-4"
                disabled={loading}
              >
                <span className={`loading loading-spinner ${loading ? "block" : "hidden"}`}></span>
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-[40%]">
          <div>
            <p className="text-2xl font-semibold w-max" data-aos="fade-up" data-aos-delay="100">
              Get connected
            </p>

            <div className="flex items-center gap-5 text-primary-color mt-5">
              <a
                href="https://www.linkedin.com/in/mufazzal-hossain-yamin/"
                target="_blank"
                className="text-[1.375rem] p-[0.375rem] border-primary-color border rounded-full hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
                data-aos="fade-up"
                data-aos-once={true}
                data-aos-delay="100"
              >
                <TiSocialLinkedin />
              </a>
              <a
                href="https://github.com/Yamin39/"
                target="_blank"
                className="p-2 border-primary-color border rounded-full hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
                data-aos="fade-down"
                data-aos-once={true}
                data-aos-delay="200"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.facebook.com/mhyamin39/"
                target="_blank"
                className="text-2xl border-primary-color border rounded-full p-1 hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
                data-aos="fade-up"
                data-aos-once={true}
                data-aos-delay="300"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="https://www.instagram.com/yam_in39/"
                target="_blank"
                className="border-primary-color border rounded-full p-2 hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
                data-aos="fade-down"
                data-aos-once={true}
                data-aos-delay="400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/Mufazzal_Yamin/"
                target="_blank"
                className="hidden sm:inline text-base p-2 border-primary-color border rounded-full hover:bg-primary-color hover:text-white hover:shadow-xl active:scale-90 duration-300"
                data-aos="fade-up"
                data-aos-once={true}
                data-aos-delay="500"
              >
                <RiTwitterXLine />
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-16 mb-10 md:mb-0">
            <p className="text-2xl font-semibold w-max" data-aos="fade-up" data-aos-delay="100">
              Call me
            </p>

            <ul className="mt-4 space-y-1 sm:space-y-2">
              <li className="flex gap-3 items-center" data-aos="fade-up" data-aos-delay="300">
                <HiOutlineMailOpen className="text-xl sm:text-[1.5625rem] text-primary-color" />
                <a href="mailto:mdmufazzalhossainyamin5010@gmail.com" className="text-sm leading-[2] sm:text-[1rem]">
                  mdmufazzalhossainyamin5010@gmail.com
                </a>
                <MdContentCopy
                  className="opacity-50 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("mdmufazzalhossainyamin5010@gmail.com");
                    toast.success("Email copied to the clipboard", {
                      position: "bottom-right",
                    });
                  }}
                />
              </li>
              <li className="flex gap-3 items-center" data-aos="fade-up" data-aos-delay="400">
                <MdOutlinePhone className="text-xl sm:text-[1.5625rem] text-primary-color" />
                <a href="tel:+8801626639229" className="text-sm leading-[2] sm:text-[1rem]">
                  +8801626639229
                </a>
                <MdContentCopy
                  className="opacity-50 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("+8801626639229");
                    toast.success("Phone number copied to the clipboard", {
                      position: "bottom-right",
                    });
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
