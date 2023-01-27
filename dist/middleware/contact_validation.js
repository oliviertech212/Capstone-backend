"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactValidation = contactValidation;
var _contactSchema = _interopRequireDefault(require("../validation/contactSchema"));
function cov_qfgivsntu() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/middleware/contact_validation.js";
  var hash = "8b2b7a1ebea578fab28725514185f15d061880e7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/middleware/contact_validation.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 6,
          column: 4
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 47
        }
      },
      "3": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 28
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "contactValidation",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 50
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
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
        line: 7
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
    hash: "8b2b7a1ebea578fab28725514185f15d061880e7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_qfgivsntu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_qfgivsntu();
function contactValidation(req, res, next) {
  cov_qfgivsntu().f[0]++;
  const {
    error,
    value
  } = (cov_qfgivsntu().s[0]++, _contactSchema.default.validate(req.body, {
    abortEarly: false
  }));
  cov_qfgivsntu().s[1]++;
  if (error) {
    cov_qfgivsntu().b[0][0]++;
    cov_qfgivsntu().s[2]++;
    return res.status(400).send(error.message);
  } else {
    cov_qfgivsntu().b[0][1]++;
  }
  cov_qfgivsntu().s[3]++;
  req.validatedData = value;
  cov_qfgivsntu().s[4]++;
  next();
}