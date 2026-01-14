const swaggerJsdoc = require("swagger-jsdoc");

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bandung Restaurants API",
      version: "1.0.0",
      description: "REST API for listing restaurants in Bandung",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
      {
        url: "https://bandung-restaurants-api-production.up.railway.app/",
        description: "Production server",
      },
    ],
  },
  apis: ["./routes/*.js"],
});

module.exports = swaggerSpec;
