"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _contact_message = _interopRequireDefault(require("../db_models/contact_message"));
var _contact_validation = require("../middleware/contact_validation");
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
function cov_o550r9w0j() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/contact_message.js";
  var hash = "1cbf73d52ca63f2b225024ad0750e1c1b01ed464";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/Routes/contact_message.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 31
        }
      },
      "1": {
        start: {
          line: 48,
          column: 0
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "2": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "3": {
        start: {
          line: 50,
          column: 37
        },
        end: {
          line: 50,
          column: 45
        }
      },
      "4": {
        start: {
          line: 51,
          column: 20
        },
        end: {
          line: 51,
          column: 54
        }
      },
      "5": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 25
        }
      },
      "6": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 34
        }
      },
      "7": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 71
        }
      },
      "8": {
        start: {
          line: 102,
          column: 0
        },
        end: {
          line: 109,
          column: 3
        }
      },
      "9": {
        start: {
          line: 103,
          column: 2
        },
        end: {
          line: 108,
          column: 3
        }
      },
      "10": {
        start: {
          line: 104,
          column: 20
        },
        end: {
          line: 104,
          column: 37
        }
      },
      "11": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 34
        }
      },
      "12": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 40
        }
      },
      "13": {
        start: {
          line: 168,
          column: 0
        },
        end: {
          line: 175,
          column: 3
        }
      },
      "14": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 174,
          column: 3
        }
      },
      "15": {
        start: {
          line: 170,
          column: 17
        },
        end: {
          line: 170,
          column: 51
        }
      },
      "16": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 171,
          column: 31
        }
      },
      "17": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 53
        }
      },
      "18": {
        start: {
          line: 204,
          column: 0
        },
        end: {
          line: 212,
          column: 3
        }
      },
      "19": {
        start: {
          line: 205,
          column: 2
        },
        end: {
          line: 211,
          column: 3
        }
      },
      "20": {
        start: {
          line: 206,
          column: 15
        },
        end: {
          line: 206,
          column: 28
        }
      },
      "21": {
        start: {
          line: 207,
          column: 17
        },
        end: {
          line: 207,
          column: 49
        }
      },
      "22": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 208,
          column: 62
        }
      },
      "23": {
        start: {
          line: 210,
          column: 4
        },
        end: {
          line: 210,
          column: 53
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 48,
            column: 40
          },
          end: {
            line: 48,
            column: 41
          }
        },
        loc: {
          start: {
            line: 48,
            column: 60
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 48
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 102,
            column: 50
          },
          end: {
            line: 102,
            column: 51
          }
        },
        loc: {
          start: {
            line: 102,
            column: 70
          },
          end: {
            line: 109,
            column: 1
          }
        },
        line: 102
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 168,
            column: 54
          },
          end: {
            line: 168,
            column: 55
          }
        },
        loc: {
          start: {
            line: 168,
            column: 74
          },
          end: {
            line: 175,
            column: 1
          }
        },
        line: 168
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 204,
            column: 29
          },
          end: {
            line: 204,
            column: 30
          }
        },
        loc: {
          start: {
            line: 204,
            column: 49
          },
          end: {
            line: 212,
            column: 1
          }
        },
        line: 204
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
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1cbf73d52ca63f2b225024ad0750e1c1b01ed464"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_o550r9w0j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_o550r9w0j();
const router = (cov_o550r9w0j().s[0]++, _express.default.Router());

// router.post("/post", contactValidation, async (req, res) => {
//   try {
//     const data = new User({
//       name: req.body.name,
//       email: req.body.email,
//       message: req.body.message,
//     });
//     await data.save();
//     res.status(201).json(data);
//     console.log("msg sent sussfuly");
//   } catch (error) {
//     res.status(401).json(error.message);
//     console.log("it can not create user");
//   }
// });

