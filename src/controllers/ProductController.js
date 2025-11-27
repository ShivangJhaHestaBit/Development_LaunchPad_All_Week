import ProductService from "../services/ProductService.js";
class ProductController {
  static async getProducts(req, res, next) {
    try {
      const {
        search,
        minPrice,
        maxPrice,
        sort,
        tags
      } = req.query;
      const result = await ProductService.getProducts({
        search,
        minPrice: Number(minPrice),
        maxPrice: Number(maxPrice),
        sort,
        tags: tags ? tags.split(",") : [],
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
