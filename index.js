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
    //     firstname: "Harsh",
    //     lastname: "Jha",
    //     password: "hestabit"
    // });
    // const proRepo = new ProductRepository();
    // proRepo.create({
    //     id: 45,
    //     title: "Abcde",
    //     cost: 200
    // });
}
startServer();