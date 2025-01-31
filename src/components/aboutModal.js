import React from 'react';
import computerModern from '../assets/images/flipCard/computerModern.jpg'

const catalogImages = [
    { src: computerModern, alt: 'Image 1' },
    { src: computerModern, alt: 'Image 2' },
    { src: computerModern, alt: 'Image 3' },
    // Add more images as needed
];

const aboutMeDescription = `
    I'm Lucy Elizabeth, a passionate full-stack developer with a love for UI/UX design.
    I specialize in creating dynamic, user-centered web applications using modern technologies like React, Node.js, and MongoDB.
    Let's build something amazing together!
`;

const AboutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div
        className="relative bg-white w-[80%] sm:w-[70%] lg:w-[50%] h-[80%] rounded-lg flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing if content inside is clicked
      >
        {/* Modal Content */}
        <h2 className="text-3xl mb-4 text-center">About Me</h2>
        <p className="text-lg mb-6 text-center">{aboutMeDescription}</p>

        <div className="flex flex-wrap justify-center">
          {catalogImages.map((image, index) => (
            <div key={index} className="p-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-[300px] h-auto object-cover border-2 border-white rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;