/**
 * @swagger
 * /contact/post:
 *   post:
 *     tags:
 *       - contact-message
 *     summary: create a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contactmessages'
 *     responses:
 *       "201":
 *         description: message sent Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contactmessages'
 *       "500":
 *         description: Internal server error
 */
cov_o550r9w0j().s[1]++;
router.post("/post", _contact_validation.contactValidation, async (req, res) => {
  cov_o550r9w0j().f[0]++;
  cov_o550r9w0j().s[2]++;
  try {
    const {
      name,
      email,
      message
    } = (cov_o550r9w0j().s[3]++, req.body);
    const contact = (cov_o550r9w0j().s[4]++, new _contact_message.default({
      name,
      email,
      message
    }));
    cov_o550r9w0j().s[5]++;
    await contact.save();
    cov_o550r9w0j().s[6]++;
    res.status(201).json(contact);
  } catch (error) {
    cov_o550r9w0j().s[7]++;
    res.status(500).json({
      success: "error",
      message: error.message
    });
  }
});

/**
//  * @swagger
//  * /contact/getall:
//  *   get:
//  *     tags:
//  *       - contact-message
//  *     summary: Get all post
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       "200":
//  *         description: Successfully retrieved all posts
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/contactmessages'
//  *       "400":
//  *         description: Bad request
//  */
/**
 * @swagger
 * /contact/getall:
 *   get:
 *     tags:
 *       - contact-message
 *     summary: Get all post
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved all posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/contactmessages'
 *       "400":
 *         description: Bad request
 */
cov_o550r9w0j().s[8]++;
router.get("/getall", _User_controller.default.authenticat, async (req, res) => {
  cov_o550r9w0j().f[1]++;
  cov_o550r9w0j().s[9]++;
  try {
    const contact = (cov_o550r9w0j().s[10]++, await _contact_message.default.find());
    cov_o550r9w0j().s[11]++;
    res.status(200).json(contact);
  } catch (error) {
    cov_o550r9w0j().s[12]++;
    res.status(400).json(error.message);
  }
});

// /**
//  * @swagger
//  * /contact/getOne/{id}:
//  *   get:
//  *     tags:
//  *       - contact-message
//  *     summary: Get a single post by ID
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       "200":
//  *         description: Successfully retrieved post by ID
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/contactmessages'
//  *       "404":
//  *         description: Post not found
//  *       "500":
//  *         description: Internal server error
//  */

/**
 * @swagger
 * /contact/getOne/{id}:
 *   get:
 *     tags:
 *       - contact-message
 *     summary: Get a single post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contactmessages'
 *       "404":
 *         description: Post not found
 *       "500":
 *         description: Internal server error
 */

//Get by ID Method
cov_o550r9w0j().s[13]++;
router.get("/getOne/:id", _User_controller.default.authenticat, async (req, res) => {
  cov_o550r9w0j().f[2]++;
  cov_o550r9w0j().s[14]++;
  try {
    const data = (cov_o550r9w0j().s[15]++, await _contact_message.default.findById(req.params.id));
    cov_o550r9w0j().s[16]++;
    res.status(200).json(data);
  } catch (error) {
    cov_o550r9w0j().s[17]++;
    res.status(500).json({
      message: error.message
    });
  }
});

/**
 * @swagger
 * /contact/delete/{id}:
 *   delete:
 *     tags:
 *       - contact-message
 *     summary: Delete a single post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully deleted post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contactmessages'
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 */

//Delete by ID Method
cov_o550r9w0j().s[18]++;
router.delete("/delete/:id", async (req, res) => {
  cov_o550r9w0j().f[3]++;
  cov_o550r9w0j().s[19]++;
  try {
    const id = (cov_o550r9w0j().s[20]++, req.params.id);
    const data = (cov_o550r9w0j().s[21]++, await _contact_message.default.findByIdAndDelete(id));
    cov_o550r9w0j().s[22]++;
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    cov_o550r9w0j().s[23]++;
    res.status(400).json({
      message: error.message
    });
  }
});
var _default = router;
exports.default = _default;