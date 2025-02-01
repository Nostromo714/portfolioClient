import React, { useState } from "react";

import aboutMejpg from '../assets/images/aboutMe.jpg'

const Header = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen)
};

return (
<section className=" w-full h-[200px] flex justify-center items-center  ">
  <button
    onClick={toggleModal}
    className="text-lg text-white font-bold relative group"
    >
  <h2 className=" font-white"> &lt; ABOUT ME/&gt; </h2>
    {/* Animated underline */}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </button>

  {/* Modal */}
  {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 p-5 ">
          <div 
          className="p-6 rounded-lg shadow-lg w-[900px] h-[600px] bg-cover bg-center"
            style={{
              background: `url(${aboutMejpg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            >
              {/* Overlay Text */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white"></h2>
            <p> I'm Lucy Elizabeth, a passionate full-stack developer with a love for UI/UX design.
    I specialize in creating dynamic, user-centered web applications using modern technologies like React, Node.js, and MongoDB.
    Let's build something amazing together!
    </p>
    </div>

    {/* Close Modal Button */}
    <button
              onClick={toggleModal}
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
</section>
)

}

export default Header;