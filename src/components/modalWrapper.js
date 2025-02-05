import React, { useState } from "react";
import { Carousel } from "./carousel";
//import { BsXCircle } from "react-icons/bs";  // Not in use but may use it later

export const ModalWrapper = ({ data , title}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); //tracks active slid index for description

    // Function to open and close modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Function  to update the active index
    const handleCarouselChange = (index) => {
        setActiveIndex(index); 
    }    

return (
    <div className=" flex sm:flex-col">
        {/* Trigger button image to open the modal */}
        <button 
        onClick={toggleModal} 
        className="p-4 text-white border-2 transition-transform duration-300 hover:scale-110">

            <img
            src={data[0].src} // Use the first image from the data
            alt="Story Sphere Home Page"
            className=" border-2 border-black w-[400px] h-auto object-cover "
            />
            <p className=" flex bg-slate-700 p-3">{title}</p> {/* Dynamically show the title */}
        
        </button>

        {/* Modal */}
        {isModalOpen && (
                <div
                    className="fixed border-2 inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                    onClick={toggleModal}  // Close modal on outside click
                >
                    <div
                        className="relative bg-b-black  w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[80%] rounded-lg flex flex-col justify-center items-center"
                        onClick={(e) => e.stopPropagation()}  // Prevent modal close on inner content click
                    >

                        {/* Carousel Component inside the modal */}
                        <Carousel 
                        data={data}
                        activeIndex={activeIndex} // Pass active index to Carousel
                        onSlideChange={handleCarouselChange} // Pass the function to handle index changes
                        />

                    </div>
                </div>
            )}
        </div>
    );
};
        
  


