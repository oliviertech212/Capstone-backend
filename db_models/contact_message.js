

import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    message: {
        required:true,
        type: String
    }

})

const User = mongoose.model('Message', dataSchema);

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