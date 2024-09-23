// const mongoose = require('mongoose');

// const connectDB = async (retries = 5) => {
//     while (retries) {
//         try {
//             await mongoose.connect(process.env.MONGODB_URI, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//             });
//             console.log('MongoDB connected successfully');
//             break; // Exit the loop on successful connection
//         } catch (error) {
//             retries -= 1;
//             console.error('MongoDB connection failed:', error);
//             console.log(`Retrying... ${retries} attempts left`);
//             await new Promise(res => setTimeout(res, 5000)); // Wait 5 seconds before retrying
//         }
//     }
//     if (retries === 0) {
//         console.error('All retries failed. Exiting...');
//         process.exit(1); // Exit the process with failure
//     }
// };

// module.exports = connectDB;
