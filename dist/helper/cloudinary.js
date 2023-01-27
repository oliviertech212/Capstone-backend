"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function cov_2ibvkb5zcs() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/helper/cloudinary.js";
  var hash = "c9e51b5841e2ef83d418451732bcde7baf40a67c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/helper/cloudinary.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 16
        }
      },
      "1": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 21,
          column: 3
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
    hash: "c9e51b5841e2ef83d418451732bcde7baf40a67c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ibvkb5zcs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ibvkb5zcs();
cov_2ibvkb5zcs().s[0]++;
_dotenv.default.config();
cov_2ibvkb5zcs().s[1]++;
_cloudinary.default.config({
  cloud_name: process.env.NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
var _default = _cloudinary.default;
exports.default = _default;