import globalErrorHandler from "./errorMiddleware.js";
export default function loadMiddlewares(app) {
    app.use((req, res, next) => {
        const err = new Error("Route not found");
        err.statusCode = 404;
        next(err);
    });
    app.use(globalErrorHandler);
}
