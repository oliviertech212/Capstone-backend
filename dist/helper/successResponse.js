"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successRes = void 0;
function cov_1fu5xjsdz5() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/helper/successResponse.js";
  var hash = "b189150f75c4d0d8f00cbebf7d86796bb536c3c5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/helper/successResponse.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 26
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 5,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 1,
            column: 27
          }
        },
        loc: {
          start: {
            line: 1,
            column: 41
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b189150f75c4d0d8f00cbebf7d86796bb536c3c5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fu5xjsdz5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fu5xjsdz5();
cov_1fu5xjsdz5().s[0]++;
const successRes = (res, data) => {
  cov_1fu5xjsdz5().f[0]++;
  cov_1fu5xjsdz5().s[1]++;
  return res.json({
    status: "success",
    data
  });
};
exports.successRes = successRes;