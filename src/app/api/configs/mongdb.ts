//try to config mongodb localhost
// app/api/configs/mongodb.ts


import mongoose from 'mongoose';

const MONGODB_URI = "mongodb://localhost:27017/nextjs";

export async function connectMongo() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
