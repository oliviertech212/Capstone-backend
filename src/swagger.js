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
        url: "https://expensive-newt-tiara.cyclic.app/",
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
        OAuth2: {
          type: "oauth2",
          flows: {
            authorizationCode: {
              authorizationUrl: "https://accounts.google.com/o/oauth2/auth",
              tokenUrl: "https://oauth2.googleapis.com/token",
              scopes: {
                profile: "Grants profile access",
              },
              redirectUri: "https://localhost:8000/auth/google/Capstone",
              userProfileUrl: "https://www.googleapis.com/oauth2/v3/userinfo",
            },
          },
        },
      },
    },
  },
  apis: ["./src/Routes/*.js", "./src/db_models/*.js"],
};

const document = swaggerJSDoc(options);
export default document;
