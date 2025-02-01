import React, { useRef } from 'react';

const ScrollToSectionButton = ({ targetRef }) => {
  // Function to handle the scroll
  const scrollToNextSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align the section at the top of the viewport
      });
    }
  };

  return (
    <div className="mt-auto mb-10 pt-5 flex justify-center">
      {/* Font Awesome Code Icon with Gradient Animation */}
      <i
        className="fa-solid fa-code text-6xl icon-gradient pt-20 cursor-pointer"
        onClick={scrollToNextSection} // Add click event handler
      ></i>
    </div>
  );
};

export default ScrollToSectionButton;