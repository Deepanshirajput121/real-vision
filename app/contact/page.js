"use client"; // Ensure this is treated as a client-side component
import { useEffect, useState } from "react";
import { contact } from "@/components/contact";

const ContactUs = () => {
    const [metadata, setMetadata] = useState({
        title: "Default Title",
        description: "Default description"
    });

    useEffect(() => {
        if (contact) {
            setMetadata({
                title: contact.title || "Default Title",
                description: contact.description || "Default description"
            });
        }
    }, []);


    // Utility class to avoid repetition
    const cardClasses =
        "bg-[#1a1a1a] shadow-md rounded-lg p-6 hover:bg-gray-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 mb-8"; // Added mb-8 for spacing


    return (
        <>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <section
                className="flex flex-col min-h-screen bg-[#0a0908] py-10 px-5" // Removed sm:min-h to allow more flexibility
                id="contact"
            >
                {/* Title */}
                <div className="max-w-7xl mx-auto flex-grow">
                    <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mt-20 mb-5">
                        Contact <span className="logo">Us</span>
                    </h2>

                    {/* Head Office */}
                    <div className={`${cardClasses} mb-4 sm:mb-8 sm:p-8`}>
                        <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                            Real Vision Events And Conference Services
                        </h3>
                        <address className="text-gray-400 sm:text-lg">
                            <strong>Head Office Address:</strong>
                            <br />
                            H.No.-214, Gali No.-1, Sonar Wali Gali, Harbansh Nagar, Reliance Petrol Pump, Meerut Road, Ghaziabad, India 201001.
                        </address>
                    </div>

                    {/* Branch Offices */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Branch 1 */}
                        <div className={`${cardClasses} mb-4 sm:p-8`}>
                            <h4 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                                Branch Office - Mumbai
                            </h4>
                            <address className="text-gray-400 sm:text-lg">
                                Room No.2, Shah Road Mothinbai Chawl, Chakala, Andheri East, Mumbai-400099
                            </address>
                        </div>

                        {/* Branch 2 */}
                        <div className={`${cardClasses} sm:p-8`}>
                            <h4 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                                Branch Office - Bangalore
                            </h4>
                            <address className="text-gray-400 sm:text-lg">
                                181, Sri Murugan Nilayam, 7th Cross Sadashiva Nagar, Bangalore North, Bangalore - 560080
                            </address>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className={`mt-8 ${cardClasses} sm:p-8`}>
                        <h4 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                            Contact Information
                        </h4>
                        <p className="text-gray-400 sm:text-lg">
                            <strong>Phone Numbers:</strong> +91-9716017903, +91-9312417903, +91-9582105432
                        </p>
                        <p className="text-gray-400 sm:text-lg mt-2">
                            <strong>Email Address:</strong> realvision.reg@gmail.com
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
