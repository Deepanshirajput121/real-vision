import Service from "../../models/Service"; // Correct path
import { dbConnect } from "../../utils/mongodb";
import { NextResponse } from "next/server"; // Ensure you have this import

// POST request ko handle karne ke liye function
export async function POST(request) {
    try {
        // MongoDB se connection establish karein
        await dbConnect();

        const body = await request.json();
        console.log("Request Body:", body); // Add this line
        const { rating, serviceId } = body;

        if (typeof rating === 'undefined' || typeof serviceId === 'undefined') {
            return NextResponse.json({ error: 'Rating ki zaroorat hai' }, { status: 400 });
        }

        // Rating ko Service collection me save karein
        const newService = new Service({ rating, serviceId });
        await newService.save();

        // Example: const newRating = await RatingModel.create({ rating });

        return NextResponse.json({ message: 'Rating successful!' }, { status: 201 });
    } catch (error) {
        console.error("Error adding rating to MongoDB:", error); // Log the exact error
        return NextResponse.json({ error: 'Error adding rating' }, { status: 500 });
    }
}

// Agar aapko GET request ko handle karna hai
export async function GET() {
    try {
        await dbConnect(); // MongoDB se connection


        // Service collection se saari ratings fetch karein
        const services = await Service.find();
        const ratings = services.map(service => service.rating);

        return NextResponse.json({ ratings }, { status: 200 });
    } catch (error) {
        console.error('Error fetching ratings:', error);
        return NextResponse.json({ error: 'Error fetching ratings' }, { status: 500 });
    }
}
