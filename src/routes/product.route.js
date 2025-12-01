import express from "express";
import ProductController from "../controllers/ProductController.js";
import validate from "../middlewares/validate.js";
import {
  createProductSchema,
  updateProductSchema,
  productQuerySchema
} from "../validations/product.validation.js";

const router = express.Router();
router.post("/", validate(createProductSchema), ProductController.createProduct);
router.get("/", validate(productQuerySchema, "query"), ProductController.getProducts);
router.put("/:id", validate(updateProductSchema), ProductController.updateProduct);
router.delete("/:id", ProductController.softDelete);

export default router;
