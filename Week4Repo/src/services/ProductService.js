import ProductRepository from "../repositories/ProductRepository.js";

class ProductService {
    static async softDeleteProduct(id) {
        const deletedProduct = await ProductRepository.softDelete(id);
        if (!deletedProduct) {
            throw new Error("Product not found");
        }
        return deletedProduct;
    }
    static async updateProduct(id, data) {
        return ProductRepository.update(id, data);
    }
    static async getProducts(queryParams) {
        const {
            search,
            minPrice,
            maxPrice,
            sort,
            tags,
            includeDeleted
        } = queryParams;
        const filter = { deletedAt: null };
        if (includeDeleted === "true") {
            delete filter.deletedAt;
        }
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: "i" } },
                { brand: { $regex: search, $options: "i" } },
                { tags: { $regex: search, $options: "i" } }
            ];
        }
        if (minPrice || maxPrice) {
            filter.cost = {};
            if (minPrice) filter.cost.$gte = Number(minPrice);
            if (maxPrice) filter.cost.$lte = Number(maxPrice);
        }
        if (tags && tags.length) {
            filter.tags = { $in: tags };
        }
        let sortOptions = {};
        if (sort) {
            const [field, dir] = sort.split(":");
            sortOptions[field] = dir === "desc" ? -1 : 1;
        }
        return ProductRepository.findProducts(
            filter,
            sortOptions
        );
    }
}

export default ProductService;
