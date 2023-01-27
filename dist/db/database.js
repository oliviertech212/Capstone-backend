"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function cov_kgb29d9af() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db/database.js";
  var hash = "67c04a3e16c648c95966353a69d36e020b4019e3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db/database.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "2": {
        start: {
          line: 6,
          column: 8
        },
        end: {
          line: 6,
          column: 99
        }
      },
      "3": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 63
        }
      },
      "4": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 35
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 23
          },
          end: {
            line: 4,
            column: 24
          }
        },
        loc: {
          start: {
            line: 4,
            column: 32
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "67c04a3e16c648c95966353a69d36e020b4019e3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kgb29d9af = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_kgb29d9af();
cov_kgb29d9af().s[0]++;
const database_connect = async () => {
  cov_kgb29d9af().f[0]++;
  cov_kgb29d9af().s[1]++;
  try {
    cov_kgb29d9af().s[2]++;
    await _mongoose.default.connect(process.env.DATABASE, {
      useNewUrlparser: true,
      useUnifiedTopology: true
    });
    cov_kgb29d9af().s[3]++;
    console.log("connected sussfuly to CapstoneBackendDB");
  } catch (error) {
    cov_kgb29d9af().s[4]++;
    console.log(error.message);
    cov_kgb29d9af().s[5]++;
    console.log("not connected");
  }
};
var _default = database_connect;
exports.default = _default;