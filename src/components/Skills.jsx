import React from "react";
import reactlogo from "../assets/react-logo.png";
import jslogo from "../assets/js-logo.png";
import htmllogo from "../assets/html-logo.png";
import csslogo from "../assets/css-logo.png";
import pythonlogo from "../assets/python-logo.png";
import githublogo from "../assets/github-logo.png";
import gitlogo from "../assets/git-logo.png";
import figmalogo from "../assets/figma-logo.png";
import npmlogo from "../assets/npm-logo.png";
import vscodelogo from "../assets/vscode-logo.png"
import katalonlogo from "../assets/katalon-logo.png"
import javalogo from "../assets/java-icon.png"

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

              <div>
                <div className="flex flex-row py-3 text-lg text-[#d43939]">
                
                  <div className="grid gap-10 grid-cols-2 md:grid-cols-6">
                    <div className="flex flex-col items-center">
                      <img src={reactlogo} alt="react-logo" className="h-[120px]" ></img>
                      <p className="text-sm p-2 text-black">React JS</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={jslogo} alt="javascript-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Javascript</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={htmllogo} alt="html-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">HTML 5</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={csslogo} alt="css-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">CSS 3</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={pythonlogo} alt="python-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={javalogo} alt="java-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Java</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={gitlogo} alt="git-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Git</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={githublogo} alt="github-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Github</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={figmalogo} alt="figma-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Figma</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={npmlogo} alt="npm-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Npm</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={vscodelogo} alt="vscode-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">VS Code</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={katalonlogo} alt="katalon-logo" className="h-[120px]"></img>
                      <p className="text-sm p-2 text-black">Katalon</p>
                    </div>


                  </div>
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
