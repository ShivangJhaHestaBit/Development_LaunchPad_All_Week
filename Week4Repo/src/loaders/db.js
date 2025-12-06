import mongoose from "mongoose";
import logger from "../utils/logger.js";
export default async function dbLoader() {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        logger.error(" MONGO_URI not found in env");
        process.exit(1);
    }
    try {
        await mongoose.connect(uri);
        logger.info("MongoDB connected!");

    } catch (err) {
        logger.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
