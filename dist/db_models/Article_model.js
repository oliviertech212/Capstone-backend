"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function cov_1yb92t9pvr() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/Article_model.js";
  var hash = "1001bf70e50742fcd408fb27e46207e8acd5b195";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/Article_model.js",
    statementMap: {
      "0": {
        start: {
          line: 50,
          column: 22
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "1": {
        start: {
          line: 71,
          column: 16
        },
        end: {
          line: 71,
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
    hash: "1001bf70e50742fcd408fb27e46207e8acd5b195"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1yb92t9pvr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1yb92t9pvr();
/**
 * @swagger
 * components:
 *   schemas:
 *     Blogpost:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the message
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         image:
 *           type: file
 *           format: binary
 *         comments:
 *            type: array
 *            items:
 *             $ref: '#/components/schemas/Comment'
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date for the blog
 */
//  * BlogpostResponse:
//  *       type: object
//  *       properties:
//  *         _id:
//  *            type: string
//  *         title:
//  *           type: string
//  *         content:
//  *           type: string
//  *         image:
//  *           type: string
//  *         createdAt:
//  *           type: string
//  */

// import Comment from "./comment_model";

const articleSchema = (cov_1yb92t9pvr().s[0]++, new _mongoose.default.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: "String",
  comments: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Comment"
  }]
}, {
  timestamps: true
}));
const Article = (cov_1yb92t9pvr().s[1]++, _mongoose.default.model("Article", articleSchema));
var _default = Article;
exports.default = _default;