import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-12 pb-6 w-max-[800px] border-t border-white text-center">
      <p className="my-5 text-white inline-flex">
        <FaLocationDot size={20} className="mr-2"/>
        Puchong, Selangor
      </p>
      <br />
      <div className="inline-flex text-white gap-4 text-3xl">
        <a href="https://github.com/kalilim269" target="blank">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/limkali/" target="blank">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
