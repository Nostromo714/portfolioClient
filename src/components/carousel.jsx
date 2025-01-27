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
    
    {/* Carousel */}
    return (
        
        <div className=" absolute border-black bg-black border-2 p-5 flex justify-center item-start relative ">
            
        {/* Left Arrow */}
        <BsArrowLeftCircle 
        onClick={handleLeftArrowClick}
        className=" absolute left-6 top-1/2 transform text-gray-400 text-4xl cursor-pointer rounded-full z-10 hover-pointer hover:opacity-50 shadow-lg" />
        <img 
        src={data[currentIndex].src} 
        alt={data[currentIndex].alt} 
        className="h-auto object-cover m-2 rounded "/> 
        
         {/* Right Arrow */}
        <BsArrowRightCircle 
        onClick={handleRightArrowClick}
        className=" absolute right-6 top-1/2 transform text-gray-400 text-4xl cursor-pointer  z-10 hover:opacity-50 shadow-lg"/>

        {/* Carousel Buttons (for navigation or other purpose) */}
         <span className=" absolute bottom-12 border flex justify-center space-x-2  p-2 rounded-full shadow-lg ">
        {data.map((__, idx) => {
            return (
        <button key={idx}
         onClick={() => setCurrentIndex(idx)}
         className={`w-3 h-3 rounded-full bg-gray-600 ${currentIndex === idx ? 'bg-' : 'bg-slate-400  shadow-lg'} transition-all`}/>
            )
        })}
    </span>
    </div>
    )
}