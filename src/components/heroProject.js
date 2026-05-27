import React from 'react';
import heroProjectImage from "../assets/images/wickedFabrication/homePageWicked.png";





const HeroProject = () => {
    return (    

        <div className="flex flex-col sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg  ">

              <div className="pt-10 p-1 sm:p-4">
              <h2 className="text-4xl flex justify-center sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[8rem] 2xl:text-8xl tracking-tight max-w-full tracking-tight pb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    textShadow:
                      "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
                      scrollMarginTop: "80px",
                  }}
                >
                  MY PROJECTS
                </h2>
                <div className="flex items-center justify-center gap-4 pb-8">
                <h2 className='flex justify-center text-2xl text-gray-700 font-bold mt-4 tracking-tight'
                style={{
                    fontFamily: "poppins, sans-serif",
                   
                }}
                >Wicked Signs and Fabrication</h2>
                  <a href="https://github.com/Nostromo714/wickedFabrication" className="text-gray-700 ">
            <i className="fa-brands fa-github text-4xl p-2  hover:text-green-600  hover:scale-110 transition-all duration-300"></i>
            </a>
        </div>
               <section className="flex justify-center items-center p-1 sm:p-4 min-h-[200px] sm:min-h-[400px]">
                
                <img
                    src={heroProjectImage}
                    alt="Wicked Fabrication Homepage"
                    className="rounded-lg shadow-lg border-white p-4 border-4 mx-auto w-full object-contain w-full sm:max-w-[90%] md:max-w-[1100px] "
                    />
                   
                </section>
              </div>  
        
        </div>
    );
};


export default HeroProject;