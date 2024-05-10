import React from "react";
import LittleLemonWeb from "../assets/little-lemon.png";

const LittleLemon = () => {
  return (
    <div className="bg-[#d43939] h-auto text-white">
      <div className="flex justify-center pb-5">
        <hr className="border-white border-2 w-4/5" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="pt-3 pb-6 text-2xl text-white">My Little Lemon</div>
        <img
          src={LittleLemonWeb}
          alt="little-lemon-web"
          className="h-[180px] md:h-[300px]"
        ></img>
      </div>
      <div className="flex flex-row px-[4em] pt-[4em] pb-[1em] gap-4">
        <div className="text-xl">Overview</div>
        <div className=" w-[2px] bg-white relative my-4 mx-auto"></div>

        <div className=" mb-[20px] text-[#d43939] relative bg-white p-6 rounded-3xl max-w-[400px] md:max-w-[600px] sm:max-x-[600px] mx-auto">
          <p className="text-sm md:text-lg py-1">
            Little Lemon's online platform is a dynamic website developed as
            part of Meta's Coursera Front-End Development course. At its core,
            the site serves as a digital gateway for patrons to explore the
            offerings of the fictional Little Lemon restaurant. From perusing
            menus to staying abreast of the latest news and promotions, visitors
            can seamlessly navigate the site to make reservations and engage
            with the brand.
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
            href="https://github.com/kalilim269/little-lemon"
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
  );
};

export default LittleLemon;
