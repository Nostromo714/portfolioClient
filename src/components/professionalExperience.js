import React from "react";
import ToggleBox from "./toggleBox";

// Create Array of job exp
const jobExperiences = [
  {
    title: "Jr Fullstack Developer Student At Upright Education",
    description:
      "Built full-stack web applications using React, Node.js, Express and MongoDB. Collaborated in Agile teams using Git and Jira. Focused on responsive UI development, REST APIs, and database integration while following clean code and debugging best practices.",
  },
  {
    title: "Assistant F&B Manager At HMSHOST",
    description:
      "Managed daily operations across multiple food service locations including Burger King, Popeyes, and Starbucks. Oversaw inventory, scheduling, and team training while maintaining strong customer service standards and communication with district management.",
  },
  {
    title: "Manager for Starbucks at HMSHOST",
    description:
      "Promoted from barista to store manager, leading a team in daily operations and customer service. Improved store performance through structured leadership, operational consistency, and adherence to company standards.",
  },
];

const ProfessionalExperience = () => {
  return (
    <section>
      <div className="flex justify-center text-center p-4 ">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5rem] tracking-tight max-w-full tracking-tight max-w-full"
          style={{
            fontFamily: "Poppins, sans-serif",

            textShadow:
              "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
          }}
        >
          Professional Experience
        </h1>
      </div>

      {/* Using ToggleBox for job experiences */}
      <div className="flex justify-center mt-8 ">
        <div className="rounded-lg w-full max-w-4xl mx-auto">
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
