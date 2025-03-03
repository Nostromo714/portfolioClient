import React, { useState } from "react";

import aboutMeJpg from '../assets/images/aboutMe.jpg'


const Header = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen)
};

return (
<section className=" w-full h-[200px] flex justify-center items-center"
>
  {/* aboutMaeButton */}
  <button
    onClick={toggleModal}
    className="text-lg text-white font-bold relative group"
    >
  <h2 className=" font-white"> &lt; About Me (click)  /&gt;</h2>
    {/* Animated underline */}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </button>

  {/* Modal */}
  {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 p-5 "
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
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 p-7 rounded-lg">
              <div className="text-center max-w-lg">
              <h2 className="text-2xl font-bold text-white"></h2>
            <p> Hi there! I’m Lucy Elizabeth, a full-stack developer who’s deeply passionate about coding and problem-solving. But when I’m not diving into code, you’ll find me on an adventure with my family—whether I’m roller skating with my daughter, teaming up with my son for a co-op game, or exploring the outdoors with my partner. I’m also a proud stepmom to a musician and love spending time with my horse. In my free time, you’ll often find me learning new things on CodinGame or TryHackMe, or helping out by horse-sitting for family and friends. Life is about balance for me—mixing my love for technology with the things that bring me joy and connect me to the people I love most.
    
    Let's build something amazing together!
    </p>
     </div>
    </div>

   
          </div>
        </div>
      )}
</section>
)

}

export default Header;