import { Router } from 'express';
import logger from '../utils/logger.js';
import ProductController from '../controllers/ProductController.js';
const router = Router();

export default function MAIN_ROUTER() {
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
    router.get('/test',(req, res) =>{
        throw new Error("Something went wrong");
    });
    router.get('/products',ProductController.getProducts);
    router.delete('/products/:id', ProductController.softDelete);
    const routecount = router.stack.length;
    // console.log(router);
    logger.info(`Total Routes: ${routecount}`);
    return router;
}