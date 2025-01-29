import React from "react";

const FlipCard = ({ frontImage, backImage }) => {
    return (
        <div className="flip-card relative w-[300px] h-[400px] ">
        <div className="flip-card-inner w-full h-full flex justify-center item-center bg-gray-300">
            <div className="flip-card-front w-full h-full flex justify-center item-center bg-gray-300">
                <img 
                src={frontImage}
                alt="Front image"
                className="w-full h-full object-cover"
                />
        </div>

        {/* Back of the card */}
        <div className="flip-card-back w-full h-full flex justify-center items-center ">
           <img
           src={backImage}
           alt="Back image"
           className="w-full h-full object-cover"/>

        </div>
        </div>
        </div>
    );
};

export default FlipCard;