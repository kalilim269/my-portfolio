import React from "react";
import MyPortfolioWeb from "../assets/portfolio-home.png";

const LittleLemon = () => {
  return (
    <div>
      <div className="flex items-center">
        <a href="/" className="text-3xl font-bold primary-color ml-4 px-5 py-6">
          My Portfolio
        </a>
      </div>
      <div className="bg-[#d43939] h-auto text-white">
        <div className="flex justify-center pb-5">
          <hr className="border-white border-2 w-4/5" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="pt-3 pb-6 text-2xl text-white">
            My Personal Portfolio
          </div>
          <div className="w-2/5 pb-6">
            <hr className="border-white border-2 " />
          </div>

          <img
            src={MyPortfolioWeb}
            alt="little-lemon-web"
            className="h-[180px] md:h-[300px]"
          ></img>
        </div>
        <div className="flex flex-row px-[4em] pt-[4em] pb-[1em] gap-4">
          <div className="text-xl">Overview</div>
          <div className=" w-[2px] bg-white relative my-4 mx-auto"></div>

          <div className=" mb-[20px] text-[#d43939] relative bg-white p-6 rounded-3xl max-w-[400px] md:max-w-[600px] sm:max-x-[600px] mx-auto">
            <p className="text-sm md:text-lg py-1">
              This website is developed to showcase my expertise in web
              development and design. With a focus on user-centricity, the
              website features intuitive navigation, responsive design,
              interactive elements, and dynamic content. Powered by HTML5, CSS3,
              JavaScript, and Tailwind CSS, it highlights my skills in
              creating visually appealing and functional websites.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative inline-flex group my-3 ">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                    from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                    group-hover:-inset-1 group-hover:duration-200"
            ></div>
            <a
              href="https://github.com/kalilim269/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              role="button"
              className="w-[180px] h-[50px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                    font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleLemon;
