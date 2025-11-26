import { MongoClient } from "mongodb";
import logger from "../utils/logger.js";
export default async function dbLoader() {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        logger.error(" MONGO_URI not found in env");
        process.exit(1);
    }
    const client = new MongoClient(uri);
    try {
        await client.connect();
        logger.info("MongoDB connected!");
        const db = client.db();
        return db;

    } catch (err) {
        logger.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
