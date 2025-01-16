// /src/pages/home.js
import React from "react";
import ToggleBox from "../components/toggleBox";

const HomePage = () => {
  return (
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-orange-100 to-black relative">
      {/* First section*/}
      <section className="h-screen text-center p-20 ">
        <div className="p-20">
          <h2> &lt; LUCY ELIZABETH /&gt; </h2>
        </div>
        <div className="">
          <h1
            className="text-8xl tracking-tight max-w-full p-10"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "8rem",
              textShadow:
                "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
            }}
          >
            LUCY ELIZABETH
          </h1>
          {/* Spacing between h1 and p */}
          <p className="mt-4 p-8 text-lg text-white">
            FULL-STACK DEVELOPER, UI-ENGINEER, & DESIGNER
          </p>
        </div>

        <div className="mt-auto mb-10">
          <i className="fa-solid fa-code text-6xl"></i>
        </div>
      </section>

      {/* Second section { My Boxes of expertise }*/}
      <section className="h-screen flex flex-col justify-center items-center p-4">
        {/* Header */}
        <h1
          className="text-8xl tracking-tight max-w-full p-10 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "8rem",
            textShadow:
              "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
          }}
        >
          MY EXPERTISE
        </h1>

        <section className="flex flex-col sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg mt-10">
          {/* Box 1 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Software Development</h2>
            <p>
              Experenced in developiing both frount and backend technolies.
              JavaScript, Python,{" "}
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex-1 p-6 bg-opacity-50 border-2 border-black text-white shadow-md">
            <h2 className="text-xl font-semibold">Full-Stack Dev MERN Stack</h2>
            <p>
              Passionate about UI/UX. Over one year experance in html, css, js
              react and nodeJS frameworks
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex-1 p-6  bg-opacity-50 border-2 border-black  text-white shadow-md">
            <h2 className="text-xl font-semibold">Web Design</h2>
            <p>Skilled in creating and desiging with tailwiind css </p>
          </div>
        </section>
      </section>

      {/* Third section */}
      <section
        className="h-screen flex-2 justify-center items-center"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <h1
          className="text-8xl tracking-tight max-w-full p-10 "
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "8rem",
            textShadow:
              "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
          }}
        >
          MY WORK
        </h1>
        <p className="text-lg">
          {" "}
          Built and deployed scalable, responsive web apps with real-time
          features, focusing on high performance and intuitive interfaces using
          React.js, Node.js, and MongoDB. <br /> Passionate about creating
          dynamic, user-centered experiences with secure authentication and
          efficient data management. Continuously driven by problem-solving and
          learning to create maintainable, robust code.
        </p>

        {/*  */}
      </section>
      {/* Right content (Image) */}
      <div
        className="image-content"
        style={{ flex: 1, display: "flex", justifyContent: "center" }}
      >
        <img
          src="your-image-url.jpg"
          alt="Description"
          style={{ maxWidth: "300px", height: "auto" }}
        />
      </div>

      {/* Fourth section */}
      <section className="h-screen flex justify-center items-center"></section>

      {/* Fifth Section Professional Experience */}
      {/* Header */}
      <h1
        className="text-8xl flex justify-center tracking-tight max-w-full p-10 "
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "4rem",
          textShadow:
            "3px 3px 5px rgba(14, 14, 22, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
        }}
      >
        Professional Experience
      </h1>
      
      {/* Using ToggleBox for job experiences */}
      <section className="flex-col justify-center p-5 items-center">
        <ToggleBox
          title="Jr Fullstack Developer Student At Upright Education"
          description="Experienced in developing both front and backend technologies. JavaScript, Python, React, Node.js."
        />

        <ToggleBox
          title="Assistant F&B Manager At HMSHOST"
          description="Managed a team of food and beverage staff, ensuring smooth operations and high customer satisfaction."
        />

        <ToggleBox
          title="Manager for Starbucks at HMSHOST"
          description="Led a team of baristas, maintaining high standards of service and customer interaction while managing day-to-day operations."
        />
      </section>
         
        
     

      {/* Testimonials */}
      <section className="h-screen flex justify-center items-center"></section>

      <footer></footer>
    </div>
  );
};

// Ensure default export
export default HomePage;

//git checkout -- file_path
