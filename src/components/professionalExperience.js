import React from "react";
import ToggleBox from "./toggleBox";

// Create Array of job exp
const jobExperiences = [
    {
        title: 'Jr Fullstack Developer Student At Upright Education',
        description: 'I’m experienced in developing both front-end and back-end technologies, with a strong focus on JavaScript, Python, React, and Node.js. Throughout my boot camp experience, I collaborated with a team using Agile methodologies and Jira to stay organized and deliver high-quality projects. This hands-on experience has strengthened my ability to work efficiently in dynamic, fast-paced environments while maintaining a focus on coding best practices.',
      },
      {
        title: 'Assistant F&B Manager At HMSHOST',
        description: 'I have extensive experience managing food and beverage teams at various locations, including Burger King, Popeyes, and as a Manager at Starbucks in a plaza setting. My role involved overseeing smooth daily operations, ensuring high levels of customer satisfaction, managing inventory and ordering supplies, and maintaining communication with the district manager via email. Additionally, I took on extra responsibilities, providing training for new staff to improve team efficiency and service quality across the plaza.',
      },
      {
        title: 'Manager for Starbucks at HMSHOST',
        description: 'I began my career at Starbucks as a barista and worked my way up to a management role, where I led a team of baristas while ensuring the highest standards of service and customer interaction. I successfully built a strong, motivated team and turned around our performance by utilizing Starbucks systems and adhering to company guidelines. This leadership allowed us to overcome challenges and emerge from low-performing zones, ultimately becoming one of the top Starbucks locations in the area.',
      }

    ];

    const ProfessionalExperience = () => {
        return (
            <section>
              <div className="flex justify-center text-center p-4 ">
            <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5rem] tracking-tight max-w-full tracking-tight max-w-full"
        style={{
        fontFamily: "Poppins, sans-serif",
        
        textShadow: "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
        }}>
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