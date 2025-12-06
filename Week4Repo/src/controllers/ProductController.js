import ProductService from "../services/ProductService.js";
class ProductController {
    static async createProduct(req, res, next) {
        try {
            const product = await ProductService.create(req.body);
            res.status(201).json({ success: true, data: product });
        } catch (err) {
            next(err);
        }
    }
    static async updateProduct(req, res, next) {
        try {
            const updated = await ProductService.updateProduct(req.params.id, req.body);
            res.status(200).json({ success: true, data: updated });
        } catch (err) {
            next(err);
        }
    }
    static async getProducts(req, res, next) {
        try {
            const {
                search,
                minPrice,
                maxPrice,
                sort,
                tags,
                includeDeleted
            } = req.query;
            const result = await ProductService.getProducts({
                search,
                minPrice: Number(minPrice),
                maxPrice: Number(maxPrice),
                sort,
                tags: tags ? tags.split(",") : [],
                includeDeleted
            });
            return res.status(200).json({
                success: true,
                data: result
            });
        } catch (err) {
            next(err);
        }
    }
    static async softDelete(req, res, next) {
        try {
            const deletedProduct = await ProductService.softDeleteProduct(
                req.params.id
            );
            res.status(200).json({
                success: true,
                message: "Product soft-deleted successfully",
                data: deletedProduct
            });
        } catch (err) {
            next(err);
        }
    }
}
export default ProductController;
