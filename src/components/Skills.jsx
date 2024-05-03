import React from "react";

const About = () => {
  return (
    <div className="py-10 text-[#d43939] bg-[#ffffff] h-auto" id="skill">
      <div className="flex justify-center pb-5">
        <hr className="border-[#d43939] border-2 w-4/5" />
      </div>

      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="p-2">
            <div className="text-black my-3">
              <h3 className="text-4xl font-semibold mb-5">
                My <span className="text-[#d43939]">Skills</span>
              </h3>

              <div className="flex flex-col mx-auto w-[300px] md:w-[1000px]">
                <div className="flex flex-row py-3 text-lg text-[#d43939]">
                    <div className="w-1/2">Programming Languages</div>
                    <div className="w-1/2">row2</div>
                </div>
                <div className="flex flex-row py-3 text-lg text-[#d43939]">
                    <div className="w-1/2">Development Tools</div>
                    <div className="w-1/2">row2</div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
