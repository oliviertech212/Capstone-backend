"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function cov_15fwkur7w7() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/usemodel.js";
  var hash = "96f503db74c60dc926bf116da3ca763f784e21aa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/usemodel.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 29
        },
        end: {
          line: 11,
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
    hash: "96f503db74c60dc926bf116da3ca763f784e21aa"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15fwkur7w7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_15fwkur7w7();
const userValidationSchema = (cov_15fwkur7w7().s[0]++, _joi.default.object({
  username: _joi.default.string().alphanum().min(3).max(30).required()
  // .unique()
  .label("username"),
  password: _joi.default.string().min(8).required().label("Password")
}));
var _default = userValidationSchema;
exports.default = _default;