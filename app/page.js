"use client"; // Ensures the component is rendered on the client side
import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const images = [
  "/images/group.jpg.jpeg",
  "/images/img7.jpg",
  "/images/img5.jpg",
  "/images/new18.jpg",
  "/images/img3.jpg",
  "/images/light-sound.jpg",
  "/images/dj3.jpg",
];

const HomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Background image styling
  const sectionStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out", // Smooth transition between images
    position: "relative",
    zIndex: 1,
  };

  return (
    <section
      className={`home flex items-start justify-center w-full relative`}
      id="home"
      style={sectionStyle}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Home Content Container */}
      <div className="home-content w-[90vw] h-[85vh] sm:w-[60vw] sm:h-[66vh] flex flex-col items-center justify-center text-center text-white relative z-10">
        {/* Heading Section */}
        <div className="home-content absolute top-[15vh] left-[50%] transform -translate-x-[50%] sm:relative sm:top-0 sm:left-0 sm:transform-none sm:ml-[3vw] ">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-animation"
            style={{
              color: "#ffff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              lineHeight: "1.2", // Adjust line height for phones
            }}
          >
            Welcome
          </h1>

          <h1
            className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-animation"
            style={{
              color: "#ffff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              lineHeight: "1.2", // Adjust line height for phones
            }}
          >
            to Real<span className="logo">Vision</span>
          </h1>

          <h3 className="text-sm sm:text-lg md:text-2xl  text-white animate-fadeIn">
            We are here to help you with your event 
            management needs.
          </h3>
        </div>

        {/* Contact Icons Section */}
        <div className="flex flex-wrap justify-center space-x-4 mb-3.5 sm:mt-10">
          <a
            href="tel:+919716017903"
            className="text-white hover:text-green-500 flex items-center space-x-2"
          >
            <FaPhoneAlt size={28} />
            <span className="hidden sm:inline">Call Us</span>
          </a>

          <a
            href="mailto:realvision.reg@gmail.com"
            className="text-white hover:text-yellow-500 flex items-center space-x-2"
          >
            <FaEnvelope size={28} />
            <span className="hidden sm:inline">Email Us</span>
          </a>

          <a
            href="https://instagram.com/realvision.reg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 flex items-center space-x-2"
          >
            <FaInstagram size={28} />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          <a
            href="https://m.facebook.com/realvisionconference"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 flex items-center space-x-2"
          >
            <FaFacebookF size={28} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
        </div>

        {/* Button Section */}
        <div className="btn-group sm:mt-8">
          <a
            href="/contact"
            className="px-6 py-2 bg-[#660708] hover:bg-[#8b0000] text-white font-bold rounded-lg text-lg md:text-xl transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
