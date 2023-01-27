"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Article_model = _interopRequireDefault(require("../db_models/Article_model"));
var _comment_model = _interopRequireDefault(require("../db_models/comment_model"));
function cov_2on71juab9() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/comment_controller.js";
  var hash = "700ee111e9612de4fc4216fba6e0d0b92cf7d56e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/comment_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 50,
          column: 5
        }
      },
      "1": {
        start: {
          line: 20,
          column: 22
        },
        end: {
          line: 20,
          column: 59
        }
      },
      "2": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "3": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 68
        }
      },
      "4": {
        start: {
          line: 25,
          column: 22
        },
        end: {
          line: 29,
          column: 8
        }
      },
      "5": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 27
        }
      },
      "6": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 37
        }
      },
      "7": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 27
        }
      },
      "8": {
        start: {
          line: 40,
          column: 28
        },
        end: {
          line: 42,
          column: 7
        }
      },
      "9": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 37
        }
      },
      "10": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 36
        }
      },
      "11": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 43
        }
      },
      "12": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 48,
          column: 42
        }
      },
      "13": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 37
        }
      },
      "14": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "15": {
        start: {
          line: 55,
          column: 18
        },
        end: {
          line: 55,
          column: 38
        }
      },
      "16": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 36
        }
      },
      "17": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 53
        }
      },
      "18": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 44
        }
      },
      "19": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 71,
          column: 5
        }
      },
      "20": {
        start: {
          line: 65,
          column: 17
        },
        end: {
          line: 65,
          column: 30
        }
      },
      "21": {
        start: {
          line: 66,
          column: 18
        },
        end: {
          line: 66,
          column: 44
        }
      },
      "22": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 36
        }
      },
      "23": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 53
        }
      },
      "24": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 44
        }
      },
      "25": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 83,
          column: 5
        }
      },
      "26": {
        start: {
          line: 76,
          column: 17
        },
        end: {
          line: 76,
          column: 30
        }
      },
      "27": {
        start: {
          line: 78,
          column: 21
        },
        end: {
          line: 78,
          column: 52
        }
      },
      "28": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 23
        }
      },
      "29": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 82,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 32
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 53
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 32
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 63
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 32
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 74
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 23,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 23,
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
        line: 21
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
      "29": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "700ee111e9612de4fc4216fba6e0d0b92cf7d56e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2on71juab9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2on71juab9();
// import { Model } from "mongoose";

class CommentController {
  // static  async create(req,res){
  //     try{
  //         const cmt=await Comment.create(req.body);

  //         res.status(201).json({cmt});
  //         console.log("comment sent");
  //     }catch{
  //         // res.status(400).json({ error: error.message });
  //         console.log("coment not sent");
  //     }
  // }

  static async create(req, res) {
    cov_2on71juab9().f[0]++;
    cov_2on71juab9().s[0]++;
    try {
      const article = (cov_2on71juab9().s[1]++, await _Article_model.default.findById(req.params.id));
      cov_2on71juab9().s[2]++;
      if (!article) {
        cov_2on71juab9().b[0][0]++;
        cov_2on71juab9().s[3]++;
        res.json({
          status: "error",
          message: "Article not found"
        });
      } else {
        cov_2on71juab9().b[0][1]++;
      }
      const comment = (cov_2on71juab9().s[4]++, new _comment_model.default({
        username: req.body.username,
        comment: req.body.comment,
        article: article._id
      }));

      // const commentSave =
      cov_2on71juab9().s[5]++;
      await comment.save();
      cov_2on71juab9().s[6]++;
      article.comments.push(comment);
      // console.log("here is coomment", commentSave);
      // await Article.findByIdAndUpdate(req.params.id, {
      //   $push: { comments: commentSave },
      // });
      cov_2on71juab9().s[7]++;
      await article.save();
      // let use mongoose populate method
      const updateArticle = (cov_2on71juab9().s[8]++, await _Article_model.default.findById(req.params.id).populate("comments"));
      cov_2on71juab9().s[9]++;
      return res.send(updateArticle);
      // res.json({ status: "error", message: "Article not found" });
      cov_2on71juab9().s[10]++;
      res.status(201).json(comment);
      cov_2on71juab9().s[11]++;
      console.log("comment sent sussfuly");
    } catch (error) {
      cov_2on71juab9().s[12]++;
      res.status(401).json(error.message);
      cov_2on71juab9().s[13]++;
      console.log("coment not sent");
    }
  }
  static async getAll(req, res) {
    cov_2on71juab9().f[1]++;
    cov_2on71juab9().s[14]++;
    try {
      const cmt = (cov_2on71juab9().s[15]++, await _comment_model.default.find());
      cov_2on71juab9().s[16]++;
      res.status(201).json({
        cmt
      });
    } catch {
      cov_2on71juab9().s[17]++;
      res.status(400).json({
        error: error.message
      });
      cov_2on71juab9().s[18]++;
      console.log("can not create article");
    }
  }
  static async getOne(req, res) {
    cov_2on71juab9().f[2]++;
    cov_2on71juab9().s[19]++;
    try {
      const id = (cov_2on71juab9().s[20]++, req.params.id);
      const cmt = (cov_2on71juab9().s[21]++, await _comment_model.default.findById(id));
      cov_2on71juab9().s[22]++;
      res.status(201).json({
        cmt
      });
    } catch {
      cov_2on71juab9().s[23]++;
      res.status(400).json({
        error: error.message
      });
      cov_2on71juab9().s[24]++;
      console.log("can not create article");
    }
  }
  static async delete(req, res) {
    cov_2on71juab9().f[3]++;
    cov_2on71juab9().s[25]++;
    try {
      const id = (cov_2on71juab9().s[26]++, req.params.id);
      const result = (cov_2on71juab9().s[27]++, await _comment_model.default.deleteOne({
        id
      }));
      cov_2on71juab9().s[28]++;
      res.send(result);
    } catch (error) {
      cov_2on71juab9().s[29]++;
      res.status(400).json({
        message: error.message
      });
    }
  }
}
var _default = CommentController;
exports.default = _default;