/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
import express from "express";
import UserController from "../controllers/UserController.js";
import validate from "../middlewares/validate.js";
import { createUserSchema, loginUserSchema, updateUserSchema } from "../validations/user.validation.js";
import { addEmailJob } from "../jobs/emailJob.js";

const router = express.Router();

router.post("/register", validate(createUserSchema), UserController.register);
router.post("/login", validate(loginUserSchema), UserController.login);
router.put("/:id", validate(updateUserSchema), UserController.updateUser);
router.get("/test-email", async (req, res) => {
  await addEmailJob("test@example.com", "Test Subject", "Test Message");
  res.send("Email job queued!");
});
export default router;
