import User from "../models/user.js";
export default class UserRepository {
    async create(data) {
        const user = new User(data);
        return await user.save();
    }
    async findById(id) {
        return await User.findById(id);
    }
    async findPaginated(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const data = await User
            .find({})
            .skip(skip)
            .limit(limit)
            .lean();
        const total = await User.countDocuments();
        return {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            data
        };
    }
    async update(id, updateData) {
        const user = await User.findById(id);
        if (!user) return null;
        Object.assign(user, updateData);
        await user.save();
        return user;
    }
    async delete(id) {
        const result = await User.findByIdAndDelete(id);
        return result;
    }
}
