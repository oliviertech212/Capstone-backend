"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _contact_message = _interopRequireDefault(require("../db_models/contact_message"));
function cov_153cyuqabc() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/controller.js";
  var hash = "f9664ebdd737f902095b00b983fe75525b2e3166";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/controller.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "1": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "2": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 34
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 55
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "5": {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 22,
          column: 8
        }
      },
      "6": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "7": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 33
        }
      },
      "8": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 39
        }
      },
      "9": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 55
        }
      },
      "10": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 37
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f9664ebdd737f902095b00b983fe75525b2e3166"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_153cyuqabc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_153cyuqabc();
class usercontroller {
  static async getAllUsers(req, res) {
    cov_153cyuqabc().f[0]++;
    cov_153cyuqabc().s[0]++;
    try {
      const Users = (cov_153cyuqabc().s[1]++, await _contact_message.default.find());
      cov_153cyuqabc().s[2]++;
      res.status(200).json(Users);
    } catch (error) {
      cov_153cyuqabc().s[3]++;
      res.status(400).json({
        message: error.message
      });
    }
  }
  static async createUser(req, res) {
    cov_153cyuqabc().f[1]++;
    cov_153cyuqabc().s[4]++;
    try {
      const data = (cov_153cyuqabc().s[5]++, new _contact_message.default({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      }));
      cov_153cyuqabc().s[6]++;
      await data.save();
      cov_153cyuqabc().s[7]++;
      res.status(201).json(data);
      cov_153cyuqabc().s[8]++;
      console.log("msg sent sussfuly");
    } catch (error) {
      cov_153cyuqabc().s[9]++;
      res.status(401).json({
        message: error.message
      });
      cov_153cyuqabc().s[10]++;
      console.log("it can not create user");
    }
  }
}
var _default = usercontroller;
exports.default = _default;