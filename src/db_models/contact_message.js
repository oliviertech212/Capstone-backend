import mongoose from "mongoose";

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Data:
//  *       type: object
//  *       properties:
//  *         name:
//  *           type: string
//  *         email:
//  *           type: string
//  *         message:
//  *           type: string
//  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Data:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 *     DataResponse:
 *       type: object
 *       properties:
 *         _id:
 *            type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 *         createdAt:
 *           type: string
 */

const dataSchema = new mongoose.Schema({
  name: {
    // required: true,
    type: String,
  },
  email: {
    // required: true,
    type: String,
  },
  message: {
    // required:true,
    type: String,
  },
});

const User = mongoose.model("Message", dataSchema);

export default User;

// import mongoose from "mongoose";

// const schema=mongoose.Schema({
//     name: {
//          required: true,
//          type: String
//      },
//      email: {
//          required: true,
//          type: String
//      },
//      message: {
//          required:true,
//          type: String
//      }
// })

// const User=mongoose.model("Users",schema);

// export default User;
