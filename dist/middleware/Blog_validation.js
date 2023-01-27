"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Article_validation;
var _blogSchema = require("../validation/blogSchema");
function cov_1bb8n2t733() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/middleware/Blog_validation.js";
  var hash = "f0a728323a86bd50c6bebe2a3745fba307b6c984";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/middleware/Blog_validation.js",
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
          line: 10,
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
          column: 78
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 28
        }
      },
      "4": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "Article_validation",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 42
          }
        },
        loc: {
          start: {
            line: 3,
            column: 59
          },
          end: {
            line: 14,
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
            line: 10,
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
            line: 10,
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
    hash: "f0a728323a86bd50c6bebe2a3745fba307b6c984"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bb8n2t733 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1bb8n2t733();
function Article_validation(req, res, next) {
  cov_1bb8n2t733().f[0]++;
  const {
    error,
    value
  } = (cov_1bb8n2t733().s[0]++, _blogSchema.Blog_Validation.validate(req.formData, {
    abortEarly: false
  }));
  cov_1bb8n2t733().s[1]++;
  if (error) {
    cov_1bb8n2t733().b[0][0]++;
    cov_1bb8n2t733().s[2]++;
    return res.status(400).send({
      success: "error",
      message: error.message
    });
    // console.log(error.message);
  } else {
    cov_1bb8n2t733().b[0][1]++;
  }
  cov_1bb8n2t733().s[3]++;
  req.validatedData = value;
  cov_1bb8n2t733().s[4]++;
  next();
}

// export { Article_validation };