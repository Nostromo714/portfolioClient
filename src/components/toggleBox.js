
import React, { useState } from "react";

const ToggleBox = ({ title, description, className }) => {
    // State to track if the box is open or closed
    const [isOpen, setIsOpen] = useState(false);
    

return (
    <div className={`p-6 bg-opacity-50 mb-6 border-2 border-black text-white shadow-md  ${className}`}>
        <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
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
            <div className="mt-6 ">
                 <div className={`mt-6 p-4 ${isOpen ? 'bg-orange-500' : 'bg-white'}`}> 
                 {/* Change background color when open */}
                <p>{description}</p>
                </div>
             </div>
        )}
    </div>
)

}
export default ToggleBox;