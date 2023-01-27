"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
var _usemodel = _interopRequireDefault(require("../validation/usemodel"));
function cov_121owp68q9() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/User_route.js";
  var hash = "26ca7603586a1e3786631a8cf598a9f0615a6fad";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/User_route.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 36
        }
      },
      "1": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 32,
          column: 51
        }
      },
      "2": {
        start: {
          line: 64,
          column: 0
        },
        end: {
          line: 64,
          column: 49
        }
      },
      "3": {
        start: {
          line: 87,
          column: 0
        },
        end: {
          line: 87,
          column: 55
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
    hash: "26ca7603586a1e3786631a8cf598a9f0615a6fad"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_121owp68q9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_121owp68q9();
const User_router = (cov_121owp68q9().s[0]++, _express.default.Router());

/**
 * @swagger
 * /user/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signup'
 *     responses:
 *       201:
 *         description: Successful user registration
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/signup'
 *       400:
 *         description: Bad Request
 */
cov_121owp68q9().s[1]++;
User_router.post("/signup", _User_controller.default.signup);

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       "200":
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       "401":
 *         description: Invalid credentials
 */
cov_121owp68q9().s[2]++;
User_router.post("/login", _User_controller.default.login);
// to get user

/**
 * @swagger
 * /user/profile:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user's profile information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved user's profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       "401":
 *         description: Unauthorized
 */
cov_121owp68q9().s[3]++;
User_router.get("/profile", _User_controller.default.getProfile);
// (req, res) => {
// Only authenticated users with a valid JWT token can access this route
// });
var _default = User_router;
exports.default = _default;