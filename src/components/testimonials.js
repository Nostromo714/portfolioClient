import React from "react";

const Testimonials = () => {

    return (

        <div className=" flex flex-row border w-full">
            {/* testimonial 1*/}
            
            <div className="border w-full w-1/2 p-7 ">
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nesciunt fugiat ipsam illo aliquam neque cum possimus blanditiis architecto provident pariatur minus, dolorum cupiditate non nulla! Totam velit sequi quam!
                </p>

            </div>

            {/* testimonial 2 */}
            <div className="flex flex-col ">
            <div className="bg-orange-500 text-white p-7">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident facere natus. Id esse voluptate soluta quae! Incidunt, voluptas tempora. Exercitationem est, enim iure nemo ex fugit officiis corrupti labore!</p>

            </div>
            

            {/* testimonial 3 */}
            <div className="bg-gray-500 text-white p-7 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga ducimus quaerat, illum recusandae quidem iure accusamus fugit, non autem nulla enim odit dolores debitis id tempore. Ipsum, eius voluptatem.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Testimonials;

