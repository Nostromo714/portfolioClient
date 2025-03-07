import React from "react";

const FlipCard = ({ frontImage, backImage }) => {
    return (
        <div className="flip-card relative w-[400px] h-[500px] pt-20">
        <div className="flip-card-inner w-full h-full flex justify-center item-center">
            <div className="flip-card-front w-full h-full flex justify-center item-center">
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