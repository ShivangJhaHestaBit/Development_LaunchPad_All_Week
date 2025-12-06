import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  brand: Joi.string().min(2).max(100).required(),
  category: Joi.string().min(2).max(100).required(),
  tags: Joi.array().items(Joi.string()).default([]),
  cost: Joi.number().positive().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  brand: Joi.string().min(2).max(100),
  category: Joi.string().min(2).max(100),
  tags: Joi.array().items(Joi.string()),
  cost: Joi.number().positive(),
}).min(1);

export const productQuerySchema = Joi.object({
  search: Joi.string().optional(),
  minPrice: Joi.number().min(0).optional(),
  maxPrice: Joi.number().min(0).optional(),
  sort: Joi.string().pattern(/^[a-zA-Z]+:(asc|desc)$/).optional(),
  tags: Joi.string().optional(),
  includeDeleted: Joi.string().valid("true", "false").optional(),
});
