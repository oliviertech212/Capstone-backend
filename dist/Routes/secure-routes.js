"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _admin = _interopRequireDefault(require("../controllers/admin"));
var _authentication = require("../middleware/authentication");
var _adminaccess = require("../middleware/adminaccess");
var _User_model = _interopRequireDefault(require("../db_models/User_model"));
function cov_21s95h975u() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/secure-routes.js";
  var hash = "9cb5e951a25778e508f2b2be42d857eae373e445";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/secure-routes.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 37
        }
      },
      "1": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 19
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 57
        }
      },
      "3": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 24
        }
      },
      "6": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 49,
          column: 3
        }
      },
      "7": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 48,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 36
          },
          end: {
            line: 20,
            column: 37
          }
        },
        loc: {
          start: {
            line: 20,
            column: 50
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 56
          },
          end: {
            line: 43,
            column: 57
          }
        },
        loc: {
          start: {
            line: 43,
            column: 70
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 43
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9cb5e951a25778e508f2b2be42d857eae373e445"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21s95h975u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_21s95h975u();
const securerouter = (cov_21s95h975u().s[0]++, _express.default.Router());
cov_21s95h975u().s[1]++;
console.log(_adminaccess.admin);
cov_21s95h975u().s[2]++;
securerouter.post("/admin", _admin.default.createadmin);

// securerouter.get("/profile/:id", findUserById, admin, (req, res) => {
//   res.json(req.user);
//   console.log(req.user);
// });
cov_21s95h975u().s[3]++;
securerouter.get("/profile", _adminaccess.admin, (req, res) => {
  cov_21s95h975u().f[0]++;
  cov_21s95h975u().s[4]++;
  res.json(req.user);
  cov_21s95h975u().s[5]++;
  console.log(req.user);
});

// securerouter.get(
//   "/profile",
//   (req, res, next) => {
//     UserSignup.findOne({ _id: req.body.userId })
//       .then((user) => {
//         req.user = user;
//         next();
//       })
//       .catch((err) => {
//         res.status(500).json({ message: err });
//       });
//   },
//   admin,
//   (req, res) => {
//     res.json(req.user);
//     console.log("admin found");
//   }
// );
cov_21s95h975u().s[6]++;
securerouter.get("/admin", _admin.default.createadmin, (req, res) => {
  cov_21s95h975u().f[1]++;
  cov_21s95h975u().s[7]++;
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token
  });
});
// securerouter.get("/adminuser", (req, res, next) => {
//   res.json({
//     message: "You made it to the secure route",
//     user: req.user,
//     token: req.query.secret_token,
//   });
// });
var _default = securerouter;
exports.default = _default;