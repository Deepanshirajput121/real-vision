import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const dbConnect = async () => {
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI); // Remove deprecated options

        isConnected = mongoose.connection.readyState === 1; // Check if connection is successful
        if (isConnected) {
            console.log("MongoDB connected successfully");
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};