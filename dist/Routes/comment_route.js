"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
var _comment_controller = _interopRequireDefault(require("../controllers/comment_controller"));
var _comment_validation = require("../middleware/comment_validation");
var _admin = _interopRequireDefault(require("../controllers/admin"));
function cov_1w4mn5dzpc() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/comment_route.js";
  var hash = "9edff61db897b66d4bb3ad09fbeca522f3f40be0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/comment_route.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 38
        }
      },
      "1": {
        start: {
          line: 78,
          column: 0
        },
        end: {
          line: 83,
          column: 2
        }
      },
      "2": {
        start: {
          line: 84,
          column: 0
        },
        end: {
          line: 84,
          column: 64
        }
      },
      "3": {
        start: {
          line: 86,
          column: 0
        },
        end: {
          line: 90,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9edff61db897b66d4bb3ad09fbeca522f3f40be0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1w4mn5dzpc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1w4mn5dzpc();
const Comment_Route = (cov_1w4mn5dzpc().s[0]++, _express.default.Router());

/**
 * @swagger
 * /articles/{id}/comments:
 *
 *   post:
 *     tags:
 *       - commentmessages
 *     summary: Create a new commentmessage
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/commentmessages'
 *     responses:
 *       201:
 *         description: Successfully created a new article
 *         content:
 *             application/json:
 *             schema:
 *               $ref: '#/components/schemas/commentmessages'
 *       400:
 *         description: Bad Request
 *
 * /articles/getall/comments:
 *   get:
 *     tags:
 *       - commentmessages
 *     summary: Retrieve all commentmessages
 *     responses:
 *       200:
 *         description: Successfully retrieved all articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/commentmessages'
 *
 * /articles/{id}/delete:
 *   delete:
 *     tags:
 *        - commentmessages
 *     summary: Delete a single contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully deleted post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/commentmessages'
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 */
cov_1w4mn5dzpc().s[1]++;
Comment_Route.post("/:id/comments",
// UserController.authenticat,
_comment_validation.commentValidation, _comment_controller.default.create);
cov_1w4mn5dzpc().s[2]++;
Comment_Route.get("/getall/comments", _comment_controller.default.getAll);
cov_1w4mn5dzpc().s[3]++;
Comment_Route.delete("/:id/detete",
// AdminController.authenticat,
_comment_controller.default.delete);
var _default = Comment_Route;
exports.default = _default;