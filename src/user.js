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
    components: {
      securitySchemes: {
        token: {
          type: "http",
          schema: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/Routes/*.js", "./src/db_models/*.js"],
};

const document = swaggerJSDoc(options);
export default document;
