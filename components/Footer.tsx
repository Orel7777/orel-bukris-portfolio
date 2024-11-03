import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you prepared <span className="text-purple">to elevate</span> your digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today, and let&apos;s explore how I can support you in reaching your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Feel free to reach out!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Orel Bukris Front-End Developer
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-3 hover:bg-black-300 transition-colors"
            >
              <img src={info.img} alt="social media icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;