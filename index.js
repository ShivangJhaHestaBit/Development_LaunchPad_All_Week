import appLoader from "./src/loaders/apploader.js";
import UserRepository from "./src/repositories/UserRepository.js";
import ProductRepository from "./src/repositories/ProductRepository.js";
import logger from "./src/utils/logger.js";
async function startServer() {
    const PORT = process.env.PORT || 3001;
    const app = await appLoader();
    app.listen(PORT, () => {
        logger.info(`Server running on http://localhost:${PORT}`);
    });
    // const userRepo = new UserRepository();
    // userRepo.create({
    //     firstname: "Shivang",
    //     lastname: "Jha",
    //     password: "hestabit"
    // });
    // const proRepo = new ProductRepository();``
    // proRepo.create({
    //     "name": "iPhone 14",
    //     "brand": "Apple",
    //     "category": "Smartphone",
    //     "tags": ["apple", "phone", "ios", "premium"],
    //     "cost": 699
    // });
    // proRepo.create({
    //     "name": "Apple Watch Series 8",
    //     "brand": "Apple",
    //     "category": "Smartwatch",
    //     "tags": ["wearable", "smartwatch", "apple"],
    //     "cost": 399
    // });
    // proRepo.create({
    //     "name": "Sony WH-1000XM5",
    //     "brand": "Sony",
    //     "category": "Audio",
    //     "tags": ["sony", "headphones", "noise-cancelling"],
    //     "cost": 349
    // });
    // proRepo.create({
    //     "name": "Samsung Galaxy S22",
    //     "brand": "Samsung",
    //     "category": "Smartphone",
    //     "tags": ["samsung", "android", "phone", "flagship"],
    //     "cost": 599
    // });
    // proRepo.create({
    //     "name": "MacBook Air M2",
    //     "brand": "Apple",
    //     "category": "Laptop",
    //     "tags": ["laptop", "apple", "m2", "ultrabook"],
    //     "cost": 1199
    // });
}
startServer();