import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: false // Make it optional
    },

    rating: {
        type: Number,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    }
});

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema);
export default Service;
