import React from "react";
import computerModern from '../assets/images/flipCard/computerModern.jpg'

const Testimonials = () => {

    return (
        
        <div className=" flex-col sm:flex-row pt-20">

            {/* testimonial 1 */}
            <div className="flex flex-col sm:flex-row p-2 border-2 border-yellow-400">

            {/* Font Awesome quotation marks position right */}
            <div className="flex flex-col absolute items-start sm:items-start p-2">
              <i className="fa-solid fa-quote-left text-4xl"></i>
            </div>

             {/* IMAGE 1 */}
             <div className="flex flex-col items-center sm:items-center sm:-auto ">
            
            <img
            src={computerModern}
            alt="computer"
            className=" border-2 border-black rounded-full object-cover w-32 h-32"
              />

            <div className=" p-7 flex ">
                <p className="text-sm sm:text-sm"> Of all the learners I’ve had the pleasure of teaching, Lucy stands out as one of the most persevering, dedicated, and optimistic. Throughout the course, she consistently demonstrated her problem-solving skills, finding innovative solutions and effectively utilizing a wide range of resources. Lucy’s ability to collaborate and communicate in both pair and team settings made her an invaluable contributor. During her capstone project, she exhibited a high level of professionalism while working with a live client, delivering results that exceeded expectations. Her technical skills have developed impressively, showcasing a strong command of modern web development technologies. I am confident that her aptitude and positive attitude will lead her to great success in her future endeavors, and I look forward to seeing the opportunities she pursues.

                <p> - Scott Gilbert, TA Upright Education - </p> 
                </p>
            </div>
            </div>
            </div>

            {/* testimonial 2 */}
            <div className="flex flex-col sm:flex-row ">
            <div className="flex flex-col sm:w-1/2 border-2 border-green-400">

            {/* Font Awesome quotation marks position right */}
            <div className="flex flex-col absolute items-start sm:items-start  p-2">
              <i className="fa-solid fa-quote-left text-4xl"></i>
            </div>

               {/* IMAGE 2 */}
            <div className="flex flex-col items-center sm:items-center sm:-auto ">
            <img
            src={computerModern}
            alt="computer"
            className=" border-2 border-black rounded-full object-cover w-32 h-32 "
              />
              
            <div className=" text-white p-7 flex ">
                <p className="text-sm sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti laboreLorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore</p>

            </div>
            </div>
            </div>
            {/* testimonial 3 */}
            <div className="flex flex-col h-full sm:w-2/3 border-2 border-purple-700">

            {/* Font Awesome quotation marks position right  */}
            <div className="flex flex-col absolute items-start sm:items-start p-2">
              <i className="fa-solid fa-quote-left text-4xl"></i>
            </div>

               {/* IMAGE 3 */}
            <div className="flex flex-col items-center sm:items-center sm:-auto ">
            <img
            src={computerModern}
            alt="computer"
            className=" border-2 border-black rounded-full object-cover w-32 h-32 "
              />
              
            <div className=" text-white p-7 flex ">
                <p className="text-sm sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti laboreLorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore</p>

            </div>
            </div>
            </div>
            </div>


            
        </div>
    )
}

export default Testimonials;

