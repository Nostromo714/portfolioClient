import React from "react";
import heroProjectImage from "../assets/images/wickedFabrication/homePageWicked.png";

const HeroProject = () => {
  return (
    <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg  ">
      <div className="pt-10 p-1 sm:p-4">
        <h2
          className="text-4xl flex justify-center sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[8rem] 2xl:text-8xl tracking-wide max-w-full pb-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow:
              "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
            scrollMarginTop: "80px",
          }}
        >
          MY PROJECTS 
        </h2>

        <div className="flex flex-col items-center pb-10">
        <h3
          className="text-xl sm:text-2xl md:text-5xl font-semibold text-gray-800"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow:
              "3px 3px 5px rgba(172, 172, 200, 0.91), 0 0 25px rgba(93, 91, 94, 0.98), 0 0 50px rgba(232, 231, 241, 0.61)",
          }}
        >
          AND COMPONENT SHOWCASE
        </h3>

        {/* underline */}
       <div className="w-80 sm:w-96 md:w-[500px] h-[2px] bg-gray-400 mt-4 opacity-60"></div>

         </div>
        <div className="flex items-center justify-center gap-4 ">
          <a
            href="https://wickedsignfab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2
              className="flex justify-center sm:text-2xl
                md:text-3xl
                lg:text-4xl text-gray-600 font-bold mt-4 tracking-tight hover:text-green-600 
                 hover:scale-105
                 cursor-pointer transition-colors duration-300 hover:scale-110 "
              style={{
                fontFamily: "poppins, sans-serif",
              }}
            >
              Wicked Signs and Fabrication
            </h2>
          </a>
            <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/Nostromo714/wickedFabrication"
            className=" mt-4 mr-4 text-gray-700 pl-4 hover:text-green-600 
            hover:scale-110
            transition-colors duration-300"
          >
            <i className="fa-brands fa-github text-4xl p-2  hover:text-green-600  hover:scale-110 transition-all duration-300"></i>
          </a>
          </div>
        </div>
        <p className="flex pb-3 pl-8 pr-8 justify-center text-sm sm:text-base md:text-lg text-gray-800 text-center">
        Full-stack headless CMS project integrating Drupal JSON:API with a React frontend to deliver dynamic, API-driven content and reusable components.
      </p>
        <section className="flex justify-center items-center p-1 sm:p-4 min-h-[200px] sm:min-h-[400px]">
          <a href="https://wickedsignfab.com/">
            <img
              src={heroProjectImage}
              alt="Wicked Fabrication Homepage"
              className="rounded-lg shadow-lg border-white p-2 border-4 mx-auto w-full object-contain w-full sm:max-w-[90%] md:max-w-[1100px] hover:scale-110 transition-all duration-300"
            />
          </a>
        </section>
      </div>
    </div>
  );
};

export default HeroProject;
