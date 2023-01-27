"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function cov_c20mcbg5k() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/contactSchema.js";
  var hash = "7cb5ee722fc878d03d8bb669c426fdfa4f7e0d7e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/contactSchema.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 32
        },
        end: {
          line: 6,
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
    hash: "7cb5ee722fc878d03d8bb669c426fdfa4f7e0d7e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_c20mcbg5k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_c20mcbg5k();
const contactValidationSchema = (cov_c20mcbg5k().s[0]++, _joi.default.object({
  email: _joi.default.string().email().required().label("Email"),
  message: _joi.default.string().min(30).max(100).required().label("message"),
  name: _joi.default.string().required().label("username")
}));
var _default = contactValidationSchema;
exports.default = _default;