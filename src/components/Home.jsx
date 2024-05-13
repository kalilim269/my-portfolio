import React, { useEffect } from "react";
import profilepic from "../assets/profilepic2.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { MdEmail } from "react-icons/md";
import myresume from "../assets/my-resume.pdf"
import Navbar from "./Navbar";

const Home = () => {

  // useEffect(() => {
  //   const homeSection = document.getElementById('home');
  //   if (homeSection) {
  //     homeSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);

  return (
      <div
        className="my-7 sm:my-0 max-w-[1200px] h-[80vh] h-auto mx-auto py-[2em] flex flex-col-reverse sm:flex-row justify-center align-center"
        id="home"
      >
        <div className="flex-col m-auto w-[500px] md:pl-0 pl-8">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold text-gray-200">
            Hi! I am Ka Li
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
            <TypeAnimation
              sequence={["Software Engineer", 1000, "Frontend Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-primary-color"
            />
          </h1>
          <div>
            <p className="md:text-3xl sm:text-2xl text-lg font-bold text-white">
              with 2+ years experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-white">
            <a href="https://www.linkedin.com/in/limkali/" target="blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/kalilim269" target="blank">
              <AiFillGithub />
            </a>
            <a href="mailto:limkali99@gmail.com">
              <MdEmail />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                    from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                    group-hover:-inset-1 group-hover:duration-200"
            ></div>
            <a
              href={myresume}
              target="blank"
              title="View CV"
              role="button"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                    font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              View CV
            </a>
          </div>
        </div>
        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
  );
};

export default Home;
