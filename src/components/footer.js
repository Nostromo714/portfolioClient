import React from "react";
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          
          <div className="flex justify-center space-x-4 mt-2">
            {/* Add social media links */}
            <a href="https://github.com/Nostromo714" className="text-white hover:text-yellow-400">
            <i class="fa-brands fa-github border p-4"></i>
            </a>
            <a href="http://www.linkedin.com/in/lucy-doray-6a5877311" className="text-white hover:text-yellow-400">
            <i class="fa-brands fa-linkedin border p-4"></i></a>
          </div>
          <div className="p-3">
          <p>&copy; {new Date().getFullYear()} Lucy Elizabeth.</p>
          </div>
        </div>
        </footer>
    )
}
export default Footer;