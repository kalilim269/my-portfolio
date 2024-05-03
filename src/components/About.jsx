import React from "react";
import pandaprofile from "../assets/pandapic.png"

const About = () => {
  return (
    <div className="py-10 text-[#d43939] bg-[#ffffff] h-auto" id="about">
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
                Lorem ipsum dolor sit amet. 33 adipisci perspiciatis aut libero
                iusto ut doloremque deserunt ut asperiores dolorem et accusamus
                incidunt est optio sunt et magnam optio. Qui maiores consequatur
                aut impedit dolor hic illo rerum ea sunt quaerat cum
                exercitationem voluptatem non iusto soluta et deserunt pariatur.
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-primary-color p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                <span>+</span>
              </h3>
              <p><span className="md:text-base text-xs">Projects</span></p>
            </div>

            <div className="bg-primary-color p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                <span>+</span>
              </h3>
              <p><span className="md:text-base text-xs">Experience</span></p>
            </div>

            <div className="bg-primary-color p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                <span>+</span>
              </h3>
              <p><span className="md:text-base text-xs">Education</span></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
