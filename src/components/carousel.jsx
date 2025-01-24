import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export const Carousel = ({ data }) => {
    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handler for the left arrow click
    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
    // Handler for the Right arrow click
    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };
    

    
    return (
        <div className=" border-2 border-black p-4 flex justify-center items-center relative ">

        {/* Left Arrow */}
        <BsArrowLeftCircle 
        onClick={handleLeftArrowClick}
        className=" absolute left-6 top-1/2 transform text-blue-200 text-4xl cursor-pointer z-10 hover-pointer hover:opacity-50 shadow-lg"
        />
        <img 
        src={data[currentIndex].src} 
        alt={data[currentIndex].alt} 
        className="h-auto  object-cover m-2 rounded"  // Tailwind size control
        /> 
         {/* Right Arrow */}
        <BsArrowRightCircle 
        onClick={handleRightArrowClick}
        className=" absolute right-6 top-1/2 transform text-blue-200 text-4xl cursor-pointer z-10 hover:opacity-50 shadow-lg"/>

        {/* Carousel Buttons (for navigation or other purpose) */}
         <span className=" absolute bottom-0 flex justify-center space-x-2 bg-white p-2 border-t-2 border-black ">
        {data.map((__, idx) => {
            return (
        <button key={idx}
         onClick={() => setCurrentIndex(idx)}
         className={`rounded-full ${currentIndex === idx ? 'bg-black' : 'bg-gray-300'} transition-all`}/>
            )
        })};
    </span>
    </div>
    )
};