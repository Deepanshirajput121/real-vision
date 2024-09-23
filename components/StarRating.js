"use client";

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // Font Awesome for stars

// Async function to fetch ratings from the API
const fetchRatings = async () => {
    try {
        const response = await fetch('/api/ratings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });


        if (!response.ok) {
            throw new Error("Failed to fetch ratings");
        }

        const data = await response.json();
        console.log('Rating added successfully:', data);
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error adding rating:', error);
        throw error; // Rethrow the error to be caught in getRatings
    }
};

const StarRating = ({ serviceId, onRatingChange}) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [ratings, setRatings] = useState([]); // Store ratings from the server
    const [error, setError] = useState(""); // Store error messages

    // Function to handle the POST request for adding a new rating
    const addRating = async ( ratingValue ) => {
        try {
            const response = await fetch("/api/ratings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ serviceId, rating: ratingValue }),
            });

            
            if (!response.ok) {
                throw new Error("Failed to add rating");
            }

            const result = await response.json();
            console.log("Rating added successfully:", result);

            // Update the ratings state with the new rating
            setRatings((prevRatings) => [...prevRatings, ratingValue]);

            // Call the callback function to pass the new rating to the parent
            if (onRatingChange) {
                onRatingChange(ratingValue);
            }
        } catch (error) {
            console.error("Error adding rating:", error);
            setError("Failed to add your rating. Please try again.");
        }
    };

    // useEffect to fetch ratings on mount
    useEffect(() => {
        async function getRatings() {
            try {
                const data = await fetchRatings(); // Fetch all ratings
                setRatings(data.ratings || []); // Update the state with the fetched ratings
                setRating(data.averageRating || 0); // Optionally set average rating
                setError(""); // Clear any previous errors
            } catch (error) {
                console.error("Error fetching ratings:", error);
                setError("Failed to fetch ratings.");
            }
        };

        getRatings();
    }, []);


    // Function to get emojis and text based on the rating
    const getEmojiAndText = (rating) => {
        switch (rating) {
            case 1:
                return "😞 Not satisfied! Needs major improvements.";
            case 2:
                return "😕 Below average. Could use some enhancements.";
            case 3:
                return "😊 Decent! A good experience overall.";
            case 4:
                return "😄 Impressive! Very enjoyable service.";
            case 5:
                return "😍 Outstanding! Absolutely loved it!";
            default:
                return "Rate this service";
        }
    };

    // Function to calculate average rating
    const calculateAverageRating = (ratings) => {
        if (ratings.length === 0) return 0;
        const total = ratings.reduce((acc, cur) => acc + cur, 0);
        return (total / ratings.length).toFixed(1);
    };

    // Function to handle rating click
    const handleRatingClick = (ratingValue) => {
        setRating(ratingValue); // Update the rating state
        addRating(ratingValue); // Call addRating on click
    };

    return (
        <div className="star-rating">
            {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}
            <p className="text-gray-500 mt-2">
                Total Average Rating: {calculateAverageRating(ratings)} out of 5
            </p>
            <div className="flex justify-center space-x-1">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => handleRatingClick(ratingValue)} // Update state and call addRating
                                className="hidden"
                            />
                            <FaStar
                                className="star cursor-pointer"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={24}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            <p className="text-gray-400 mt-2">{getEmojiAndText(rating)}</p>
        </div>
    );
};

export default StarRating;
