import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     contactmessages:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the message
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date for the message
 *     contactmessagesResponse:
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
