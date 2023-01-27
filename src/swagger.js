import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Capstone API",
      version: "1.0.0",
      description: "capstone backend Apis",
      contact: {
        name: "oliviertech",
        email: "oliviertech27@gmail.com",
        url: "https://deploy-preview-1--olivier-tech.netlify.app",
      },
    },
    servers: [
      {
        url: "https://capstonebackendoliviertech27.onrender.com/",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          name: "Authorization",
          in: "header",
        },
      },
    },
  },
  apis: ["./src/Routes/*.js", "./src/db_models/*.js"],
};

const document = swaggerJSDoc(options);
export default document;
