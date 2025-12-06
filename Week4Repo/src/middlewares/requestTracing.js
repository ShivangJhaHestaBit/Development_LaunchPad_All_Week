import { v4 as uuidv4 } from "uuid";
import requestlogger from "../utils/requestLogger.js";

export default function requestTracing(req, res, next) {
  // Use incoming request id if provided, else create one
  const requestId = req.headers["x-request-id"] || uuidv4();
  req.requestId = requestId;
  res.setHeader("X-Request-ID", requestId);
  requestlogger.info(`[${requestId}] Incoming request → ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    requestlogger.info(
      `[${requestId}] Response sent → Status: ${res.statusCode}`
    );
  });
  next();
}
