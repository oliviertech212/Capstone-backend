"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function cov_11plaueqfw() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/contact_message.js";
  var hash = "b11893cb3cf8fda73bad0eb2f753d72fe9e1c85b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/contact_message.js",
    statementMap: {
      "0": {
        start: {
          line: 42,
          column: 19
        },
        end: {
          line: 55,
          column: 2
        }
      },
      "1": {
        start: {
          line: 57,
          column: 13
        },
        end: {
          line: 57,
          column: 50
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b11893cb3cf8fda73bad0eb2f753d72fe9e1c85b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_11plaueqfw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_11plaueqfw();
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

const dataSchema = (cov_11plaueqfw().s[0]++, new _mongoose.default.Schema({
  name: {
    // required: true,
    type: String
  },
  email: {
    // required: true,
    type: String
  },
  message: {
    // required:true,
    type: String
  }
}));
const User = (cov_11plaueqfw().s[1]++, _mongoose.default.model("Message", dataSchema));
var _default = User; // import mongoose from "mongoose";
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
exports.default = _default;