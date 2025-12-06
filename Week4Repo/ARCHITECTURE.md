# Project Structure

## `/src` Folder Organization

The project follows a **layered architecture** pattern with clear separation of concerns:

```
src/
├── config/          # Environment configuration and setup
├── controllers/     # Request/response handling, HTTP layer
├── services/        # Business logic and orchestration
├── repositories/    # Data access layer, database operations
├── models/          # Database schemas and Mongoose models
├── routes/          # API endpoint definitions and routing
├── middlewares/     # Request processing (validation, security, tracing)
├── validations/     # Input validation schemas (Joi)
├── jobs/            # Background job queues and workers
├── loaders/         # Application initialization modules
├── utils/           # Shared utilities (logging, helpers)
└── docs/            # API documentation (Swagger)
```

## Why This Structure Matters

1. **Separation of Concerns**: Each layer has a single responsibility, making code easier to understand and maintain.

2. **Testability**: Layers can be tested independently. Services can be tested without HTTP concerns, repositories without business logic.

3. **Scalability**: New features can be added by extending existing layers without modifying unrelated code.

4. **Reusability**: Services and repositories can be reused across different controllers or contexts.

5. **Maintainability**: Clear structure makes it easy to locate and fix bugs, and onboard new developers.

6. **Dependency Flow**: Clear unidirectional flow: `Routes → Controllers → Services → Repositories → Models`, preventing circular dependencies.

