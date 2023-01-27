"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));
var _passport = _interopRequireDefault(require("passport"));
var _User_model = _interopRequireDefault(require("../db_models/User_model"));
function cov_1ugkr4b788() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/auth/auth.js";
  var hash = "fff525cb4ed4b93090fac9ab61aad8e61a52362c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/auth/auth.js",
    statementMap: {
      "0": {
        start: {
          line: 62,
          column: 0
        },
        end: {
          line: 68,
          column: 2
        }
      },
      "1": {
        start: {
          line: 71,
          column: 0
        },
        end: {
          line: 71,
          column: 31
        }
      },
      "2": {
        start: {
          line: 72,
          column: 0
        },
        end: {
          line: 72,
          column: 28
        }
      },
      "3": {
        start: {
          line: 75,
          column: 0
        },
        end: {
          line: 75,
          column: 42
        }
      },
      "4": {
        start: {
          line: 78,
          column: 0
        },
        end: {
          line: 78,
          column: 51
        }
      },
      "5": {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 79,
          column: 55
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fff525cb4ed4b93090fac9ab61aad8e61a52362c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ugkr4b788 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ugkr4b788();
cov_1ugkr4b788().s[0]++;
app.use((0, _expressSession.default)({
  secret: "Keep secret",
  resave: false,
  saveUninitialized: true
}));

// tell our app to start using passport for authentication
cov_1ugkr4b788().s[1]++;
app.use(_passport.default.initialize());
cov_1ugkr4b788().s[2]++;
app.use(_passport.default.session());

// use the UserSignup model to set up the authentication strategy
cov_1ugkr4b788().s[3]++;
_passport.default.use(_User_model.default.createStrategy());

// serialize and deserialize the user model to and from the session
cov_1ugkr4b788().s[4]++;
_passport.default.serializeUser(_User_model.default.serializeUser());
cov_1ugkr4b788().s[5]++;
_passport.default.deserializeUser(_User_model.default.deserializeUser());