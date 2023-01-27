"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentValidation = commentValidation;
var _commentschema = _interopRequireDefault(require("../validation/commentschema"));
function cov_xb5mxb0xl() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/middleware/comment_validation.js";
  var hash = "4baa49568204f4db771855c2fac70d0f1cbbd5a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/middleware/comment_validation.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 27
        },
        end: {
          line: 15,
          column: 4
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 47
        }
      },
      "3": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 28
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "commentValidation",
        decl: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 33
          }
        },
        loc: {
          start: {
            line: 12,
            column: 50
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
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
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4baa49568204f4db771855c2fac70d0f1cbbd5a2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_xb5mxb0xl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_xb5mxb0xl();
// export async function commentValidation(req, res, next) {
//   try {
//     commentValidationSchema.validate(req.body);
//     next();
//   } catch (error) {
//     res.status(400).json({ error: error.details[0].message });
//   }
// }

function commentValidation(req, res, next) {
  cov_xb5mxb0xl().f[0]++;
  const {
    error,
    value
  } = (cov_xb5mxb0xl().s[0]++, _commentschema.default.validate(req.body, {
    abortEarly: false
  }));
  cov_xb5mxb0xl().s[1]++;
  if (error) {
    cov_xb5mxb0xl().b[0][0]++;
    cov_xb5mxb0xl().s[2]++;
    return res.status(400).send(error.message);
  } else {
    cov_xb5mxb0xl().b[0][1]++;
  }
  cov_xb5mxb0xl().s[3]++;
  req.validatedData = value;
  cov_xb5mxb0xl().s[4]++;
  next();
}