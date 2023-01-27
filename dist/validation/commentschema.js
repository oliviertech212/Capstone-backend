"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function cov_1kf4ld2zqq() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/commentschema.js";
  var hash = "87bbde1b7dd8ab3ddcad92b7d6183d4b251db8b5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/commentschema.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 32
        },
        end: {
          line: 5,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "87bbde1b7dd8ab3ddcad92b7d6183d4b251db8b5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kf4ld2zqq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1kf4ld2zqq();
const commentValidationSchema = (cov_1kf4ld2zqq().s[0]++, _joi.default.object({
  username: _joi.default.string().email().label("username"),
  comment: _joi.default.string().label("Comment")
}));
var _default = commentValidationSchema;
exports.default = _default;