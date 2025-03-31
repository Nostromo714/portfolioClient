import React from "react";

import computerModern from '../assets/images/flipCard/computerModern.jpg'
import karinImg from '../assets/images/testimonials/karin.jpg'
import scottImg from'../assets/images/testimonials/scott1.jpg'

const Testimonials = () => {

    return (
        
        <div className=" flex-col sm:flex-row pt-20">

            {/* testimonial 1 */}
            <div className="flex flex-col sm:flex-row border-2 border-yellow-400">
            <div>

            {/* Font Awesome quotation marks position right
            <div className=" p-3
             ml-8">
              <i className="fa-solid fa-quote-left text-4xl"></i>
            </div> */}

             {/* IMAGE 1
             <div className="flex flex-col items-center sm:items-center sm:-auto  mr-10">
            <img
            src={scottImg}
            alt="Scott Image Link"
            className=" border-2 border-black rounded-full object-cover h-[140px] w-[140px] p-1"
              />
             </div>
            <div className=" pb-5 flex ">
                <p className="text-sm sm:text-sm p-5"> Of all the learners I’ve had the pleasure of teaching, Lucy stands out as one of the most persevering, dedicated, and optimistic. Throughout the course, she consistently demonstrated her problem-solving skills, finding innovative solutions and effectively utilizing a wide range of resources. Lucy’s ability to collaborate and communicate in both pair and team settings made her an invaluable contributor. During her capstone project, she exhibited a high level of professionalism while working with a live client, delivering results that exceeded expectations. Her technical skills have developed impressively, showcasing a strong command of modern web development technologies. I am confident that her aptitude and positive attitude will lead her to great success in her future endeavors, and I look forward to seeing the opportunities she pursues.

                <p> - Scott Gilbert, TA Upright Education - </p> 
                </p>
            </div> */}
            </div>
            </div>

            {/* testimonial 2 */}
            <div className="flex flex-col md:flex-row sm:flex-col ">
            <div className="flex flex-col sm:w-1/2 border-2 border-green-400">

            {/* Font Awesome quotation marks position right */}
            <div className="flex flex-col items-start sm:items-start pt-3 ml-10">
              <i className="fa-solid fa-quote-left text-4xl"></i>
            </div>

               {/* IMAGE 2 */}
            <div className="flex flex-col items-center sm:items-center sm:-auto ">
            <img
            src={karinImg}
            alt="Karin link img"
            className=" border-2 border-black rounded-full object-cover h-[100px] p-1"
              />
            <div className=" text-white p-4 flex ">
                <p className="flex-row text-sm sm:text-sm p-5 text-sm">
                  Lucy is one of the most determined and resourceful people I’ve had the pleasure of mentoring. She brings a strong problem-solving mindset to every challenge, tackling unfamiliar concepts with persistence and curiosity. One of her greatest strengths is her empathy—she has a natural ability to put herself in a client’s shoes, which makes her not only a thoughtful developer but also a great collaborator. Even while working outside of her comfort zone, she’s always eager to learn, quick to adapt, and deeply committed to building intuitive, user-centered solutions. Watching her grow her skills and build a strong portfolio from the ground up has been inspiring. Any team would be lucky to have her!
              <p> - Karin Eichelman, Software Engineer</p>
              </p>  

            </div>
            </div>
            </div>
            {/* testimonial 3 */}
            <div className="flex flex-col h-full sm:w-1/2 border-2 border-purple-700">

            {/* Font Awesome quotation marks position right  */}
            <div className="flex flex-col items-start sm:items-start pt-3 ml-10">
              <i className="fa-solid fa-quote-left text-4xl"></i>
            </div>

               {/* IMAGE 3 */}
               <div className="flex flex-col items-center sm:items-center sm:-auto ">
            <img
            src={scottImg}
            alt="Karin link img"
            className=" border-2 border-black rounded-full object-cover h-[100px] p-1"
              />
              
            <div className=" text-white p-4 flex ">
                <p className="text-sm sm:text-sm"> Of all the learners I’ve had the pleasure of teaching, Lucy stands out as one of the most persevering, dedicated, and optimistic. Throughout the course, she consistently demonstrated her problem-solving skills, finding innovative solutions and effectively utilizing a wide range of resources. Lucy’s ability to collaborate and communicate in both pair and team settings made her an invaluable contributor. During her capstone project, she exhibited a high level of professionalism while working with a live client, delivering results that exceeded expectations. Her technical skills have developed impressively, showcasing a strong command of modern web development technologies. I am confident that her aptitude and positive attitude will lead her to great success in her future endeavors, and I look forward to seeing the opportunities she pursues.
                  <p>-  Scott Gilbert, TA Upright Education -</p>
                </p>

            </div>
            </div>
            </div>
            </div>


            
        </div>
    )
}

export default Testimonials;

