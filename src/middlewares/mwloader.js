import globalErrorHandler from "./errorMiddleware.js";
import security from "./security.js";
export default function loadMiddlewares(app) {
    security(app);
    app.use(globalErrorHandler);
}