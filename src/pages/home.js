// /src/pages/home.js
import React, { useState, useRef } from "react";
import HeaderAboutMe from "../components/aboutMeButton";
import ProfessionalExperience from "../components/professionalExperience";
import ContactForm from '../components/contactForm';
import Testimonials from "../components/testimonials"
import ScrollToSectionButton from '../components/scrollToSectionButton';


// import img
import pcImage from '../assets/images/flipCard/90s_computer.jpg';
import computerModern from '../assets/images/flipCard/computerModern.jpg'
import { storySphere } from "../assets/carouselData"
import { projectTwoSlides } from "../assets/carouselData"
import { projectThreeSlides } from "../assets/carouselData"
import { ModalWrapper } from "../components/modalWrapper";


//import HoverModal from "../components/aboutModal";
import FlipCard from "../components/flipCard";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

// Handle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);  // Toggle the modal open/close
  };
  
  // Create a ref for the section you want to scroll to
  const nextSectionRef = useRef(null);

  return (
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-slate-200 to-black relative bg-cover">

    {/* this is the ( aboutMeButton ) */}
      <section className=" p-6 flex ">
      <HeaderAboutMe />
      </section>

 {/* 1st section ( My Name )*/}
 <section className="flex-center text-center p-4 ">
        
        <div>
          <h1
            className="text-8xl tracking-tight max-w-full"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "8rem",
              textShadow:
                "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
            }}
          >
            LUCY ELIZABETH
          </h1>
          {/* Spacing between h1 and p */}
          <p className="mt-4 pt-2 text-lg text-white">
            FULL-STACK DEVELOPER, UI-ENGINEER, & DESIGNER
          </p>

          {/* ScrollToSectionButton Component */}
      <section className=" flex justify-center items-center">
      {/* Use the ScrollToSectionButton component */}
      <ScrollToSectionButton targetRef={nextSectionRef} />
    </section>
        </div>

       
      
    
      </section>

      {/* 2nd section ( My Expertise with Boxes of description )*/}
      <section className="h-screen flex flex-col justify-center items-center p-4 pt-20">
          {/* nextSection for  ScrollToSectionButton */}
        <h1
          className="text-8xl tracking-tight max-w-full p-10 text-center"
          ref={nextSectionRef}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "8rem",
            textShadow:
              "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
          }}
        >
          MY EXPERTISE
        </h1>
           {/* The next section to scroll to */}
        

        <div className="flex flex-col sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg mt-10">
          {/* Box 1 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Software Development</h2>
            <p>
              Experenced in developiing both frount and backend technolies.
              JavaScript, Python,{" "}
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Full-Stack Dev MERN Stack</h2>
            <p>
              Passionate about UI/UX. Over one year experance in html, css, js
              react and nodeJS frameworks
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex-1 p-6  bg-opacity-50 border-2 border-black  text-white shadow-md">
            <h2 className="text-xl font-semibold">Web Design</h2>
            <p>Skilled in creating and desiging with tailwiind css </p>
          </div>
          </div>
        </section>

      {/* 3rd section ( My Work ) */}
      <section className="flex flex-col sm:flex-row justify-between gap-10 pb-20">

         {/* Left Content (My Work description) */}
        <div className="flex-1 text-center md:text-left flex items-center p-12 mb-10 sm:mb-0">
        <div>
            <h1 className=" text-8xl tracking-tight p-10">
            {/* Header */}
            MY WORK
            </h1>

        <div className="  max-1/2 p-10">
        <p className="text-2xl text-black font-bold  leading-relaxed p-4">
          Built and deployed scalable, responsive web apps with real-time
          features, focusing on high performance and intuitive interfaces using
          React.js, Node.js, and MongoDB. <br /> Passionate about creating
          dynamic, user-centered experiences with secure authentication and
          efficient data management. Continuously driven by problem-solving and
          learning to create maintainable, robust code.
        </p>
        </div>
        </div>
        </div>
     
     {/* Right content in My work (Image Flip Card) */}
      <div className=" flex sm:w-1/2 justify-center items-center p-9">
      
        <FlipCard
            frontImage={computerModern} 
            backImage={pcImage}
            className="w-[600px] h-[700px]" //set teh size of the flipCard  
            />
      
      </div>
      </section> 

      {/* 4th section ( Projects Gallery Modal/Carousel )*/}
      <section className=" flex flex-col md:flex-row gap-4 pt-20 ">

        {/* project Story Sphere */}
        <div className=" flex h-[400px] ">
        <ModalWrapper 
        data={storySphere}
        title="MongoDB, Express.js, React, Node.js" />
        </div>

        {/* project 2 */}
        <div className=" flex h-[400px] ">
        <ModalWrapper 
        data={projectTwoSlides} 
        title="project 2" />
        </div>

        {/* project 3 */}
        <div className="flex h-[400px]" >
        <ModalWrapper 
        data={projectThreeSlides} 
        title="Project 3" />
        </div>
      </section>

      {/* 5th Section ( Professional Experience ) */}

      <section className="mt-20 pt-20">
      <ProfessionalExperience title="Story Sphere Project" />     
      </section>
        
      {/* 6th Section (Contact Me) */}

      <section className="flex flex-col sm:flex-row justify-between gap-10 p-5">
        <div className="w-full sm:w-1/2 p-9"> 
        <ContactForm />  
        </div>

        <div className=" w-full sm:w-1/2 p-9 pt-20">
        <Testimonials /> 
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default HomePage;