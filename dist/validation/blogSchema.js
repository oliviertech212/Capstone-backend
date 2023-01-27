"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blog_Validation = void 0;
var _joi = _interopRequireDefault(require("joi"));
function cov_1uakl2czlg() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/blogSchema.js";
  var hash = "f51588ea55e96a6ecf48c5369001bdaef0054043";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/validation/blogSchema.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 8,
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
    hash: "f51588ea55e96a6ecf48c5369001bdaef0054043"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uakl2czlg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1uakl2czlg();
const Blog_Validation = (cov_1uakl2czlg().s[0]++, _joi.default.object({
  title: _joi.default.string().required(),
  content: _joi.default.string().required(),
  image: _joi.default.string().required(),
  comments: _joi.default.array()
}));
exports.Blog_Validation = Blog_Validation;