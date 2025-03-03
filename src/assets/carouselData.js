// imports for StorySphereImg 
import storySphereImg1 from '../assets/images/storySphereImg/storySphereImg1.jpg'
import blogBackEndJpg from '../assets/images/storySphereImg/blogBackEnd.jpg'
import blogPageJpg from '../assets/images/storySphereImg/blogPage.jpg'
import blogPageCode from '../assets/images/storySphereImg/blogPageCode.jpg'
import commentJpg from '../assets/images/storySphereImg/commentPage.jpg'
import commentCode from '../assets/images/storySphereImg/commentCode.jpg'

// imports for Modal and Carousel
import modalWrapperImg from '../assets/images/modalAndCarouselImg/modalWrapperImg.jpg'
import modalCode from '../assets/images/modalAndCarouselImg/modalWrapperCode.jpg'
import carouselCode from '../assets/images/modalAndCarouselImg/carouseCode.jpg'

// imports for Contact Form
import contactForm1 from '../assets/images/contactForm/contactFormImg1.jpg'
import contactFormCode from '../assets/images/contactForm/contactFormCode.jpg'
import routerContactCode from '../assets/images/contactForm/routerContactCode.jpg'
import modalContactCode from '../assets/images/contactForm/modalContact.jpg'
import envGitignore from '../assets/images/contactForm/envGitignore.jpg'




// Story Sphere Data Presentation 
export const storySphere = [
  {
    src: storySphereImg1, // image 1
    alt: "StorySphere Home Page",
    description: "StorySphere is a full-stack blog platform built with the MERN stack. Designed to showcase a client's book and short stories, I worked as a full-stack developer, with a primary focus on developing the blog management system and implementing the comment system for user engagement."
  },
  {
    src: blogBackEndJpg , // image 2
    alt: "Blog BackEnd Code",
    description: "I built this backend using Express, MongoDB, and Mongoose to manage and organize blog posts and pages. The app supports full CRUD operations, links blog posts to pages with MongoDB relationships, and efficiently populates data with Mongoose population. It uses modular routes for scalability, implements basic error handling, and structures data with flexible NoSQL models. Upcoming improvements include user authentication, unit testing, enhanced API documentation, and deployment to Heroku or AWS. This project demonstrates my ability to design a scalable backend system with efficient data handling."
  },
  {
    src: blogPageJpg,  // image 3
    alt: "Blog Page Code",
    description: "The Blog Page showcases blogs from newest to oldest, displaying the title, author, and a preview of the content. Users can click 'Read More' to open and view the full blog post.",
  },
  {
    src: blogPageCode,  //image 4
    alt: "Image 1 for carousel",
    description: "The BlogPage component uses React hooks like useState and useEffect to fetch blog data from an API. It stores the blogs in state with useState and sorts them by creation date. Each blog displays a preview, and users can click 'Read More' to view the full content, which is conditionally rendered based on the selectedBlog state. The component also uses a CommentSection that receives the selected blog's ID as a prop. Error handling is implemented to manage API fetch failures.",
  },
  {
    src: commentJpg,  // image 5
    alt: " Full BlogPage With Comment",
    description:"This component displays the full blog post along with a comment section that enables visitor interaction with the author. To ensure each comment is associated with a specific blog, I implemented a blogId in the comment data. Comments are dynamically added in real-time by updating the state after a successful POST request, allowing the UI to reflect new comments immediately.",
  },
  {
    src: commentCode,  // image 6
    alt: "Image 1 for carousel",
    description:"In the CommentSection, I utilized React hooks (useState, useEffect) to manage local state and side effects. useState is used for tracking comments, the comment input (newComment), and the author's name (author). useEffect handles side effects by making API calls—specifically, it triggers a GET request to fetch comments for a specific blog whenever the blogId prop changes."

,
  }
];

