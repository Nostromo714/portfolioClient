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
        
        <div className=" relative border-black pb-10 bg-black border-2 p-5 flex flex-col justify-center items-center">

            
        {/* Left Arrow */}
        <BsArrowLeftCircle 
        onClick={handleLeftArrowClick}
        className=" absolute left-6 top-1/2 transform text-gray-400 text-4xl cursor-pointer rounded-full z-10 hover-pointer hover:opacity-50 shadow-lg" />

         {/* Image */}
         <div className="w-full h-[400px]"> {/* Set a fixed height */}
        <img 
        src={data[activeIndex].src} 
        alt={data[activeIndex].alt} 
        className="w-full object-cover m-2 rounded"/> 
        </div>
         {/* Right Arrow */}
        <BsArrowRightCircle 
        onClick={handleRightArrowClick}
        className=" absolute right-6 top-1/2 transform text-gray-400 text-4xl cursor-pointer  z-10 hover:opacity-50 shadow-lg"/>

        {/* Carousel Buttons (for navigation or other purpose) */}
         <span className=" absolute bottom-0 border flex justify-center space-x-2  p-2 rounded-full shadow-lg ">
        {data.map((__, idx) => {
            return (
        <button 
        key={idx}
        onClick={() => onSlideChange(idx)}
        className={`w-3 h-3 rounded-full bg-gray-600 ${activeIndex === idx ? '' : 'bg-slate-400  shadow-lg'} transition-all`}/>
            )
        })}
    </span>
     {/* Description Below Carousel */}
     <div 
     className="mt-4 text-white text-lg">
        <p>{data[activeIndex].description}</p> {/* Displaying description for the current slide */}
    </div>
    </div>
    )
}