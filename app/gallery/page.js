import React from "react";
import Image from "next/image";

const Gallery = () => {
    // Correct image paths (relative to the public folder)
    const images = [
        "/images/img11jpg.jpg",
        "/images/img13.jpg",
        "/images/events.jpg.jpeg",
        "/images/dj1.jpg",
        "/images/lights-show.jpg",
        "/images/new10.jpg",
        "/images/img12.jpg",
        "/images/img14.jpg",
        "/images/audio-visual.jpg",
        "/images/mic.jpg",
        "/images/img5.jpg",
        "/images/dj5.jpd.jpg",
        "/images/ex.jpg",
        "/images/img7.jpg",
        "/images/dj3.jpg",
        "/images/img19.jpg",
        "/images/dj8.jpg",
        "/images/ram.jpg.jpeg",
    ];

    return (
        <section id="gallery" className="py-20 bg-[#0b090a] text-center">
            <div className="container mx-auto px-4">
                <h2 className="logo text-3xl sm:text-4xl font-bold mb-8 ">
                    Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg"
                        >
                            {/* Using Next.js Image component for optimization */}
                            <Image
                                src={image}
                                alt={`Event ${index + 1}`}
                                width={500} // Set an appropriate width
                                height={500} // Set an appropriate height
                                layout="responsive" // Ensures responsiveness
                                objectFit="cover" // Ensures the image covers the area
                                className="transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
                {/* Back to Home Button */}
                <div className="btn-group mb-10 mt-5 sm:mt-10">
                    <a
                        href="/"
                        className="px-6 py-2 bg-[#660708] hover:bg-[#8b0000] text-white font-bold rounded-lg text-lg md:text-xl transition-all"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

export const metadata = {
    title: "Real Vision | Event Highlights & Portfolio",
    description:
        "Explore our gallery of successful events featuring Real Vision's DJ services, sound systems, and more. Get a glimpse of the high-quality services we offer for events across India.",
};
