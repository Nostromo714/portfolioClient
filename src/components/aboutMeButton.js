import React, { useState } from "react";

import aboutMeJpg from "../assets/images/aboutMe.jpg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className=" w-full h-[200px] flex justify-center items-center">
      {/* aboutMaeButton */}
      <button
        onClick={toggleModal}
        className="text-lg text-white font-bold relative group"
      >
        <h2 className=" font-white"> &lt; About Me (click) /&gt;</h2>
        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 p-5 "
          onClick={toggleModal} // close the modal when click
        >
          <div
            className="p-6 rounded-lg shadow-lg w-[900px] h-[600px] bg-cover bg-center"
            style={{
              background: `url(${aboutMeJpg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            //onClick={(e => e.stopPropagation())} //prevent closing when clicking inside the modal
          >
            {/* Overlay description */}
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center p-7 rounded-lg">
              <div className="text-center max-w-lg">
                <h2 className="text-2xl font-bold text-white"></h2>
                <p>
                  {" "}Hi, I’m Lucy Elizabeth — a full-stack developer who came into tech through persistence, curiosity, and real-life experience.

                  My path into software development wasn’t traditional. I grew into responsibility later in life, and my family became my biggest motivation. Along the way, I discovered a strong passion for coding — especially solving problems, finding bugs, and building applications that work.

                  I’ve pushed myself to learn technologies like the MERN stack, full-stack application development, and headless CMS architecture. That mindset of curiosity and persistence has been the most important part of my growth as a developer.

                  What I enjoy most about development is the balance between creativity and logic — breaking down complex problems and turning them into clean, functional solutions.

                  Outside of development, I enjoy spending time with my family, roller skating, and caring for my horses and cactus collection. I value curiosity, patience, and consistency — qualities that also shape how I approach learning and problem-solving in tech.

                  I’m looking for a role where I can continue to grow as a developer while contributing to a team that values collaboration, learning, and thoughtful problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
