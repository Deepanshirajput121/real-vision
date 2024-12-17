// Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                {/* Footer Top Section */}
                <div className="flex flex-wrap justify-between">
                    {/* About Us Section */}
                    <div className="mb-6 md:mb-9 w-full md:w-3/3 ml-">
                        <h2 className="text-2xl font-bold">ABOUT US</h2>
                        <p className="mt-4 text-gray-400">
                            At Real Vision, we are dedicated to making your event
                            unforgettable. Established in 2000, we have become a
                            trusted name across India, offering high-quality sound systems,
                            DJ setups, and a variety of event services. Available 24/7, we
                            ensure that your event—whether day or night—runs seamlessly and
                            professionally. <strong>Pan India Services available.</strong>
                        </p>
                        <p className="mt-2 text-gray-400">
                            Our service offerings include Stage Show Services, Product
                            Launches, Annual Meeting Management, Road Show Management, and more.
                            With a customer-first approach and expert team, we uphold the highest
                            standards of service at competitive prices. Led by our mentor,
                            Mr. Vijender Singh, whose experience and business acumen have
                            earned us the trust of clients nationwide, we aim to make your event
                            exceptional.
                        </p>


                    </div>

                    {/* Services Section */}
                    <div className="mb-6 md:mb-0 w-full md:w-1/2">
                        <h3 className="font-bold text-lg">Services</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Stage Show Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Projector Rental Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Annual Meeting Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Road Show Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Stage Setup Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Event Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Audio Visual Equipment Rentals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Conference & Exhibition Services
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="w-full md:w-1/3">
                        <h3 className="font-bold text-lg">CONTACT US</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <strong>Head Office:</strong> <br />
                                H.No.-214, Gali No.-1, Sonar Wali Gali, Harbansh Nagar,
                                Reliance Petrol Pump, Meerut Road, Ghaziabad, India 201001.
                            </li>
                            <li>
                                <strong>Branch Offices:</strong> <br />
                                Mumbai, Bangalore
                            </li>
                            <li>
                                <a href="tel:+919716017903, +919312417903, +919582105432" className="hover:text-gray-300">
                                    +91-9582105432 , +91-9312417903, <br />
                                    +91-9716017903
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:realvision.reg@gmail.com"
                                    className="hover:text-gray-300"
                                >
                                    realvision.reg@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500 text-center md:text-left">
                        &copy; 2024 Real Vision AtoZ Services. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex flex-wrap justify-center">
                        <span className="text-gray-500">Follow Us:</span>
                        <a
                            href="https://m.facebook.com/realvisionconference"
                            className="text-gray-500 hover:text-white mx-2"
                            aria-label="Facebook"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://instagram.com/realvision.reg"
                            className="text-gray-500 hover:text-white mx-2"
                            aria-label="Instagram"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
