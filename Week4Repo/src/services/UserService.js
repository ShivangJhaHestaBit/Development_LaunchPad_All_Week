import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

class UserService {
  static async register(data) {
    const { name, email, password } = data;

    const existing = await UserModel.findOne({ email });
    if (existing) {
      const error = new Error("Email already registered");
      error.statusCode = 400;
      throw error;
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hash,
    });

    const userObj = user.toObject();
    delete userObj.password;

    return userObj;
  }

  static async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }
    const userObj = user.toObject();
    delete userObj.password;

    return userObj;
  }
}

export default UserService;
