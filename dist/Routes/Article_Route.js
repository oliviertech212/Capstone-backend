"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("./multer"));
var _Article_controller = _interopRequireDefault(require("../controllers/Article_controller"));
var _Blog_validation = _interopRequireDefault(require("../middleware/Blog_validation"));
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
var _adminaccess = require("../middleware/adminaccess");
var _admin = _interopRequireDefault(require("../controllers/admin"));
var _authentication = require("../middleware/authentication");
function cov_25pkav5v24() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/Article_Route.js";
  var hash = "0722f15dab1de91ce0b9caab06b8d86399c3919c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/Article_Route.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 13,
          column: 38
        }
      },
      "1": {
        start: {
          line: 137,
          column: 0
        },
        end: {
          line: 142,
          column: 2
        }
      },
      "2": {
        start: {
          line: 143,
          column: 0
        },
        end: {
          line: 147,
          column: 2
        }
      },
      "3": {
        start: {
          line: 148,
          column: 0
        },
        end: {
          line: 152,
          column: 2
        }
      },
      "4": {
        start: {
          line: 153,
          column: 0
        },
        end: {
          line: 159,
          column: 2
        }
      },
      "5": {
        start: {
          line: 160,
          column: 0
        },
        end: {
          line: 164,
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
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0722f15dab1de91ce0b9caab06b8d86399c3919c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25pkav5v24 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_25pkav5v24();
const Article_Route = (cov_25pkav5v24().s[0]++, _express.default.Router());
// UserController.authenticat

/**
 * @swagger
 * /articles/post:
 *
 *   post:
 *     tags:
 *       - Article
 *     summary: Create a new article
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *              $ref: '#/components/schemas/Blogpost'
 *     responses:
 *       201:
 *         description: Successfully created a new article
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Blogpost'
 *       400:
 *         description: Bad Request
 *
 * /articles/getall:
 *   get:
 *     tags:
 *       - Article
 *     summary: Retrieve all articles
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved all articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blogpost'

 * /articles/getOne/{id}:
 *   get:
 *     tags:
 *       - Article
 *     summary: Get a single post by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully retrieved post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blogpost'
 *       "404":
 *         description: Post not found
 *       "500":
 *         description: Internal server error
 * 
 * /articles/delete/{id}:
 *   delete:
 *     tags:
 *        - Article
 *     summary: Delete a single post by ID
 *     security:
 *       - bearerAuth: []
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
 *               $ref: '#/components/schemas/Blogpost'
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 * /articles/update/{id}:
 *   put:
 *     tags:
 *       - Article
 *     summary: Update an existing article
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the article to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Blogpost'
 *     responses:
 *       200:
 *         description: Successfully updated the article
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Blogpost'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Article not found
 */
cov_25pkav5v24().s[1]++;
Article_Route.post("/post", _Blog_validation.default, _multer.default.single("image"), _Article_controller.default.create);
cov_25pkav5v24().s[2]++;
Article_Route.get("/getall", _User_controller.default.authenticat, _Article_controller.default.getAll);
cov_25pkav5v24().s[3]++;
Article_Route.get("/getOne/:id", _User_controller.default.authenticat, _Article_controller.default.getOne);
cov_25pkav5v24().s[4]++;
Article_Route.put("/update/:id", _User_controller.default.authenticat, _Blog_validation.default, _multer.default.single("image"), _Article_controller.default.update);
cov_25pkav5v24().s[5]++;
Article_Route.delete("/delete/:id", _User_controller.default.authenticat, _Article_controller.default.delete);
var _default = Article_Route;
exports.default = _default;