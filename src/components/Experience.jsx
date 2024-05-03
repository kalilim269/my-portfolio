import React from "react";

const Experience = () => {
  return (
    <div className="py-10 bg-[#ffffff]" id="experience">
      <h2 className="mb-8 text-4xl text-black text-center">
        My <span className="text-[#d43939]">Experience</span>
      </h2>

      <div className="mb-[20px] text-white relative bg-[#d43939] p-6 rounded-3xl max-w-[400px] md:max-w-[600px] sm:max-x-[600px] mx-auto">
        <p className="text-2xl py-1">Lenovo PCCW Solutions</p>
        <p className="text-red-200 py-2">(May 2023 - Present)</p>
        <p className="text-white">
        <ul className="list-disc pl-4">
            <li>Involved in the design and the front-end development for an internal claim management system using Figma and React</li>
            <li>Developed an online eForm designed to facilitate communication of project status between Project Manager and Stakeholders using Power Apps</li>
            <li>Collaborated effectively with multiple associates in script development using Katalon for a streamlined automation testing</li>
          </ul>
        </p>
      </div>

      <div className="h-[54px] w-[2px] bg-slate-400 relative my-4 mx-auto"></div>

      <div className="mb-[20px] text-white relative bg-[#d43939] p-6 rounded-3xl max-w-[400px] md:max-w-[600px] sm:max-x-[600px] mx-auto">
        <p className="text-2xl py-1">Top Glove</p>
        <p className="text-red-200 py-2">(Sep 2022 - Jan 2023)</p>
        <p className="text-white">
          <ul className="list-disc pl-4">
            <li>Developed several software bots in Python to automate repetitive processes</li>
            <li>Performed technical configuration and testing in Ariba</li>
            <li>Assisted in solving technical issues faced by users while utilizing the Ariba software</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Experience;
