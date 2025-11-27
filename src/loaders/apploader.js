import loadEnv from "../config/env.js";
import expressLoader from "./express.js";
import loadMiddlewares from "../middlewares/mwloader.js";
import dbLoader from "./db.js";
import UserModel from "../models/user.js";
import MAIN_ROUTER from "../routes/mainrouter.js";
import UserRepository from "../repositories/UserRepository.js";
export default async function appLoader() {
  loadEnv();
  const app = expressLoader();
  const db = await dbLoader();
  loadMiddlewares(app);
  app.use(MAIN_ROUTER());
  return app;
}