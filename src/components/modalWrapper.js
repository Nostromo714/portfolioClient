import React, { useState } from "react";
import { Carousel } from "./carousel";
import { BsXCircle } from "react-icons/bs";
import pcImage from '../assets/90s_computer.jpg';


export const ModalWrapper = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open and close modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    
};

return (
    <div>
        {/* Trigger button or image to open the modal */}
        <button 
        
        onClick={toggleModal} 
        className="p-4 bg-blue-500 text-white rounder">
            
            <img
            src={pcImage}
            alt="90s computer"
            className=" border-2 border-black "
        />
        </button>

        {/* Modal */}
        {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                    onClick={toggleModal}  // Close modal on outside click
                >
                    <div
                        className="relative bg-black p-5 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[80%] rounded-lg flex flex-col justify-center items-center"
                        onClick={(e) => e.stopPropagation()}  // Prevent modal close on inner content click
                    >
                        {/* Close Button */}
                        <BsXCircle
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:opacity-75"
                        />

                        {/* Carousel Component inside the modal */}
                        <Carousel data={data} />
                    </div>
                </div>
            )}
        </div>
    );
};
        
  


