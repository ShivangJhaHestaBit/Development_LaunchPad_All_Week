import appLoader from "./src/loaders/apploader.js";
import logger from "./src/utils/logger.js";
async function startServer() {
    const PORT = process.env.PORT || 3000;
    const app = await appLoader();
    app.listen(PORT, () => {
        logger.info(`Server running on http://localhost:${PORT}`);
    });
}
startServer();