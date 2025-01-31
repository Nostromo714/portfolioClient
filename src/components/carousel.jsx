import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export const Carousel = ({ data, activeIndex, onSlideChange }) => {

    // Handler for the left arrow click
    const handleLeftArrowClick = () => {
        const newIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        onSlideChange(newIndex); // Update the index when left arrow is clicked
    };
    // Handler for the Right arrow click
    const handleRightArrowClick = () => {
        const newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        onSlideChange(newIndex); // Update the index when right arrow is clicked
    };
    
    {/* Carousel */}
    return (
        
        <div className=" relative flex flex-col justify-center items-center max-h-screen p-2">

        {/* Left Arrow */}
        <BsArrowLeftCircle 
        onClick={handleLeftArrowClick}
        className=" absolute left-6 top-1/2 transform text-gray-400 text-4xl cursor-pointer rounded-full z-10 hover-pointer hover:opacity-50 shadow-lg" />

         {/* Image + Description Wrapper */}
         <div className="border-black border-2 max-w-[80wh] max-h-[70vw] flex flex-col justify-center items-center"> 

        <img 
        src={data[activeIndex].src} 
        alt={data[activeIndex].alt} 
        className="object-contain max-w-a max-auto-[700px]"
         /> 
         
         {/* Description Below Image */}
        <div 
        className="text-white text-lg bg-black w-full text-center p-5 ">
        <p className=''>{data[activeIndex].description}</p> {/* Displaying description for the current slide */}
        
        </div>
        </div>
         {/* Right Arrow */}
        <BsArrowRightCircle 
        onClick={handleRightArrowClick}
        className=" absolute right-6 top-1/2 transform text-gray-400 text-4xl cursor-pointer  z-10 hover:opacity-50 shadow-lg"/>

    </div>
    )
}