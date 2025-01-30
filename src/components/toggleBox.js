
import React, { useState } from "react";

const ToggleBox = ({ title, description, className }) => {
    // State to track if the box is open or closed
    const [isOpen, setIsOpen] = useState(false);
    

return (
    <div className={` border-2 border-blue-400 rounded-lg p-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 shadow-lg mb-1 text-white shadow-md  ${className}`}>
        <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }} 
        >
            <h2 className="text-xl font-semibold ">{title}</h2>
            <span>{isOpen ? '_' : '+'}</span>
        </div>

        {isOpen && (
            <div className="mt-4 rounded-lg bg-black ">
                    <div className="p-4 ">
                        <p className="rounded-lg p-3 ">{description}</p>
                    </div>
                </div>
        )}
    </div>
)

}
export default ToggleBox;