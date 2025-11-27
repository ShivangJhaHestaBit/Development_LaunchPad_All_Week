import product from "../models/products.js";
export default class ProductRepository {
    async create(data) {
        const pro = new product(data);
        return await pro.save();
    }
    async findById(id) {
        return await product.findById(id);
    }
    async findPaginated(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const data = await product
            .find({})
            .skip(skip)
            .limit(limit)
            .lean();
        const total = await product.countDocuments();
        return {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            data
        };
    }
    async update(id, updateData) {
        const pro = await product.findById(id);
        if (!pro) return null;
        Object.assign(pro, updateData);
        await pro.save();
        return pro;
    }
    async delete(id) {
        const result = await product.findByIdAndDelete(id);
        return result;
    }
}
