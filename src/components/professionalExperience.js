import React from "react";
import ToggleBox from "./toggleBox";

// Create Array of job exp
const jobExperiences = [
    {
        title: 'Jr Fullstack Developer Student At Upright Education',
        description: 'Experienced in developing both front and backend technologies. JavaScript, Python, React, Node.js.',
      },
      {
        title: 'Assistant F&B Manager At HMSHOST',
        description: 'Managed a team of food and beverage staff, ensuring smooth operations and high customer satisfaction.',
      },
      {
        title: 'Manager for Starbucks at HMSHOST',
        description: 'Led a team of baristas, maintaining high standards of service and customer interaction while managing day-to-day operations.',
      }

    ];

    const ProfessionalExperience = () => {
        return (
            <section>
            <h1 
        className="text-8xl flex justify-center tracking-tight max-w-full p-10 "
        style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "4rem",
        textShadow: "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
        }}>
        Professional Experience
      </h1>

       {/* Using ToggleBox for job experiences */}
       <div className="flex justify-center mt-8">
        <div className="border-black border-2 p-6 w-full max-w-4xl mx-auto">
          {jobExperiences.map((job, index) => (
            <ToggleBox
              key={index}
              title={job.title}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
     );
    };

export default ProfessionalExperience;