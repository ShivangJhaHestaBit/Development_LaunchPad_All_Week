import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
export default function security(app) {
    app.use(helmet());
    app.use(
        cors({
            origin: ["http://localhost:3001"],
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        })
    );
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 5,
        message: "Too many requests, please try again later.",
    });
    app.use(limiter);
}
