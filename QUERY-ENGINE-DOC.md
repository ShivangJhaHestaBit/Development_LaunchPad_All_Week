# Query Engine Documentation

## Overview

The query engine is a dynamic filtering and search system for products that allows clients to build complex queries through URL query parameters. It processes multiple filter types simultaneously and constructs MongoDB queries dynamically.

## API Flow

Request flows through: Route Handler → Validation Middleware → ProductController → ProductService (Query Engine) → ProductRepository → MongoDB → Response

The query engine logic is implemented in `ProductService.getProducts()` using a builder pattern that initializes a base filter, conditionally adds filters based on parameters, builds sort options, and executes the query.

## Supported Query Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `search` | string | Text search across name, brand, and tags | `?search=iphone` |
| `minPrice` | number | Minimum price filter | `?minPrice=500` |
| `maxPrice` | number | Maximum price filter | `?maxPrice=1000` |
| `tags` | string (comma-separated) | Filter by tags (exact match) | `?tags=apple,phone` |
| `sort` | string | Sort field and direction | `?sort=cost:asc` |
| `includeDeleted` | string | Include soft-deleted products | `?includeDeleted=true` |

## How Filters Work

### Base Filter (Soft Delete)
Starts with excluding soft-deleted products (`deletedAt: null`). If `includeDeleted` is "true", this filter is removed entirely.

### Dynamic Search Filter
When `search` parameter is provided, it performs case-insensitive regex search across `name`, `brand`, and `tags` fields using MongoDB's `$or` operator. Matches partial strings (e.g., "iph" matches "iPhone").

### Price Range Filter
Uses MongoDB comparison operators (`$gte` for minPrice, `$lte` for maxPrice) on the `cost` field. Supports min-only, max-only, or range queries. Automatically converts string parameters to numbers.

### Tag Filter
Controller converts comma-separated tag string to array. Service uses MongoDB's `$in` operator to match products that have any of the specified tags (OR logic).

### Sort Options
Parses format `field:direction` (e.g., `cost:asc` or `cost:desc`) and converts to MongoDB sort format. Supports ascending (1) or descending (-1) order on any field.

## Filter Combination Logic

All filters are **AND-combined** (all conditions must match), except:
- **Search filter** uses `$or` internally (matches name OR brand OR tags)
- **Tag filter** uses `$in` (matches any tag in the provided list)

Example: `GET /products?search=apple&minPrice=500&tags=phone,smartphone&sort=cost:desc` combines all filters - product must match search term AND price range AND have at least one tag AND be sorted by cost descending.

## Implementation Layers

**Controller Layer**: Extracts query parameters, converts `tags` from comma-separated string to array, converts price strings to numbers, passes normalized params to service.

**Service Layer**: Query engine core - builds filter object dynamically based on provided parameters, handles conditional filter addition, constructs sort options, delegates to repository.

**Repository Layer**: Receives constructed filter and sort options, applies additional soft-delete filter if needed, executes MongoDB query.

## Validation

Query parameters are validated using Joi schema before processing. Invalid parameters return 400 status with validation error details. All parameters are optional, allowing flexible query combinations.

## Benefits

- **Flexibility**: Clients can combine any filters as needed
- **Performance**: Single database query instead of multiple round trips
- **Maintainability**: Filter logic centralized in service layer
- **Extensibility**: Easy to add new filter types without breaking existing code
- **Type Safety**: Validation ensures correct parameter types
