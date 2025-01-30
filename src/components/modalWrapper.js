import React, { useState } from "react";
import { Carousel } from "./carousel";
import { BsXCircle } from "react-icons/bs";
import pcImage from '../assets/90s_computer.jpg';


export const ModalWrapper = ({ data , title}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open and close modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    
};

return (
    <div className=" flex sm:flex-col">
        {/* Trigger button or image to open the modal */}
        <button 
        onClick={toggleModal} 
        className="p-4 text-white rounder">

            <img
            src={pcImage}
            alt="90s computer"
            className=" border-2 border-black "
            />
            <p className=" flex bg-slate-700">{title}</p> {/* Dynamically show the title */}
        
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

                        {/* Description Below Carousel */}
                        <div className="text-white mt-6 px-4 py-2 bg-black bg-opacity-50 rounded-lg">
                            <p className="text-lg">
                                {/* Assuming the description for each slide is available in the data */}
                                {data[0].description} {/* You can change this dynamically if needed */}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
        
  


