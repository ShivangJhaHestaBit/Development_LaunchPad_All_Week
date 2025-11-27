export default function globalErrorHandler(err, req, res, next) {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    code: statusCode,
    timestamp: new Date().toISOString(),
    path: req.originalUrl
  });
}
