"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _OAuthroute = _interopRequireDefault(require("./Routes/OAuthroute"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _user = _interopRequireDefault(require("./user"));
function cov_1qkkpj6ahh() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/index.js";
  var hash = "8a43263d784f47f3debca8c6043b7b5c6a82d3e0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 21
        }
      },
      "1": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 16
        }
      },
      "2": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 24
        }
      },
      "3": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 16
        }
      },
      "4": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 19
        }
      },
      "5": {
        start: {
          line: 29,
          column: 13
        },
        end: {
          line: 29,
          column: 29
        }
      },
      "6": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "7": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 49
        }
      },
      "8": {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 52
        }
      },
      "9": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 36,
          column: 28
        }
      },
      "10": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 39,
          column: 36
        }
      },
      "11": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 42,
          column: 36
        }
      },
      "12": {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 47,
          column: 29
        }
      },
      "13": {
        start: {
          line: 48,
          column: 0
        },
        end: {
          line: 48,
          column: 32
        }
      },
      "14": {
        start: {
          line: 51,
          column: 0
        },
        end: {
          line: 51,
          column: 28
        }
      },
      "15": {
        start: {
          line: 54,
          column: 0
        },
        end: {
          line: 54,
          column: 26
        }
      },
      "16": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 57,
          column: 65
        }
      },
      "17": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 61,
          column: 3
        }
      },
      "18": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 61
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 17
          },
          end: {
            line: 31,
            column: 18
          }
        },
        loc: {
          start: {
            line: 31,
            column: 23
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 31
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 59,
            column: 9
          }
        },
        loc: {
          start: {
            line: 59,
            column: 22
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 59
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
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8a43263d784f47f3debca8c6043b7b5c6a82d3e0"
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
cov_1qkkpj6ahh().s[13]++;
app.use("/admin", _secureRoutes.default);
// secure route
// app.use("/adm", passport.authenticate("jwt", { session: false }), securerouter);
cov_1qkkpj6ahh().s[14]++;
app.use("/adm", _User_route.default);

// oauth with google
cov_1qkkpj6ahh().s[15]++;
app.use("/", _OAuthroute.default);

// swagger
cov_1qkkpj6ahh().s[16]++;
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_user.default));
cov_1qkkpj6ahh().s[17]++;
app.use((req, res) => {
  cov_1qkkpj6ahh().f[1]++;
  cov_1qkkpj6ahh().s[18]++;
  res.json({
    success: "error",
    message: "route not found"
  });
});
var _default = app;
exports.default = _default;