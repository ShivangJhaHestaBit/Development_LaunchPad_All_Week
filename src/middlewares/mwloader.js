import requestTracing from "./requestTracing.js";
import globalErrorHandler from "./errorMiddleware.js";
import security from "./security.js";
export default function loadMiddlewares(app) {
    app.use(requestTracing);
    security(app);
    app.use(globalErrorHandler);
}