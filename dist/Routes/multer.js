"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function cov_1vj5qw2pcr() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/multer.js";
  var hash = "7d7d5f44ed8f23285515ada62f4cc6832ad164f2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/multer.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 21,
          column: 2
        }
      },
      "1": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 32
        }
      },
      "2": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 10,
          column: 51
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 48
        }
      },
      "5": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 13
        }
      },
      "6": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 13
          }
        },
        loc: {
          start: {
            line: 6,
            column: 31
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 14
          },
          end: {
            line: 9,
            column: 15
          }
        },
        loc: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 14,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 27
          }
        }, {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 13,
            column: 28
          }
        }, {
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 14,
            column: 26
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7d7d5f44ed8f23285515ada62f4cc6832ad164f2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vj5qw2pcr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1vj5qw2pcr();
const upload = (cov_1vj5qw2pcr().s[0]++, (0, _multer.default)({
  storage: _multer.default.diskStorage({}),
  filename: (req, file, cb) => {
    cov_1vj5qw2pcr().f[0]++;
    cov_1vj5qw2pcr().s[1]++;
    cb(null, file.originalname);
  },
  fileFilter: (req, file, cb) => {
    cov_1vj5qw2pcr().f[1]++;
    let extention = (cov_1vj5qw2pcr().s[2]++, _path.default.extname(file.originalname));
    cov_1vj5qw2pcr().s[3]++;
    if ((cov_1vj5qw2pcr().b[1][0]++, !extention === ".jpg") && (cov_1vj5qw2pcr().b[1][1]++, !extention === ".jpeg") && (cov_1vj5qw2pcr().b[1][2]++, extention === ".png")) {
      cov_1vj5qw2pcr().b[0][0]++;
      cov_1vj5qw2pcr().s[4]++;
      cb(new Error("Unsupported file!", false));
      cov_1vj5qw2pcr().s[5]++;
      return;
    } else {
      cov_1vj5qw2pcr().b[0][1]++;
    }
    cov_1vj5qw2pcr().s[6]++;
    cb(null, true);
  }
}));
var _default = upload;
exports.default = _default;