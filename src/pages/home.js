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
import { modalCarousel } from "../assets/carouselData"
import { contactForm } from "../assets/carouselData"
import { ModalWrapper } from "../components/modalWrapper";


//import HoverModal from "../components/aboutModal";
import FlipCard from "../components/flipCard";

const HomePage = () => {
  
  // Create a ref for the section you want to scroll to
  const nextSectionRef = useRef(null);

  return (
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-slate-200 to-black relative bg-cover">

    {/* this is the ( aboutMeButton.js To Modal ) */}
      <section className=" p-6 flex ">
      <HeaderAboutMe />
      </section>

 {/* 1st section ( My Name )*/}
 <section className=" flex-center text-center p-4 ">
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
          <p className="mt-4 pt-10 pb-12 text-lg text-white">
            FULL-STACK DEVELOPER, UI-ENGINEER, & DESIGNER
          </p>

          {/* ScrollToSectionButton Component */}
      <section className="flex justify-center items-center pb-12">
      <ScrollToSectionButton targetRef={nextSectionRef} />
    </section>
        </div>
      </section>

      {/* 2nd section ( My Expertise with Boxes of description )*/}

      <section className=" h-screen flex flex-col justify-end items-center p-4  pt-2">
          {/* Target Ref for ScrollToSectionButton */}
        <h1
          className=" flex justify-center text-8xl text-center tracking-tight max-w-full text-center p-10"
          ref={nextSectionRef}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "8rem",
            textShadow:
              "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
              scrollMarginTop: "80px",
          }}
        >
          MY EXPERTISE
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg mt-10 pb-8">
          {/* Box 1 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Software Development</h2>
            <p className="pt-5">
            Experienced in JavaScript, working with both front-end and back-end technologies. From clean, maintainable code to optimized performance, I craft solutions that last.
            </p>
          </div>

          {/* Boxes with description for My Experience */}
          {/* Box 2 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Full-Stack Dev MERN Stack</h2>
            <p className="pt-5">
            Building full-stack applications with MongoDB, Express.js, React.js, and Node.js. I focus on creating scalable and responsive web apps with real-time features, user authentication, and secure data handling.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex-1 p-6  bg-opacity-50 border-2 border-black  text-white shadow-md">
            <h2 className="text-xl font-semibold">Web Design</h2>
            <p className="pt-5">Skilled in designing clean, modern user interfaces with Tailwind CSS, ensuring a smooth user experience from start to finish. I’m passionate about UI/UX design, making sure every detail contributes to an intuitive user journey.</p>
          </div>
          </div>
        </section>

      {/* 3rd section ( My Work ) */}

      <section className="flex flex-col sm:flex-row justify-between gap-10 pb-20 pt-20">
         {/* Left Content (My Work description) */}
        <div className="flex-1 text-center md:text-left flex items-center p-12 mb-10 sm:mb-0">
        <div>
            <h1 className=" text-8xl tracking-tight p-10">
            {/* Header for My Work */}
            MY WORK
            </h1>

        <div className="  max-1/2 p-10">
        <p className="text-2xl text-black font-bold  leading-relaxed p-4">
         I build fast, responsive web apps with real-time features using React.js, Node.js, and MongoDB. I’m all about creating smooth, user-friendly experiences with solid security and efficient data handling. I love solving problems and learning along the way to make sure the code I write is clean, scalable, and easy to maintain.
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
      <section className=" flex flex-col md:flex-row gap-4 pt-20 p-20">

        {/* project Story Sphere */}
        <div className=" flex h-[400px] w-[400px]">
        <ModalWrapper 
        data={storySphere}
        title="Story Sphere - Blog site focusing on blog management and comment section" />
        </div>

        {/* Modal Wrapper and Carousel */}
        <div className=" flex h-[400px] w-[400px]">
        <ModalWrapper 
        data={modalCarousel} 
        title="Modal Wrapper and carousel - To display projects fast quick and easily. React JS, Tailwind CSS, Bootstrap, created from scratch" />
        </div>

        {/* Contact Form */}
        <div className="flex h-[400px] w-[400px]" >
        <ModalWrapper 
        data={contactForm} 
        title="Contact Form - Sends notifications to email. MERN Stack, tailwind CSS, Nodemailer " />
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