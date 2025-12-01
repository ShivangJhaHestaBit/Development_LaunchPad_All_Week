import express from "express";
import UserController from "../controllers/UserController.js";
import validate from "../middlewares/validate.js";
import { createUserSchema, loginUserSchema, updateUserSchema } from "../validations/user.validation.js";

const router = express.Router();

router.post("/register", validate(createUserSchema), UserController.register);
router.post("/login", validate(loginUserSchema), UserController.login);
router.put("/:id", validate(updateUserSchema), UserController.updateUser);
export default router;
