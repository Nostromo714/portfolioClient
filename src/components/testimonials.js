import React from "react";
import computerModern from '../assets/computerModern.jpg'

const Testimonials = () => {

    return (
        
        <div className=" flex-col sm:flex-row ">

            {/* testimonial 1 */}
            <div className="flex flex-col sm:flex-row border-2 border-yellow-400">
             {/* IMAGE 1 */}
             <div className="flex-col items-center ">
            <img
            src={computerModern}
            alt="computer"
            className=" border-2 border-black "
              />

            <div className=" p-7 flex ">
                <p className="text-sm sm:text-sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nesciunt fugiat ipsam illo aliquam neque cum possimus blanditiis architecto provident pariatur minus, dolorum cupiditate non nulla! 
                </p>
            </div>
            </div>
            </div>

            {/* testimonial 2 */}
            <div className="flex flex-col sm:flex-row ">
            <div className="flex flex-col sm:w-1/2 border-2 border-green-400">
               {/* IMAGE 2 */}
            <div className="flex-col items-center ">
            <img
            src={computerModern}
            alt="computer"
            className=" border-2 border-black "
              />
              
            <div className=" text-white p-7 flex ">
                <p className="text-sm sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore!</p>

            </div>
            </div>
            </div>
            {/* testimonial 3 */}
            <div className="flex flex-col h-full sm:w-2/3 border-2 border-purple-700">
               {/* IMAGE 3 */}
            <div className="flex-col items-center">
            <img
            src={computerModern}
            alt="computer"
            className=" border-2 border-black"
              />
              
            <div className=" text-white p-7 flex ">
                <p className="text-sm sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore!</p>

            </div>
            </div>
            </div>
            </div>


            
        </div>
    )
}

export default Testimonials;

