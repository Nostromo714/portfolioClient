// imports for StorySphereImg 
import storySphereImg1 from '../assets/images/storySphereImg/storySphereImg1.jpg'
import blogBackEndJpg from '../assets/images/storySphereImg/blogBackEnd.jpg'
import blogPageJpg from '../assets/images/storySphereImg/blogPage.jpg'
import blogPageCode from '../assets/images/storySphereImg/blogPageCode.jpg'
import commentJpg from '../assets/images/storySphereImg/commentPage.jpg'
import commentCode from '../assets/images/storySphereImg/commentCode.jpg'

// imports for Modal and Carousel
import modalCode from '../assets/images/modalAndCarouselImg/modalWrapperCode.jpg'
import carouselCode from '../assets/images/modalAndCarouselImg/carouseCode.jpg'






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
    description: "The BlogPage component uses React hooks like useState and useEffect to fetch blog data from an API. It stores the blogs in state with useState and sorts them by creation date. Each blog displays a preview, and users can click 'Read More' to view the full content, which is conditionally rendered based on the selectedBlog state. The component also uses a CommentSection that receives the selected blog's ID as a prop. Error handling is implemented to manage API fetch failures."

,
  },
  {
    src: commentJpg,  // image 5
    alt: " Full BlogPage With Comment",
    description:"This component displays the full blog post along with a comment section that enables visitor interaction with the author. To ensure each comment is associated with a specific blog, I implemented a blogId in the comment data. Comments are dynamically added in real-time by updating the state after a successful POST request, allowing the UI to reflect new comments immediately."

,
  },
  {
    src: commentCode,  // image 6
    alt: "Image 1 for carousel",
    description:"In the CommentSection, I utilized React hooks (useState, useEffect) to manage local state and side effects. useState is used for tracking comments, the comment input (newComment), and the author's name (author). useEffect handles side effects by making API calls—specifically, it triggers a GET request to fetch comments for a specific blog whenever the blogId prop changes."

,
  }
];

// Modal With Carousel Presentation 
export const projectTwoSlides = [
  {
    src: "https://picsum.photos/600/400/?random", // image 1
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
  