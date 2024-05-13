import React, { useEffect } from "react";
import pandaprofile from "../assets/pandapic.png";
import { useLocation } from "react-router-dom";

const About = () => {
  // useEffect(() => {
  //   const aboutSection = document.getElementById("about");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <div className="py-5 text-[#d43939] bg-[#ffffff] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={pandaprofile}
              alt="Panda-using-a-laptop"
              className="object-cover rounded-xl h-[300px]"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-[#d43939] my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="text-black">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm a dedicated Front End Developer skilled in React.js, HTML5,
                CSS3, and JavaScript, focused on creating intuitive web
                interfaces. With a Bachelor's degree in Computer Science from
                the National University of Malaysia, I prioritize high-quality
                code and exceptional user experiences. Committed to staying
                updated with industry trends for project success.
              </p>
            </div>
          </div>

          {/* <div className="flex mt-10 items-center gap-7">
            <div className="bg-primary-color p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>

            <div className="bg-primary-color p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Experience</span>
              </p>
            </div>

            <div className="bg-primary-color p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Education</span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
