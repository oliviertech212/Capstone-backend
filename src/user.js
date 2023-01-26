import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Capstone API",
      version: "1.0.0",
      description: "capstone backend Apis",
      contact: {
        name: "olivier",
        email: "oliviertech27@gmail.com",
        url: "dfggggggggggggdff",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/Routes/*.js", "./src/db_models/*.js"],
};

const document = swaggerJSDoc(options);
export default document;
