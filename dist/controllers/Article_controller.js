"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Article_model = _interopRequireDefault(require("../db_models/Article_model"));
var _cloudinary = _interopRequireDefault(require("../helper/cloudinary"));
function cov_futcweu4w() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/Article_controller.js";
  var hash = "54508e96e3db33c14f9b48e578bca87754f5af2d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/controllers/Article_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "1": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 68
        }
      },
      "2": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 26
        }
      },
      "3": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 26,
          column: 8
        }
      },
      "4": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 27
        }
      },
      "5": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 49
        }
      },
      "6": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 44
        }
      },
      "7": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 72
        }
      },
      "8": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 44
        }
      },
      "9": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "10": {
        start: {
          line: 38,
          column: 22
        },
        end: {
          line: 38,
          column: 42
        }
      },
      "11": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 40
        }
      },
      "12": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 53
        }
      },
      "13": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 44
        }
      },
      "14": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 54,
          column: 5
        }
      },
      "15": {
        start: {
          line: 48,
          column: 17
        },
        end: {
          line: 48,
          column: 30
        }
      },
      "16": {
        start: {
          line: 49,
          column: 22
        },
        end: {
          line: 49,
          column: 48
        }
      },
      "17": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 40
        }
      },
      "18": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 53
        }
      },
      "19": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 44
        }
      },
      "20": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "21": {
        start: {
          line: 59,
          column: 17
        },
        end: {
          line: 59,
          column: 30
        }
      },
      "22": {
        start: {
          line: 60,
          column: 23
        },
        end: {
          line: 60,
          column: 52
        }
      },
      "23": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 28
        }
      },
      "24": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 56
        }
      },
      "25": {
        start: {
          line: 63,
          column: 21
        },
        end: {
          line: 63,
          column: 68
        }
      },
      "26": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 26
        }
      },
      "27": {
        start: {
          line: 66,
          column: 22
        },
        end: {
          line: 66,
          column: 35
        }
      },
      "28": {
        start: {
          line: 67,
          column: 25
        },
        end: {
          line: 77,
          column: 7
        }
      },
      "29": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 81,
          column: 68
        }
      },
      "30": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 55
        }
      },
      "31": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 117,
          column: 5
        }
      },
      "32": {
        start: {
          line: 110,
          column: 17
        },
        end: {
          line: 110,
          column: 30
        }
      },
      "33": {
        start: {
          line: 112,
          column: 21
        },
        end: {
          line: 112,
          column: 52
        }
      },
      "34": {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 23
        }
      },
      "35": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 32
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 36
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 32
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 32
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 57
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 32
          },
          end: {
            line: 118,
            column: 3
          }
        },
        line: 108
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
      "35": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "54508e96e3db33c14f9b48e578bca87754f5af2d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_futcweu4w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_futcweu4w();
// import dotenv from "dotenv";
// dotenv.config();
// import cloudinary from "cloudinary";
// const { API_KEY, API_SECRET, NAME } = process.env;

// cloudinary.config({
//   cloud_name: NAME,
//   api_key: API_KEY,
//   api_secret: API_SECRET,
// });

class Articlecontroller {
  static async create(req, res) {
    cov_futcweu4w().f[0]++;
    cov_futcweu4w().s[0]++;
    try {
      const result = (cov_futcweu4w().s[1]++, await _cloudinary.default.uploader.upload(req.file.path));
      cov_futcweu4w().s[2]++;
      console.log(result);
      //   const article = await Article.create(req.body);

      const article = (cov_futcweu4w().s[3]++, new _Article_model.default({
        image: result.secure_url,
        content: req.body.content,
        title: req.body.title
      }));
      cov_futcweu4w().s[4]++;
      await article.save();
      cov_futcweu4w().s[5]++;
      res.status(200).json({
        article: article
      });
      cov_futcweu4w().s[6]++;
      console.log("article now is created");
    } catch (error) {
      cov_futcweu4w().s[7]++;
      res.status(400).json({
        status: "error",
        message: error.message
      });
      cov_futcweu4w().s[8]++;
      console.log("can not create article");
    }
  }
  static async getAll(req, res) {
    cov_futcweu4w().f[1]++;
    cov_futcweu4w().s[9]++;
    try {
      const article = (cov_futcweu4w().s[10]++, await _Article_model.default.find());
      cov_futcweu4w().s[11]++;
      res.status(200).json({
        article
      });
    } catch (error) {
      cov_futcweu4w().s[12]++;
      res.status(400).json({
        error: error.message
      });
      cov_futcweu4w().s[13]++;
      console.log("can not create article");
    }
  }
  static async getOne(req, res) {
    cov_futcweu4w().f[2]++;
    cov_futcweu4w().s[14]++;
    try {
      const id = (cov_futcweu4w().s[15]++, req.params.id);
      const article = (cov_futcweu4w().s[16]++, await _Article_model.default.findById(id));
      cov_futcweu4w().s[17]++;
      res.status(200).json({
        article
      });
    } catch {
      cov_futcweu4w().s[18]++;
      res.status(400).json({
        error: error.message
      });
      cov_futcweu4w().s[19]++;
      console.log("can not create article");
    }
  }
  static async update(req, res) {
    cov_futcweu4w().f[3]++;
    cov_futcweu4w().s[20]++;
    try {
      const id = (cov_futcweu4w().s[21]++, req.params.id);
      const findblog = (cov_futcweu4w().s[22]++, await _Article_model.default.findOne({
        id
      }));
      cov_futcweu4w().s[23]++;
      console.log(findblog);
      cov_futcweu4w().s[24]++;
      await _cloudinary.default.uploader.destroy(findblog.image);
      const result = (cov_futcweu4w().s[25]++, await _cloudinary.default.uploader.upload(req.file.path));
      cov_futcweu4w().s[26]++;
      console.log(result);
      // const updatedData = req.body;
      const options = (cov_futcweu4w().s[27]++, {
        new: true
      });
      const updateblog = (cov_futcweu4w().s[28]++, await _Article_model.default.findByIdAndUpdate(id, {
        $set: {
          image: result.secure_url,
          content: req.body.content,
          title: req.body.title
        }
      }, options));

      // res.send(result);
      // await result.save();
      cov_futcweu4w().s[29]++;
      res.status(200).json({
        status: "success",
        data: updateblog
      });
    } catch (error) {
      cov_futcweu4w().s[30]++;
      res.status(400).json({
        message: error.message
      });
    }

    // try {
    //   //Upload image to Cloudinary
    //   const result = await cloudinary.uploader.upload(req.file.path);

    //   //Find the article by its id
    //   const id = req.params.id;
    //   const article = await Article.findById(id);

    //   //Update the article with the new data
    //   article.image = result.secure_url;
    //   article.content = req.body.content;
    //   article.title = req.body.title;

    //   //Save the updated article to the database
    //   await article.save();

    //   res.json({ status: "success", data: article });
    // } catch (error) {
    //   res.status(400).json({ message: error.message });
    // }
  }

  static async delete(req, res) {
    cov_futcweu4w().f[4]++;
    cov_futcweu4w().s[31]++;
    try {
      const id = (cov_futcweu4w().s[32]++, req.params.id);
      const result = (cov_futcweu4w().s[33]++, await _Article_model.default.deleteOne({
        id
      }));
      cov_futcweu4w().s[34]++;
      res.send(result);
    } catch (error) {
      cov_futcweu4w().s[35]++;
      res.status(400).json({
        message: error.message
      });
    }
  }
}
var _default = Articlecontroller;
exports.default = _default;