// Mark this component as a client component
"use client";


import React, { useState } from "react";
import Image from "next/image";
import StarRating from "../../components/StarRating";  // Import the star rating component
import { metadata } from "@/components/metadata";


const Services = () => {
    const [ratings, setRatings] = useState({});
    const [message, setMessage] = useState(""); // State for messages
    const [messageType, setMessageType] = useState(""); // State for message type ('success' or 'error')

    const services = [
        {
            id: 1, // Unique service ID
            name: "Stage Show Services",
            description: "We provide comprehensive Stage Show Services, including venue, database, and crowd management. Our expert professionals ensure the efficient and secure management of events. We handle every aspect, from planning to execution, with a focus on timely implementation and hassle-free management. Our services are available 24/7 in Delhi NCR and across India, utilizing advanced techniques and methodologies to meet clients' precise needs.",
            image: "/images/stage-show.jpg", // Replace with your image path
        },
        {
            id: 2, // Unique service ID
            name: "Product Launch Services",
            description: "We offer Product Launch Services leveraging the skills of our expert professionals and creative team. Many companies depend on our services to meet their diverse needs. Our services are meticulously managed from start to finish using the latest techniques. Available 24/7 in Delhi NCR and across India, we ensure a seamless and effective launch process.",
            image: "/images/product-laung.jpg", // Replace with your image path
        },
        {
            id: 3, // Unique service ID
            name: "Annual Meeting Service",
            description: "With dedication and expertise, our professionals excel in organizing Annual Meetings tailored to meet corporate requirements and culture. Our experienced team ensures that each event is meticulously planned and executed to fulfill client needs. We begin by understanding your requirements, then collaborate to deliver innovative, cost-effective solutions. Our services are highly sought after in the corporate sector for their quality and precision.",
            image: "/images/annual-meeting.jpg", // Replace with your image path
        },
        {
            id: 4, // Unique service ID
            name: "Road Show Management Services",
            description: "Leveraging our expertise, we offer Road Show Management Services designed to create a positive brand image and reach a wide audience. Our approach involves thorough research to identify the most effective locations for your road show, ensuring maximum impact. We use advanced tools and methods to deliver services that are celebrated for their lasting effects and minimal maintenance. Our services are well-regarded for their timely execution and efficiency, making them a valuable asset for establishing a strong market presence.",
            image: "/images/Road Show.jpg", // Replace with your image path
        },
        {
            id: 5, // Unique service ID
            name: "Birthday Party Management Services",
            description: "Utilizing our advanced technical facilities, we provide comprehensive Birthday Party Management Services tailored to our clients' specific needs. Our experienced team plans and executes each party with meticulous attention to detail, using high-quality materials for decoration. Renowned for its timely execution and cost-effectiveness, this service is highly valued by our clients. We work closely with clients to understand their exact requirements, ensuring flawless execution from start to finish.",
            image: "/images/birthday-party.jpg", // Replace with your image path
        },
        {
            id: 6, // Unique service ID
            name: "Light And Sound Management Services",
            description: "We excel in providing exceptional Light and Sound Management Services, executed promptly by our skilled professionals. This service is extensively used across various parties and events, known for its precision, timely implementation, and flexibility. We prioritize client satisfaction and ensure that our solutions meet high standards. Additionally, we offer this service at competitive rates to provide excellent value to our clients.",
            image: "/images/light-sound.jpg", // Replace with your image path
        },
        {
            id: 7, // Unique service ID
            name: "Audio Visual Equipment Rental Services",
            description: "We are a well-regarded provider of high-quality Audio Visual Equipment Rental Services. Our equipment is crafted using top-notch components and the latest technology, adhering to industry standards. Each item is rigorously tested by our quality examiners to ensure superior performance. We offer a range of equipment tailored to meet the diverse needs of our clients, all at competitive prices.",
            image: "/images/audio-visual.jpg", // Replace with your image path
        },
        {
            id: 8, // Unique service ID
            name: "Conference & Exhibition Services",
            description: "we specialize in delivering top-notch conference and exhibition solutions that leave a lasting impact. From seamless event coordination to advanced audiovisual setups, we ensure your event stands out. Our team works closely with you to create a professional atmosphere, whether it's a small business conference or a large-scale exhibition. With cutting-edge equipment, creative design, and meticulous planning, we transform your vision into a reality, ensuring that your event runs smoothly and successfully.",
            image: "/images/Conference & Exhibition Services.jpg", // Replace with your image path
        },
    ];


    // Function to update rating for a specific service
    const handleRatingChange = (newRating) => {
        setMessage(`Thank you for rating with ${newRating} stars!`);
        setMessageType("success");

        // Optionally, clear message after a few seconds
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    return (
        <>
        <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
        <section id="services" className="py-10 md:py-20 bg-[#0b090a] text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 mt-10">Our <span className="logo">Services</span></h2>

                {/* Display message */}
                {message && (
                    <div className={`mb-4 p-2 rounded ${messageType === "success" ? "bg-green-500" : "bg-red-500"}`}>
                        <p className="text-white">{message}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="relative p-4 bg-[#0a0908] rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] hover:shadow-lg overflow-hidden">
                            <Image src={service.image} alt={service.name} width={400} height={300} className="w-full h-40 md:h-48 object-cover mb-4 rounded-lg transition-transform transform hover:scale-105" />
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{service.name}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>

                            {/* Star Rating with serviceId */}
                            <StarRating serviceId={service.id} onRatingChange={handleRatingChange} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
</>
    );
};


export default Services;