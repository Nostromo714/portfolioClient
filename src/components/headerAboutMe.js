import React, { useRef } from 'react';
import ScrollToSectionButton from './scrollToSectionButton'; // Import the component

const Header = () => {
  // Create a ref for the section you want to scroll to
  const nextSectionRef = useRef(null);

  return (
    <section className="w-full h-[200px] flex justify-center items-center">
      {/* Use the ScrollToSectionButton component */}
      <ScrollToSectionButton targetRef={nextSectionRef} />

      {/* The next section to scroll to */}
      <section
        ref={nextSectionRef} // Attach ref to this section
        className="h-[500px] bg-blue-500 flex justify-center items-center text-white"
      >
        
      </section>
    </section>
  );
};

export default Header;