// Modal With Carousel Presentation 
export const modalCarousel = [
  {
    src: modalWrapperImg, // image 1
    alt: "Modal and Carousel",
    description: "Carousel Nested in Modal. This was my first time building either of these components, so I started with the carousel, followed by the modal. If I were more seasoned, I probably would’ve done it the other way around. The challenge was passing styles down through each part and making sure everything fit together, especially with the carousel nested inside the modal. In the end, it all came together, and it was a valuable learning experience!"
  },
  {
    src: modalCode,   //image2
    alt: "Modal Wrapper Code",
    description: "This Modal Wrapper component renders a modal with an embedded carousel. The modal opens when a button (containing an image and title) is clicked, and it displays a carousel of images or content inside. State management is handled with React hooks (useState), controlling the modal’s visibility and the carousel's active slide. The modal can be closed by clicking outside of it, and the carousel updates its index as the user navigates through the slides. The layout is responsive, adjusting to various screen sizes using Tailwind CSS."
  },
  {
    src: carouselCode,   //image 3
    alt: "Carousel Code",
    description: "This Carousel component displays a series of images with descriptions, (witch you are reading right now), allowing users to navigate between slides using Bootstrap icons (BsArrowLeftCircle and BsArrowRightCircle). The active slide is controlled via props (activeIndex), and the onSlideChange function updates the index when arrows are clicked. Arrow clicks trigger index adjustments, ensuring smooth transitions through the slides. The layout is centered with responsive styling using Tailwind CSS, while the Bootstrap icons are styled with hover effects for improved user experience.2."
  }
];
  
export const contactForm = [
  {
    src: contactForm1, // Project 3 Image 1
    alt: "contact form submission ",
    description: "In this project, I’ve implemented a contact form that allows users to send messages directly to my email. The frontend, built with React and tailwind CSS. When a user submits the form, the data is securely sent to the backend, where the MERN stack handles the request. Using Node.js with Nodemailer, the backend sends an email to my specified address, ensuring smooth and safe communication between the user and me. This feature is designed to be both user-friendly and secure, enabling seamless interaction without exposing sensitive details.",
  },
  {
    src: contactFormCode, // Project 3 Image 2
    alt: "Image 2 for project 3",
    description: "This React component features the contact form where users can submit their name, email, and message. The form captures input and sends it to the backend via a POST request. While processing, a 'Sending...' status is shown. On successful submission, a success message is displayed, and the form is cleared; if there's an error, an error message is shown. This provides a simple, user-friendly way for seamless communication with the backend.",
  },
  {
    src: routerContactCode, // Project 3 Image 3
    alt: "Image 3 for project 3",
    description: "This Express backend code handles the submission of a contact form and sends an email notification using Nodemailer. When the frontend sends a POST request with the user's name, email, and message, the server first saves this information to a MongoDB database using the Contact model. After that, the backend creates an email using Gmail's SMTP service and sends it to the specified recipient (defined in the environment variables) with the form data included in the email content. If the email is sent successfully, a success response is returned to the frontend; otherwise, an error message is sent. This code ensures smooth integration between the contact form, database, and email notifications.",
  },
  {
    src: modalContactCode,  // Project 3 Image 4
    alt: "Modal Contact Code",
    description: "This Mongoose model defines a Contact schema for storing contact form submissions in a MongoDB database. It includes three required fields: name, email, and message, with the email field being validated using a regular expression to ensure it follows a valid email format. Additionally, the schema includes a createdAt field that automatically records the date and time each contact form submission is made. The model is designed to handle user input securely and efficiently, ensuring that all necessary data is captured for further processing, such as email notifications. By using this model, the application can easily save and retrieve contact submissions from the database, enabling smooth interaction between the frontend and backend."
  },
  {
    src: envGitignore ,
    alt: "Security",
    description: "In this project, I use a .env file to securely store sensitive credentials like my Gmail username (GMAIL_USER), Gmail app password (GMAIL_APP_PASSWORD), and the recipient email address (RECIPIENT_EMAIL). These variables are referenced in the backend to configure the email transporter for sending contact form submissions. To protect this sensitive data from being exposed, the .env file is included in .gitignore, ensuring that it is never committed to the version control system or shared publicly. This approach ensures the security of my email credentials while allowing the application to send notifications securely."
  }
  
];
  