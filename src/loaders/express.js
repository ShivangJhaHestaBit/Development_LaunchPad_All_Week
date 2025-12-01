import express from "express";
export default function expressLoader() {
    const app = express();
    app.use(express.json({ limit: "1mb" }));
    app.use(express.urlencoded({ extended: true }));
    return app;
}
