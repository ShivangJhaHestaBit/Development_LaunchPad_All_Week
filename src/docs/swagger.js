import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Launchpad Week4 API",
      version: "1.0.0",
      description: "Auto-generated API documentation",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },

  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
