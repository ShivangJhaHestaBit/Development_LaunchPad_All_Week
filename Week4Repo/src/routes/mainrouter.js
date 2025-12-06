import { Router } from 'express';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../docs/swagger.js";
import logger from '../utils/logger.js';
import userRouter from "./user.route.js";
import productRouter from "./product.route.js";
const router = Router();
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});
router.get('/about', (req, res) => {
    console.log('About');
    res.send('About');
});
router.get('/about/help', (req, res) => {
    console.log('Help');
    res.send('Help');
});
router.get('/test', (req, res) => {
    throw new Error("Something went wrong");
});
router.use("/users", userRouter);
router.use("/products", productRouter);
const routecount = router.stack.length;
logger.info(`Total Routes: ${routecount}`);
// console.log(router);
export default router;