import logger from "../utils/logger.js";
function mw1(req, res, next) {
    logger.info('Middleware 1 Loaded!');
    next();
}
function mw2(req, res, next) {
    logger.info('Middleware 2 Loaded!');
    next();
}
function mw3(req, res, next) {
    logger.info('Middleware 3 Loaded!');
    next();
}
function logMiddlewaresLoaded() {
    logger.info('Middlewares loaded!');
}
export default function loadMiddlewares(app) {
    app.use(mw1);
    app.use(mw2);
    app.use(mw3);
    logMiddlewaresLoaded();
}