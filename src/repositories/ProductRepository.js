import product from "../models/products.js";
export default class ProductRepository {
    async create(data) {
        const pro = new product(data);
        return await pro.save();
    }
    static async findById(id, includeDeleted = false) {
        const filter = { _id: id };
        if (!includeDeleted) {
            filter.isDeleted = false;
        }
        return product.findOne(filter);
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
    static async softDelete(id) {
        return product.findByIdAndUpdate(
            id,
            { isDeleted: true, deletedAt: new Date() },
            { new: true }
        );
    }
    static async findProducts(filter, sortOptions, includeDeleted) {
        if (!includeDeleted) {
            filter.isDeleted = false;
        }
        return product
            .find(filter)
            .sort(sortOptions)
            .exec();
    }
}
