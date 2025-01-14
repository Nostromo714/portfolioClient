// /src/pages/home.js
import React from 'react';

const HomePage = () => {
  return (
        <div className='text-white min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-orange-100 to-black relative'>

            {/* First section*/}
    <section className='h-screen text-center p-20 '>
            <div className='p-20'>
                <h2> &lt; LUCY  ELIZABETH /&gt; </h2>
            </div>
            <div className=''>
            <h1 
          className="text-8xl tracking-tight max-w-full p-10" 
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '8rem',
            textShadow: '3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)'
          }}
        >
          LUCY   ELIZABETH
        </h1> 
        {/* Spacing between h1 and p */}
        <p className="mt-4 p-8 text-lg text-white">FULL-STACK DEVELOPER, UI-ENGINEER, & DESIGNER</p>
        </div>

        <div className='mt-auto mb-10'>
            <i className='fa-solid fa-code text-6xl'></i>
        </div>
    </section>

            {/* Second section { My expertise }*/}
            <section className='h-screen flex justify-center items-center'>
            <div className="flex space-x-4 p-4">
      {/* Box 1 */}
      <div className="flex-1 p-6 bg-blue-500 text-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Box 1</h2>
        <p>Content for box 1</p>
      </div>

      {/* Box 2 */}
      <div className="flex-1 p-6 bg-green-500 text-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Box 2</h2>
        <p>Content for box 2</p>
      </div>

      {/* Box 3 */}
      <div className="flex-1 p-6 bg-red-500 text-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Box 3</h2>
        <p>Content for box 3</p>
      </div>
   
     
    </div>
            
            </section>

            {/* Third section */}
            <section className='h-screen flex justify-center items-center'>

            </section>

            {/* Fourth section */}
            <section className='h-screen flex justify-center items-center'>

            </section>

            {/* Fifth section */}
            <section className='h-screen flex justify-center items-center'>

            </section>

            {/* Sixth section */}
            <section className='h-screen flex justify-center items-center'>

            </section>
        </div>
  ); 
};

// Ensure default export
export default HomePage;

//git checkout -- file_path