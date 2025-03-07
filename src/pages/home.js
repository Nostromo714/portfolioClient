// /src/pages/home.js
import React, { useState, useRef } from "react";
import HeaderAboutMe from "../components/aboutMeButton";
import ScrollToSectionButton from '../components/scrollToSectionButton';
import ProfessionalExperience from "../components/professionalExperience";
import ContactForm from '../components/contactForm';
import Testimonials from "../components/testimonials"
import Footer from '../components/footer';


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
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-slate-200 to-black relative bg-cover  overflow-x-hidden">

    {/* this is the ( aboutMeButton.js To Modal ) */}
      <section className=" p-6 flex ">
      <HeaderAboutMe />
      </section>

 {/* 1st section ( My Name )*/}
 <section className="flex justify-center text-center p-4 ">
        <div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[8rem] 2xl:text-9xl tracking-tight max-w-full tracking-tight max-w-full"
            style={{
              fontFamily: "Poppins, sans-serif",
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

      <section className=" flex flex-col justify-end items-center p-4 pt-20">
          {/* Target Ref for ScrollToSectionButton */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[8rem] 2xl:text-9xl tracking-tight max-w-full tracking-tight pt-30"
          ref={nextSectionRef}
          style={{
            fontFamily: "Poppins, sans-serif",
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
            I am an experienced in JavaScript, working with both front-end and back-end technologies. From clean, maintainable code to optimized performance, I craft solutions that last.
            </p>
          </div>

          {/* Boxes with description for My Experience */}
          {/* Box 2 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Full-Stack Dev MERN Stack</h2>
            <p className="pt-5">
            I Build full-stack applications with MongoDB, Express.js, React.js, and Node.js. I focus on creating scalable and responsive web apps with real-time features, user authentication, and secure data handling.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex-1 p-6  bg-opacity-50 border-2 border-black  text-white shadow-md">
            <h2 className="text-xl font-semibold">Web Design</h2>
            <p className="pt-5">I am skilled in designing clean, modern user interfaces with Tailwind CSS, ensuring a smooth user experience from start to finish. I’m passionate about UI/UX design, making sure every detail contributes to an intuitive user journey.</p>
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

        <div className=" max-1/2 p-10">
        <p className="text-2xl tracking-tight text-black font-bold  leading-relaxed p-4">
        Below, you can click on and preview some of the work I’ve created. You can also find the link to my GitHub at the bottom of this site to view the updated code for this portfolio, as well as for the projects I’ve presented. I've created a FlipCard here to demonstrate the visual evolution of technology — from the older computer, which represents my family's first computer, to the one I use every day in the present. My love for the fast-paced, ever-evolving world of computer technology has become a true passion. Learning how to create, adapt, and come up with solutions to challenges excites me and motivates me to keep pushing forward. I would love to continue creating, building, and learning alongside an enthusiastic team.


        </p>
        </div>
        </div>
        </div>
     
     {/* Right content in My work (Image Flip Card) */}
      <div className=" flex sm:w-1/2 justify-center items-center p-9 ">
      
        <FlipCard
            frontImage={computerModern} 
            backImage={pcImage}
            className="w-[600px] h-[700px]" //set teh size of the flipCard  
            />
      
      </div>
      </section> 

      {/* 4th section (Projects Gallery Modal/Carousel) */}
      <section className="flex justify-center flex-col md:flex-row gap-4 pt-20 p-20">
        {/* Project Story Sphere */}
        <div className="flex h-[400px] w-full sm:w-[400px]">
          <ModalWrapper
            data={storySphere}
            title="Story Sphere - Blog site focusing on blog management and comment section"
          />
        </div>

        {/* Modal Wrapper and Carousel */}
        <div className="flex h-[400px] w-full sm:w-[400px]">
          <ModalWrapper
            data={modalCarousel}
            title="Modal Wrapper and carousel - To display projects fast quick and easily. React JS, Tailwind CSS, Bootstrap, created from scratch"
          />
        </div>

        {/* Contact Form */}
        <div className="flex h-[400px] w-full sm:w-[400px]">
          <ModalWrapper
            data={contactForm}
            title="Contact Form - Sends notifications to email. MERN Stack, Tailwind CSS, Nodemailer"
          />
        </div>
      </section>


      {/* 5th Section ( Professional Experience ) */}

      <section className="mt-20 pt-20">
      <ProfessionalExperience title="Job History" />     
      </section>
        
      {/* 6th Section (Contact Me) */}

      <section className="flex flex-col sm:flex-row justify-between gap-10 p-5">
        <div className="w-full sm:w-1/2 p-4 pt-20"> 
        <ContactForm />  
        </div>

        <div className=" w-full sm:w-2/3 p-4 pt-20">
        <Testimonials /> 
        </div>
      </section>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default HomePage;