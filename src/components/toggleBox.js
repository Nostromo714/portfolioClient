
import React, { useState } from "react";

const ToggleBox = ({ title, description }) => {
    // State to track if the box is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

return (
    <div className="p-6 bg-opacity-50 border-2 border-black text-white shadow-md mb-4">
        <div
        onClick={toggleContent}
        className="cursor-ponter"
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }} 
        >
            <h2 className="text-xl font-semibold">{title}</h2>
            <span>{isOpen ? '_' : '+'}</span>
        </div>

        {isOpen && (
            <div className="mt-4">
                <p>{description}</p>
                </div>
        )}
    </div>
)

}
export default ToggleBox;