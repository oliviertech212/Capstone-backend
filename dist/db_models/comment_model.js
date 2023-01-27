"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function cov_12k912lq8m() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/comment_model.js";
  var hash = "33154fe7b156b518aa6b3a6b38396b0ae80586ab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/comment_model.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 22
        },
        end: {
          line: 42,
          column: 2
        }
      },
      "1": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 56
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
    hash: "33154fe7b156b518aa6b3a6b38396b0ae80586ab"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12k912lq8m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_12k912lq8m();
/**
 * @swagger
 * components:
 *   schemas:
 *     commentmessages:
 *       type: object
 *       required:
 *         - username
 *         - comment
 *         - article
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the message
 *         username:
 *           type: string
 *         comment:
 *           type: string
 *         article:
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date for the message
 */

const commentSchema = (cov_12k912lq8m().s[0]++, _mongoose.default.Schema({
  username: {
    type: String
    // required: [true, "please your email is required"],
  },

  comment: {
    type: String
    // required: [true, "please enter your comment"],
  },

  article: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Article",
    required: true
  }
}));
const Comment = (cov_12k912lq8m().s[1]++, _mongoose.default.model("Comment", commentSchema));
var _default = Comment;
exports.default = _default;