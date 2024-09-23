// // pages/api/ratings.js

// import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//     const client = new MongoClient(process.env.MONGODB_URI);
//     try {
//         await client.connect();
//         const db = client.db('your-database-name');
//         const ratingsCollection = db.collection('ratings');

//         if (req.method === 'GET') {
//             const { serviceId } = req.query;
//             if (!serviceId) {
//                 return res.status(400).json({ message: 'Service ID is required' });
//             }

//             const ratings = await ratingsCollection.find({ serviceId }).toArray();
//             const averageRating = ratings.reduce((acc, cur) => acc + cur.rating, 0) / ratings.length || 0;

//             return res.status(200).json({ ratings, averageRating });
//         } else if (req.method === 'POST') {
//             const { serviceId, rating } = req.body;
//             if (!serviceId || !rating) {
//                 return res.status(400).json({ message: 'Service ID and rating are required' });
//             }

//             await ratingsCollection.insertOne({ serviceId, rating });
//             return res.status(201).json({ message: 'Rating added successfully' });
//         } else {
//             return res.status(405).json({ message: 'Method Not Allowed' });
//         }
//     } catch (error) {
//         console.error('Error handling request:', error);
//         return res.status(500).json({ message: 'Internal Server Error' });
//     } finally {
//         await client.close();
//     }
// }
