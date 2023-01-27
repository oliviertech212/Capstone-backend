"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _User_model = _interopRequireDefault(require("../db_models/User_model"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function cov_1peer6wiy4() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/User_controller.js";
  var hash = "3e34094e1267a6f6abbbc99b61720947da2bacb4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/User_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "1": {
        start: {
          line: 26,
          column: 19
        },
        end: {
          line: 26,
          column: 43
        }
      },
      "2": {
        start: {
          line: 27,
          column: 29
        },
        end: {
          line: 27,
          column: 71
        }
      },
      "3": {
        start: {
          line: 29,
          column: 22
        },
        end: {
          line: 32,
          column: 8
        }
      },
      "4": {
        start: {
          line: 34,
          column: 24
        },
        end: {
          line: 34,
          column: 44
        }
      },
      "5": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 27
        }
      },
      "6": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 38
        }
      },
      "7": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 55
        }
      },
      "8": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 91,
          column: 5
        }
      },
      "9": {
        start: {
          line: 68,
          column: 19
        },
        end: {
          line: 68,
          column: 76
        }
      },
      "10": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 71,
          column: 7
        }
      },
      "11": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 67
        }
      },
      "12": {
        start: {
          line: 74,
          column: 24
        },
        end: {
          line: 74,
          column: 78
        }
      },
      "13": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 77,
          column: 7
        }
      },
      "14": {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 76,
          column: 71
        }
      },
      "15": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 42
        }
      },
      "16": {
        start: {
          line: 80,
          column: 20
        },
        end: {
          line: 82,
          column: 8
        }
      },
      "17": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 88,
          column: 9
        }
      },
      "18": {
        start: {
          line: 90,
          column: 6
        },
        end: {
          line: 90,
          column: 55
        }
      },
      "19": {
        start: {
          line: 96,
          column: 22
        },
        end: {
          line: 110,
          column: 3
        }
      },
      "20": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 109,
          column: 5
        }
      },
      "21": {
        start: {
          line: 99,
          column: 20
        },
        end: {
          line: 99,
          column: 45
        }
      },
      "22": {
        start: {
          line: 101,
          column: 22
        },
        end: {
          line: 101,
          column: 61
        }
      },
      "23": {
        start: {
          line: 103,
          column: 19
        },
        end: {
          line: 103,
          column: 64
        }
      },
      "24": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 21
        }
      },
      "25": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 27
        }
      },
      "26": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 108,
          column: 54
        }
      },
      "27": {
        start: {
          line: 112,
          column: 23
        },
        end: {
          line: 123,
          column: 3
        }
      },
      "28": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 122,
          column: 5
        }
      },
      "29": {
        start: {
          line: 115,
          column: 20
        },
        end: {
          line: 115,
          column: 45
        }
      },
      "30": {
        start: {
          line: 117,
          column: 22
        },
        end: {
          line: 117,
          column: 61
        }
      },
      "31": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 118,
          column: 25
        }
      },
      "32": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 13
        }
      },
      "33": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 121,
          column: 54
        }
      },
      "34": {
        start: {
          line: 128,
          column: 18
        },
        end: {
          line: 128,
          column: 43
        }
      },
      "35": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 135,
          column: 5
        }
      },
      "36": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 134,
          column: 64
        }
      },
      "37": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "38": {
        start: {
          line: 139,
          column: 22
        },
        end: {
          line: 139,
          column: 61
        }
      },
      "39": {
        start: {
          line: 140,
          column: 6
        },
        end: {
          line: 140,
          column: 25
        }
      },
      "40": {
        start: {
          line: 141,
          column: 19
        },
        end: {
          line: 141,
          column: 64
        }
      },
      "41": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 21
        }
      },
      "42": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 13
        }
      },
      "43": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 27
        }
      },
      "44": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        loc: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 31
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 65
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 96,
            column: 22
          },
          end: {
            line: 96,
            column: 23
          }
        },
        loc: {
          start: {
            line: 96,
            column: 42
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 96
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 112,
            column: 23
          },
          end: {
            line: 112,
            column: 24
          }
        },
        loc: {
          start: {
            line: 112,
            column: 43
          },
          end: {
            line: 123,
            column: 3
          }
        },
        line: 112
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 126,
            column: 44
          },
          end: {
            line: 149,
            column: 3
          }
        },
        line: 126
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 71,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 71,
            column: 7
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
        line: 69
      },
      "1": {
        loc: {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 77,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 77,
            column: 7
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
        line: 75
      },
      "2": {
        loc: {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 135,
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
        line: 131
      }
    },
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
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3e34094e1267a6f6abbbc99b61720947da2bacb4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1peer6wiy4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1peer6wiy4();
class UserController {
  // static async createUser(req, res) {
  //   try {
  //     const data = new User({
  //       username: req.body.username,
  //       password: req.body.password,
  //     });
  //     await data.save();
  //     successRes(res, {
  //       posts: [{ id: 1, title: "A blog post", body: "Some useful content" }],
  //     });

  //     //   res.status(201).json(data);
  //     //   console.log("User saved");
  //   } catch (error) {
  //     res.status(401).json(error.message);
  //     console.log("it can not create user");
  //   }
  // }
  static async signup(req, res) {
    cov_1peer6wiy4().f[0]++;
    cov_1peer6wiy4().s[0]++;
    try {
      const salt = (cov_1peer6wiy4().s[1]++, await _bcrypt.default.genSalt(10));
      const hashedPassword = (cov_1peer6wiy4().s[2]++, await _bcrypt.default.hash(req.body.password, salt));
      // Create a new user
      const newUser = (cov_1peer6wiy4().s[3]++, new _User_model.default({
        username: req.body.username,
        password: hashedPassword
      }));
      //save user to the database
      const savedUser = (cov_1peer6wiy4().s[4]++, await newUser.save());
      cov_1peer6wiy4().s[5]++;
      req.user = savedUser;
      cov_1peer6wiy4().s[6]++;
      res.status(201).json(savedUser);
    } catch (error) {
      cov_1peer6wiy4().s[7]++;
      res.status(500).json({
        message: error.message
      });
    }
  }

  // static createuser = async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const salt = await bcrypt.hash(password, 10);
  //     const signup = new UserSignup({
  //       email,
  //       password: salt,
  //     });
  //     const registered = await UserSignup.findOne({ email: signup.email });
  //     if (registered) {
  //       return res
  //         .status(400)
  //         .json({ status: "user not created", message: "user exist" });
  //     }
  //     const user = await signup.save();
  //     return res.status(200).json({ status: "success", message: user });
  //   } catch (error) {
  //     return res
  //       .status(400)
  //       .json({ status: "errormessage", message: error.message });
  //   }
  // };

  static async login(req, res) {
    cov_1peer6wiy4().f[1]++;
    cov_1peer6wiy4().s[8]++;
    try {
      // Find the user in the database
      const user = (cov_1peer6wiy4().s[9]++, await _User_model.default.findOne({
        username: req.body.username
      }));
      cov_1peer6wiy4().s[10]++;
      if (!user) {
        cov_1peer6wiy4().b[0][0]++;
        cov_1peer6wiy4().s[11]++;
        return res.status(401).json({
          message: "User not found"
        });
      } else {
        cov_1peer6wiy4().b[0][1]++;
      }

      // Compare password
      const isMatched = (cov_1peer6wiy4().s[12]++, await _bcrypt.default.compare(req.body.password, user.password));
      cov_1peer6wiy4().s[13]++;
      if (!isMatched) {
        cov_1peer6wiy4().b[1][0]++;
        cov_1peer6wiy4().s[14]++;
        return res.status(401).json({
          message: "Incorrect password"
        });
      } else {
        cov_1peer6wiy4().b[1][1]++;
      }
      cov_1peer6wiy4().s[15]++;
      console.log("ismatched", isMatched);
      // If authentication is successful, generate a JWT token
      const token = (cov_1peer6wiy4().s[16]++, _jsonwebtoken.default.sign({
        id: user._id
      }, process.env.MY_SCRET, {
        expiresIn: "1d"
      }));
      //       const decoded = jwt.verify(token, process.env.SECRET);
      // expect(decoded.username).to.be.equal("oliviertech27@gmail.com");
      cov_1peer6wiy4().s[17]++;
      return res.json({
        auth: true,
        token
      });
    } catch (error) {
      cov_1peer6wiy4().s[18]++;
      res.status(500).json({
        message: error.message
      });
    }
  }

  // Example of a protected route that requires authentication and authorization
  // Example of a protected route that requires authentication and authorization

  // Only authenticated users with a valid JWT token can access this route
  static async authenticate(req, res, next) {
    cov_1peer6wiy4().f[4]++;
    // Get the token from the header
    const token = (cov_1peer6wiy4().s[34]++, req.headers.authorization);

    // Check if token is present
    cov_1peer6wiy4().s[35]++;
    if (!token) {
      cov_1peer6wiy4().b[2][0]++;
      cov_1peer6wiy4().s[36]++;
      return res.status(401).json({
        message: "Access denied. No token provided."
      });
    } else {
      cov_1peer6wiy4().b[2][1]++;
    }

    // Verify the token
    cov_1peer6wiy4().s[37]++;
    try {
      const decoded = (cov_1peer6wiy4().s[38]++, _jsonwebtoken.default.verify(token, process.env.MY_SCRET));
      cov_1peer6wiy4().s[39]++;
      req.user = decoded;
      const user = (cov_1peer6wiy4().s[40]++, await _User_model.default.findOne({
        _id: decoded.id
      }));
      // Send the user's information in the response
      cov_1peer6wiy4().s[41]++;
      res.send(user);
      cov_1peer6wiy4().s[42]++;
      next();
      cov_1peer6wiy4().s[43]++;
      console.log(decoded);
    } catch (error) {
      cov_1peer6wiy4().s[44]++;
      return res.status(400).json({
        message: "Invalid token."
      });
    }
  }

  // static async getUser(req, res) {
  //   try {
  //     const users = await User.find();
  //     res.status(201).json(users);
  //   } catch (error) {
  //     res.status(401).json(error.message);
  //     console.log("it can not find user");
  //   }
  // }

  // static async getOne(req, res) {
  //   try {
  //     const id = req.params.id;
  //     const user = await User.findOne({ id });
  //     res.status(201).json(user);
  //   } catch (error) {
  //     res.status(401).json(error.message);
  //     console.log("it can not find user");
  //   }
  // }
}
(0, _defineProperty2.default)(UserController, "getProfile", (cov_1peer6wiy4().s[19]++, async (req, res) => {
  cov_1peer6wiy4().f[2]++;
  cov_1peer6wiy4().s[20]++;
  try {
    // Get the JWT from the request headers
    const token = (cov_1peer6wiy4().s[21]++, req.headers.authorization);
    // Verify the JWT
    const decoded = (cov_1peer6wiy4().s[22]++, _jsonwebtoken.default.verify(token, process.env.MY_SCRET));
    // Find the user by the userId in the JWT's payload
    const user = (cov_1peer6wiy4().s[23]++, await _User_model.default.findOne({
      _id: decoded.id
    }));
    // Send the user's information in the response
    cov_1peer6wiy4().s[24]++;
    res.send(user);
    cov_1peer6wiy4().s[25]++;
    console.log(decoded);
  } catch (error) {
    cov_1peer6wiy4().s[26]++;
    res.status(401).send({
      error: "Unauthorized"
    });
  }
}));
(0, _defineProperty2.default)(UserController, "authenticat", (cov_1peer6wiy4().s[27]++, (req, res, next) => {
  cov_1peer6wiy4().f[3]++;
  cov_1peer6wiy4().s[28]++;
  try {
    // Get the JWT from the request headers
    const token = (cov_1peer6wiy4().s[29]++, req.headers.authorization);
    // Verify the JWT
    const decoded = (cov_1peer6wiy4().s[30]++, _jsonwebtoken.default.verify(token, process.env.MY_SCRET));
    cov_1peer6wiy4().s[31]++;
    req.user = decoded;
    cov_1peer6wiy4().s[32]++;
    next();
  } catch (error) {
    cov_1peer6wiy4().s[33]++;
    res.status(401).send({
      error: "Unauthorized"
    });
  }
}));
var _default = UserController;
exports.default = _default;