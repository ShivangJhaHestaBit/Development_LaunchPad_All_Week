import UserService from "../services/UserService.js";
import { addEmailJob } from "../jobs/emailJob.js";
class UserController {
    static async register(req, res, next) {
        try {
            const user = await UserService.register(req.body);
            await addEmailJob(
                user.email,
                "Welcome to our app!",
                `Hello ${user.name}, thank you for registering.`
            );
            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: user,
            });

        } catch (err) {
            next(err);
        }
    }
    static async login(req, res, next) {
        try {
            const user = await UserService.login(req.body.email, req.body.password);
            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: user,
            });

        } catch (err) {
            next(err);
        }
    }
    static async updateUser(req, res, next) {
        try {
            res.json({ success: true, message: "update user works" });
        } catch (err) {
            next(err);
        }
    }
}

export default UserController;
