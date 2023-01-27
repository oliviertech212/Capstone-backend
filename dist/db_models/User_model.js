"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _mongooseFindorcreate = _interopRequireDefault(require("mongoose-findorcreate"));
function cov_12xh4ztz51() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/User_model.js";
  var hash = "12240b7d3c0c061e3b68201040abf59cd81e2562";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/db_models/User_model.js",
    statementMap: {
      "0": {
        start: {
          line: 48,
          column: 19
        },
        end: {
          line: 65,
          column: 1
        }
      },
      "1": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 69,
          column: 2
        }
      },
      "2": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 68,
          column: 53
        }
      },
      "3": {
        start: {
          line: 72,
          column: 0
        },
        end: {
          line: 72,
          column: 38
        }
      },
      "4": {
        start: {
          line: 74,
          column: 19
        },
        end: {
          line: 74,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 67,
            column: 35
          },
          end: {
            line: 67,
            column: 36
          }
        },
        loc: {
          start: {
            line: 67,
            column: 55
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 67
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "12240b7d3c0c061e3b68201040abf59cd81e2562"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12xh4ztz51 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_12xh4ztz51();
/**
 * @swagger
 * components:
 *   schemas:
 *     signup:
 *       type: object
 *       required:
 *         -username
 *         -password
 *       properties:
 *         id:
 *           type: string
 *           description: the auto generated id
 *         username:
 *           type: string
 *           default: oliviertech
 *           required: true
 *         password:
 *           type: string
 *           default: oliviertech
 *           required: true
 *         createdAt:
 *            type: string
 *            format: date
 *     Response:
 *       type: object
 *       properties:
 *         _id:
 *            type: string
 *         username:
 *           default: oliviertech
 *           type: string
 *         role:
 *           type: string
 *           default: user
 *         password:
 *           default: oliviertech
 *           type: string
 *         createdAt:
 *           type: string
 */

const UserSchema = (cov_12xh4ztz51().s[0]++, new _mongoose.default.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: " user"
  }
}, {
  timestamps: true
}));
cov_12xh4ztz51().s[1]++;
UserSchema.methods.validPassword = function (password) {
  cov_12xh4ztz51().f[0]++;
  cov_12xh4ztz51().s[2]++;
  return bcrypt.compareSync(password, this.password);
};

// use findor create as plugin
cov_12xh4ztz51().s[3]++;
UserSchema.plugin(_mongooseFindorcreate.default);
const UserSignup = (cov_12xh4ztz51().s[4]++, _mongoose.default.model("Signup", UserSchema));
var _default = UserSignup;
exports.default = _default;