// imports for StorySphereImg 
import storySphereImg1 from '../assets/images/storySphereImg/storySphereImg1.jpg'
import blogBackEndJpg from '../assets/images/storySphereImg/blogBackEnd.jpg'
import blogPageJpg from '../assets/images/storySphereImg/blogPage.jpg'
import blogPageCode from '../assets/images/storySphereImg/blogPageCode.jpg'
import commentJpg from '../assets/images/storySphereImg/commentPage.jpg'
import commentCode from '../assets/images/storySphereImg/commentCode.jpg'

// imports for Modal and Carousel
import modalAndCarouselImg1 from '../assets/images/modalAndCarouselImg/modalWrapperCode.jpg'


//import modalAndCarouselImg1 from '../assets/images/modalAndCarouselImg/carouseCode.jpg'




// Story Sphere Data Presentation 
export const storySphere = [
  {
    src: storySphereImg1,
    alt: "StorySphere Home Page",
    description: "StorySphere is a full-stack blog platform built with the MERN stack. Designed to showcase a client's book and short stories, I worked as a full-stack developer, with a primary focus on developing the blog management system and implementing the comment system for user engagement."
  },
  {
    src: blogBackEndJpg ,
    alt: "Blog BackEnd Code",
    description: "I built this backend using Express, MongoDB, and Mongoose to manage and organize blog posts and pages. The app supports full CRUD operations, links blog posts to pages with MongoDB relationships, and efficiently populates data with Mongoose population. It uses modular routes for scalability, implements basic error handling, and structures data with flexible NoSQL models. Upcoming improvements include user authentication, unit testing, enhanced API documentation, and deployment to Heroku or AWS. This project demonstrates my ability to design a scalable backend system with efficient data handling."
  },
  {
    src: blogPageJpg,
    alt: "Blog Page Code",
    description: "The Blog Page showcases blogs from newest to oldest, displaying the title, author, and a preview of the content. Users can click 'Read More' to open and view the full blog post.",
  },
  {
    src: blogPageCode,
    alt: "Image 1 for carousel",
    description: "The BlogPage component uses React hooks like useState and useEffect to fetch blog data from an API. It stores the blogs in state with useState and sorts them by creation date. Each blog displays a preview, and users can click 'Read More' to view the full content, which is conditionally rendered based on the selectedBlog state. The component also uses a CommentSection that receives the selected blog's ID as a prop. Error handling is implemented to manage API fetch failures."

,
  },
  {
    src: commentJpg,
    alt: " Full BlogPage With Comment",
    description:"This component displays the full blog post along with a comment section that enables visitor interaction with the author. To ensure each comment is associated with a specific blog, I implemented a blogId in the comment data. Comments are dynamically added in real-time by updating the state after a successful POST request, allowing the UI to reflect new comments immediately."

,
  },
  {
    src: commentCode,
    alt: "Image 1 for carousel",
    description:"In the CommentSection, I utilized React hooks (useState, useEffect) to manage local state and side effects. useState is used for tracking comments, the comment input (newComment), and the author's name (author). useEffect handles side effects by making API calls—specifically, it triggers a GET request to fetch comments for a specific blog whenever the blogId prop changes."

,
  }
];

// Modal And Carousel Data Presentation 
export const projectTwoSlides = [
  {
    src: "https://picsum.photos/600/400/?random", // Project 2 Image 1
    alt: "Modal and Carousel",
    description: "Modal With Carousel"
  },
  {
    src: modalAndCarouselImg1, 
    alt: "Modal and Carousel",
    description: "Modal Wrapper code"
  },
  {
    src: "https://picsum.photos/600/400/?random&blur", // Project 2 Image 3
    alt: "Modal and Carousel",
    description: "Here we show another angle or part of the Project 2."
  }
];
  
export const projectThreeSlides = [
  {
    src: "https://picsum.photos/600/400/?random", // Project 3 Image 1
    alt: "Image 1 for project 3",
    description: "Carousel Code ",
  },
  {
    src: "https://picsum.photos/600/400/?random&grayscale", // Project 3 Image 2
    alt: "Image 2 for project 3",
    description: "This is an image of the 2nd feature in Project 3.",
  },
  {
    src: "https://picsum.photos/600/400/?random&blur", // Project 3 Image 3
    alt: "Image 3 for project 3",
    description: "Here we show another angle or part of the Project 3.",
  }
];
  