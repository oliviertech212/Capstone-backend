"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _database = _interopRequireDefault(require("./db/database"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _contact_message = _interopRequireDefault(require("./Routes/contact_message"));
var _Article_Route = _interopRequireDefault(require("./Routes/Article_Route"));
var _comment_route = _interopRequireDefault(require("./Routes/comment_route"));
var _User_route = _interopRequireDefault(require("./Routes/User_route"));
var _secureRoutes = _interopRequireDefault(require("./Routes/secure-routes"));
function cov_1qkkpj6ahh() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/index.js";
  var hash = "573867b15ebee1cd4133f534c8a2435c50a63ec4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 21
        }
      },
      "1": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 16
        }
      },
      "2": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 24
        }
      },
      "3": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 16
        }
      },
      "4": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 19
        }
      },
      "5": {
        start: {
          line: 23,
          column: 13
        },
        end: {
          line: 23,
          column: 29
        }
      },
      "6": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "7": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 49
        }
      },
      "8": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 52
        }
      },
      "9": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 28
        }
      },
      "10": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 36
        }
      },
      "11": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 36,
          column: 36
        }
      },
      "12": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 41,
          column: 29
        }
      },
      "13": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 44,
          column: 28
        }
      },
      "14": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "15": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 61
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 25,
            column: 17
          },
          end: {
            line: 25,
            column: 18
          }
        },
        loc: {
          start: {
            line: 25,
            column: 23
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 25
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 9
          }
        },
        loc: {
          start: {
            line: 46,
            column: 22
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 46
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "573867b15ebee1cd4133f534c8a2435c50a63ec4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1qkkpj6ahh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1qkkpj6ahh();
const app = (cov_1qkkpj6ahh().s[0]++, (0, _express.default)());
cov_1qkkpj6ahh().s[1]++;
app.use((0, _cors.default)());
cov_1qkkpj6ahh().s[2]++;
app.use(_express.default.json());
cov_1qkkpj6ahh().s[3]++;
_dotenv.default.config();
cov_1qkkpj6ahh().s[4]++;
(0, _database.default)();
const port = (cov_1qkkpj6ahh().s[5]++, process.env.PORT);
cov_1qkkpj6ahh().s[6]++;
app.listen(port, () => {
  cov_1qkkpj6ahh().f[0]++;
  cov_1qkkpj6ahh().s[7]++;
  console.log("server is running on port", port);
});
cov_1qkkpj6ahh().s[8]++;
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
// let use route
cov_1qkkpj6ahh().s[9]++;
app.use("/contact", _contact_message.default);

// routes for Article
cov_1qkkpj6ahh().s[10]++;
app.use("/articles", _Article_Route.default);

// comment route
cov_1qkkpj6ahh().s[11]++;
app.use("/articles", _comment_route.default);

// user route
// Initialize Passport.js
// app.use(passport.initialize());
cov_1qkkpj6ahh().s[12]++;
app.use("/user", _User_route.default);
// secure route
// app.use("/adm", passport.authenticate("jwt", { session: false }), securerouter);
cov_1qkkpj6ahh().s[13]++;
app.use("/adm", _User_route.default);
cov_1qkkpj6ahh().s[14]++;
app.use((req, res) => {
  cov_1qkkpj6ahh().f[1]++;
  cov_1qkkpj6ahh().s[15]++;
  res.json({
    success: "error",
    message: "route not found"
  });
});