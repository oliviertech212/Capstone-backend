"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _chai = _interopRequireDefault(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _contact_message = _interopRequireDefault(require("../db_models/contact_message"));
var _User_model = _interopRequireDefault(require("../db_models/User_model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _index = _interopRequireDefault(require("../index"));
var _supertest = _interopRequireDefault(require("supertest"));
function cov_pzu3erkge() {
  var path = "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/test/testcontactmessage.js";
  var hash = "8b28e066fa7823ee115b47e3854b4f402c32d5e3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/tech/oliviertech/project/ATLP/creud test/server/Capstone-backend/src/test/testcontactmessage.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 14
        }
      },
      "1": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 19
        }
      },
      "2": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "3": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 34
        }
      },
      "4": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 22,
          column: 4
        }
      },
      "5": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 26
        }
      },
      "6": {
        start: {
          line: 25,
          column: 15
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "7": {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 30,
          column: 68
        }
      },
      "8": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 25
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 37
        }
      },
      "10": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "11": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 47,
          column: 5
        }
      },
      "12": {
        start: {
          line: 38,
          column: 17
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "13": {
        start: {
          line: 42,
          column: 16
        },
        end: {
          line: 42,
          column: 71
        }
      },
      "14": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 32
        }
      },
      "15": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 36
        }
      },
      "16": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 61
        }
      },
      "17": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 74
        }
      },
      "18": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "19": {
        start: {
          line: 50,
          column: 17
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "20": {
        start: {
          line: 55,
          column: 16
        },
        end: {
          line: 55,
          column: 70
        }
      },
      "21": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 27
        }
      },
      "22": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 36
        }
      },
      "23": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 43
        }
      },
      "24": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 48
        }
      },
      "25": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 23
        }
      },
      "26": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 81,
          column: 5
        }
      },
      "27": {
        start: {
          line: 65,
          column: 17
        },
        end: {
          line: 68,
          column: 5
        }
      },
      "28": {
        start: {
          line: 69,
          column: 21
        },
        end: {
          line: 69,
          column: 75
        }
      },
      "29": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 32
        }
      },
      "30": {
        start: {
          line: 73,
          column: 23
        },
        end: {
          line: 76,
          column: 46
        }
      },
      "31": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 39
        }
      },
      "32": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 43
        }
      },
      "33": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 80
        }
      },
      "34": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 48
        }
      },
      "35": {
        start: {
          line: 84,
          column: 0
        },
        end: {
          line: 225,
          column: 3
        }
      },
      "36": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 96,
          column: 5
        }
      },
      "37": {
        start: {
          line: 86,
          column: 17
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "38": {
        start: {
          line: 90,
          column: 16
        },
        end: {
          line: 90,
          column: 71
        }
      },
      "39": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 32
        }
      },
      "40": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 36
        }
      },
      "41": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 61
        }
      },
      "42": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 74
        }
      },
      "43": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 110,
          column: 5
        }
      },
      "44": {
        start: {
          line: 99,
          column: 17
        },
        end: {
          line: 102,
          column: 5
        }
      },
      "45": {
        start: {
          line: 104,
          column: 16
        },
        end: {
          line: 104,
          column: 70
        }
      },
      "46": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 27
        }
      },
      "47": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 36
        }
      },
      "48": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 43
        }
      },
      "49": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 48
        }
      },
      "50": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 23
        }
      },
      "51": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 142,
          column: 5
        }
      },
      "52": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 126,
          column: 7
        }
      },
      "53": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 120,
          column: 9
        }
      },
      "54": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 125,
          column: 9
        }
      },
      "55": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 141,
          column: 7
        }
      },
      "56": {
        start: {
          line: 128,
          column: 18
        },
        end: {
          line: 131,
          column: 41
        }
      },
      "57": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 133,
          column: 34
        }
      },
      "58": {
        start: {
          line: 134,
          column: 6
        },
        end: {
          line: 134,
          column: 37
        }
      },
      "59": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 47
        }
      },
      "60": {
        start: {
          line: 136,
          column: 6
        },
        end: {
          line: 140,
          column: 9
        }
      },
      "61": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 137,
          column: 45
        }
      },
      "62": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 46
        }
      },
      "63": {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 139,
          column: 48
        }
      },
      "64": {
        start: {
          line: 144,
          column: 2
        },
        end: {
          line: 169,
          column: 5
        }
      },
      "65": {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 168,
          column: 7
        }
      },
      "66": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 154,
          column: 9
        }
      },
      "67": {
        start: {
          line: 148,
          column: 28
        },
        end: {
          line: 152,
          column: 10
        }
      },
      "68": {
        start: {
          line: 153,
          column: 8
        },
        end: {
          line: 153,
          column: 29
        }
      },
      "69": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 167,
          column: 9
        }
      },
      "70": {
        start: {
          line: 157,
          column: 20
        },
        end: {
          line: 160,
          column: 50
        }
      },
      "71": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 162,
          column: 36
        }
      },
      "72": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 40
        }
      },
      "73": {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 164,
          column: 59
        }
      },
      "74": {
        start: {
          line: 165,
          column: 8
        },
        end: {
          line: 165,
          column: 67
        }
      },
      "75": {
        start: {
          line: 166,
          column: 8
        },
        end: {
          line: 166,
          column: 76
        }
      },
      "76": {
        start: {
          line: 170,
          column: 2
        },
        end: {
          line: 195,
          column: 5
        }
      },
      "77": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 194,
          column: 7
        }
      },
      "78": {
        start: {
          line: 172,
          column: 6
        },
        end: {
          line: 180,
          column: 9
        }
      },
      "79": {
        start: {
          line: 174,
          column: 28
        },
        end: {
          line: 178,
          column: 10
        }
      },
      "80": {
        start: {
          line: 179,
          column: 8
        },
        end: {
          line: 179,
          column: 29
        }
      },
      "81": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 193,
          column: 9
        }
      },
      "82": {
        start: {
          line: 183,
          column: 20
        },
        end: {
          line: 186,
          column: 50
        }
      },
      "83": {
        start: {
          line: 188,
          column: 8
        },
        end: {
          line: 188,
          column: 36
        }
      },
      "84": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 40
        }
      },
      "85": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 59
        }
      },
      "86": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 191,
          column: 67
        }
      },
      "87": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 76
        }
      },
      "88": {
        start: {
          line: 205,
          column: 2
        },
        end: {
          line: 224,
          column: 5
        }
      },
      "89": {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 208,
          column: 7
        }
      },
      "90": {
        start: {
          line: 207,
          column: 6
        },
        end: {
          line: 207,
          column: 32
        }
      },
      "91": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 211,
          column: 7
        }
      },
      "92": {
        start: {
          line: 210,
          column: 6
        },
        end: {
          line: 210,
          column: 32
        }
      },
      "93": {
        start: {
          line: 212,
          column: 20
        },
        end: {
          line: 216,
          column: 6
        }
      },
      "94": {
        start: {
          line: 217,
          column: 4
        },
        end: {
          line: 217,
          column: 25
        }
      },
      "95": {
        start: {
          line: 218,
          column: 16
        },
        end: {
          line: 218,
          column: 75
        }
      },
      "96": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 219,
          column: 36
        }
      },
      "97": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 220,
          column: 56
        }
      },
      "98": {
        start: {
          line: 221,
          column: 4
        },
        end: {
          line: 221,
          column: 58
        }
      },
      "99": {
        start: {
          line: 222,
          column: 4
        },
        end: {
          line: 222,
          column: 62
        }
      },
      "100": {
        start: {
          line: 223,
          column: 4
        },
        end: {
          line: 223,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 11
          },
          end: {
            line: 17,
            column: 12
          }
        },
        loc: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 36,
            column: 21
          },
          end: {
            line: 36,
            column: 22
          }
        },
        loc: {
          start: {
            line: 36,
            column: 27
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 36
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 36
          },
          end: {
            line: 37,
            column: 37
          }
        },
        loc: {
          start: {
            line: 37,
            column: 48
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 49,
            column: 30
          },
          end: {
            line: 49,
            column: 31
          }
        },
        loc: {
          start: {
            line: 49,
            column: 42
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 49
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 63,
            column: 35
          },
          end: {
            line: 63,
            column: 36
          }
        },
        loc: {
          start: {
            line: 63,
            column: 47
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 63
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 84,
            column: 32
          },
          end: {
            line: 84,
            column: 33
          }
        },
        loc: {
          start: {
            line: 84,
            column: 38
          },
          end: {
            line: 225,
            column: 1
          }
        },
        line: 84
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 85,
            column: 32
          },
          end: {
            line: 85,
            column: 33
          }
        },
        loc: {
          start: {
            line: 85,
            column: 44
          },
          end: {
            line: 96,
            column: 3
          }
        },
        line: 85
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 98,
            column: 30
          },
          end: {
            line: 98,
            column: 31
          }
        },
        loc: {
          start: {
            line: 98,
            column: 42
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 98
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 113,
            column: 25
          },
          end: {
            line: 113,
            column: 26
          }
        },
        loc: {
          start: {
            line: 113,
            column: 31
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 113
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 114,
            column: 15
          },
          end: {
            line: 114,
            column: 16
          }
        },
        loc: {
          start: {
            line: 114,
            column: 27
          },
          end: {
            line: 126,
            column: 5
          }
        },
        line: 114
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 127,
            column: 41
          },
          end: {
            line: 127,
            column: 42
          }
        },
        loc: {
          start: {
            line: 127,
            column: 53
          },
          end: {
            line: 141,
            column: 5
          }
        },
        line: 127
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 136,
            column: 23
          },
          end: {
            line: 136,
            column: 24
          }
        },
        loc: {
          start: {
            line: 136,
            column: 36
          },
          end: {
            line: 140,
            column: 7
          }
        },
        line: 136
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 144,
            column: 25
          },
          end: {
            line: 144,
            column: 26
          }
        },
        loc: {
          start: {
            line: 144,
            column: 31
          },
          end: {
            line: 169,
            column: 3
          }
        },
        line: 144
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 145,
            column: 53
          },
          end: {
            line: 145,
            column: 54
          }
        },
        loc: {
          start: {
            line: 145,
            column: 65
          },
          end: {
            line: 168,
            column: 5
          }
        },
        line: 145
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 146,
            column: 17
          },
          end: {
            line: 146,
            column: 18
          }
        },
        loc: {
          start: {
            line: 146,
            column: 29
          },
          end: {
            line: 154,
            column: 7
          }
        },
        line: 146
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 156,
            column: 54
          },
          end: {
            line: 156,
            column: 55
          }
        },
        loc: {
          start: {
            line: 156,
            column: 66
          },
          end: {
            line: 167,
            column: 7
          }
        },
        line: 156
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 170,
            column: 25
          },
          end: {
            line: 170,
            column: 26
          }
        },
        loc: {
          start: {
            line: 170,
            column: 31
          },
          end: {
            line: 195,
            column: 3
          }
        },
        line: 170
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 171,
            column: 53
          },
          end: {
            line: 171,
            column: 54
          }
        },
        loc: {
          start: {
            line: 171,
            column: 65
          },
          end: {
            line: 194,
            column: 5
          }
        },
        line: 171
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 172,
            column: 17
          },
          end: {
            line: 172,
            column: 18
          }
        },
        loc: {
          start: {
            line: 172,
            column: 29
          },
          end: {
            line: 180,
            column: 7
          }
        },
        line: 172
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 182,
            column: 54
          },
          end: {
            line: 182,
            column: 55
          }
        },
        loc: {
          start: {
            line: 182,
            column: 66
          },
          end: {
            line: 193,
            column: 7
          }
        },
        line: 182
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 205,
            column: 44
          },
          end: {
            line: 205,
            column: 45
          }
        },
        loc: {
          start: {
            line: 205,
            column: 56
          },
          end: {
            line: 224,
            column: 3
          }
        },
        line: 205
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 206,
            column: 15
          },
          end: {
            line: 206,
            column: 16
          }
        },
        loc: {
          start: {
            line: 206,
            column: 27
          },
          end: {
            line: 208,
            column: 5
          }
        },
        line: 206
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 209,
            column: 14
          },
          end: {
            line: 209,
            column: 15
          }
        },
        loc: {
          start: {
            line: 209,
            column: 26
          },
          end: {
            line: 211,
            column: 5
          }
        },
        line: 209
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
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0
    },
    f: {
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
      "22": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8b28e066fa7823ee115b47e3854b4f402c32d5e3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pzu3erkge = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_pzu3erkge();
cov_pzu3erkge().s[0]++;
// assertion style

_chai.default.should();
cov_pzu3erkge().s[1]++;
_chai.default.use(_chaiHttp.default);
let id;
let token;
cov_pzu3erkge().s[2]++;
beforeEach(async () => {
  cov_pzu3erkge().f[0]++;
  cov_pzu3erkge().s[3]++;
  await _User_model.default.deleteMany({});
  const signupuser = (cov_pzu3erkge().s[4]++, new _User_model.default({
    username: "oliviertech27@gmail.com",
    password: await _bcrypt.default.hash("oliviertech", 10)
  }));
  cov_pzu3erkge().s[5]++;
  await signupuser.save();
  const user = (cov_pzu3erkge().s[6]++, {
    username: "oliviertech27@gmail.com",
    password: "oliviertech"
  });
  const res = (cov_pzu3erkge().s[7]++, await _chai.default.request(_index.default).post("/user/login").send(user));
  cov_pzu3erkge().s[8]++;
  token = res.body.token;
  cov_pzu3erkge().s[9]++;
  console.log("totkenenenen", token);
});
cov_pzu3erkge().s[10]++;
describe("user APi", () => {
  cov_pzu3erkge().f[1]++;
  cov_pzu3erkge().s[11]++;
  it("it should create a new user", async () => {
    cov_pzu3erkge().f[2]++;
    const user = (cov_pzu3erkge().s[12]++, {
      username: "oliviertech",
      password: "oliviertech"
    });
    const res = (cov_pzu3erkge().s[13]++, await _chai.default.request(_index.default).post("/user/signup").send(user));
    cov_pzu3erkge().s[14]++;
    res.should.have.status(201);
    cov_pzu3erkge().s[15]++;
    res.body.should.be.an("object");
    cov_pzu3erkge().s[16]++;
    res.body.should.have.property("username", "oliviertech");
    cov_pzu3erkge().s[17]++;
    res.body.should.have.property("password").that.matches(/^\$2b\$10\$/);
  });
  cov_pzu3erkge().s[18]++;
  it("it should log user in", async () => {
    cov_pzu3erkge().f[3]++;
    const user = (cov_pzu3erkge().s[19]++, {
      username: "oliviertech27@gmail.com",
      password: "oliviertech"
    });
    const res = (cov_pzu3erkge().s[20]++, await _chai.default.request(_index.default).post("/user/login").send(user));
    cov_pzu3erkge().s[21]++;
    token = res.body.token;
    cov_pzu3erkge().s[22]++;
    res.body.should.be.an("object");
    cov_pzu3erkge().s[23]++;
    res.body.should.have.property("token");
    cov_pzu3erkge().s[24]++;
    res.body.should.have.property("auth", true);
    cov_pzu3erkge().s[25]++;
    console.log(token);
  });
  cov_pzu3erkge().s[26]++;
  it("it should get user profile", async () => {
    cov_pzu3erkge().f[4]++;
    // Log the user in first
    const user = (cov_pzu3erkge().s[27]++, {
      username: "oliviertech27@gmail.com",
      password: "oliviertech"
    });
    const loginRes = (cov_pzu3erkge().s[28]++, await _chai.default.request(_index.default).post("/user/login").send(user));
    cov_pzu3erkge().s[29]++;
    token = loginRes.body.token; // Save the token for use in the next request

    // Make the GET request to the user profile endpoint
    const profileRes = (cov_pzu3erkge().s[30]++, await _chai.default.request(_index.default).get("/user/profile").set("Authorization", `Bearer ${token}`));
    cov_pzu3erkge().s[31]++;
    profileRes.should.have.status(200);
    cov_pzu3erkge().s[32]++;
    profileRes.body.should.be.an("object");
    cov_pzu3erkge().s[33]++;
    profileRes.body.should.have.property("username", "oliviertech27@gmail.com");
    cov_pzu3erkge().s[34]++;
    profileRes.body.should.have.property("_id");
  });
});
cov_pzu3erkge().s[35]++;
describe("contact message API", () => {
  cov_pzu3erkge().f[5]++;
  cov_pzu3erkge().s[36]++;
  it("it should create a user", async () => {
    cov_pzu3erkge().f[6]++;
    const user = (cov_pzu3erkge().s[37]++, {
      username: "oliviertech",
      password: "oliviertech"
    });
    const res = (cov_pzu3erkge().s[38]++, await _chai.default.request(_index.default).post("/user/signup").send(user));
    cov_pzu3erkge().s[39]++;
    res.should.have.status(201);
    cov_pzu3erkge().s[40]++;
    res.body.should.be.an("object");
    cov_pzu3erkge().s[41]++;
    res.body.should.have.property("username", "oliviertech");
    cov_pzu3erkge().s[42]++;
    res.body.should.have.property("password").that.matches(/^\$2b\$10\$/);
    // res.body.should.have.property("password", "oliviertech");
  });
  cov_pzu3erkge().s[43]++;
  it("it should log user in", async () => {
    cov_pzu3erkge().f[7]++;
    const user = (cov_pzu3erkge().s[44]++, {
      username: "oliviertech27@gmail.com",
      password: "oliviertech"
    });
    const res = (cov_pzu3erkge().s[45]++, await _chai.default.request(_index.default).post("/user/login").send(user));
    cov_pzu3erkge().s[46]++;
    token = res.body.token;
    cov_pzu3erkge().s[47]++;
    res.body.should.be.an("object");
    cov_pzu3erkge().s[48]++;
    res.body.should.have.property("token");
    cov_pzu3erkge().s[49]++;
    res.body.should.have.property("auth", true);
    cov_pzu3erkge().s[50]++;
    console.log(token);
  });

  // test get route
  cov_pzu3erkge().s[51]++;
  describe("GET/getall", () => {
    cov_pzu3erkge().f[8]++;
    cov_pzu3erkge().s[52]++;
    beforeEach(async () => {
      cov_pzu3erkge().f[9]++;
      cov_pzu3erkge().s[53]++;
      // Create some test users to retrieve
      await _contact_message.default.create({
        name: "Test User 1",
        email: "test1@example.com",
        message: "message for testing"
      });
      cov_pzu3erkge().s[54]++;
      await _contact_message.default.create({
        name: "Test User 2",
        email: "test2@example.com",
        message: "message for testing"
      });
    });
    cov_pzu3erkge().s[55]++;
    it("should get all contact message", async () => {
      cov_pzu3erkge().f[10]++;
      const res = (cov_pzu3erkge().s[56]++, await _chai.default.request(_index.default).get("/contact/getall").set("Authorization", `${token}`));
      cov_pzu3erkge().s[57]++;
      res.should.have.status(200);
      cov_pzu3erkge().s[58]++;
      res.body.should.be.an("array");
      cov_pzu3erkge().s[59]++;
      res.body.length.should.be.greaterThan(0);
      cov_pzu3erkge().s[60]++;
      res.body.forEach(contact => {
        cov_pzu3erkge().f[11]++;
        cov_pzu3erkge().s[61]++;
        contact.should.have.property("name");
        cov_pzu3erkge().s[62]++;
        contact.should.have.property("email");
        cov_pzu3erkge().s[63]++;
        contact.should.have.property("message");
      });
    });
  });
  cov_pzu3erkge().s[64]++;
  describe("GET/getOne", () => {
    cov_pzu3erkge().f[12]++;
    cov_pzu3erkge().s[65]++;
    it("it should get single contact message by id", async () => {
      cov_pzu3erkge().f[13]++;
      cov_pzu3erkge().s[66]++;
      beforeEach(async () => {
        cov_pzu3erkge().f[14]++;
        // Create a test contact message to retrieve
        const testContact = (cov_pzu3erkge().s[67]++, await _contact_message.default.create({
          name: "Test User",
          email: "test@example.com",
          message: "This is a test message."
        }));
        cov_pzu3erkge().s[68]++;
        id = testContact._id;
      });
      cov_pzu3erkge().s[69]++;
      it("should get a single contact message by id", async () => {
        cov_pzu3erkge().f[15]++;
        const res = (cov_pzu3erkge().s[70]++, await _chai.default.request(_index.default).get(`/getOne/${id}`).set("Authorization", `Bearer ${token}`));
        cov_pzu3erkge().s[71]++;
        res.should.have.status(200);
        cov_pzu3erkge().s[72]++;
        res.body.should.be.an("object");
        cov_pzu3erkge().s[73]++;
        res.body.should.have.property("name", "Test User");
        cov_pzu3erkge().s[74]++;
        res.body.should.have.property("email", "test@example.com");
        cov_pzu3erkge().s[75]++;
        res.body.should.have.property("message", "This is a test message.");
      });
    });
  });
  cov_pzu3erkge().s[76]++;
  describe("GET/delete", () => {
    cov_pzu3erkge().f[16]++;
    cov_pzu3erkge().s[77]++;
    it("it should get single contact message by id", async () => {
      cov_pzu3erkge().f[17]++;
      cov_pzu3erkge().s[78]++;
      beforeEach(async () => {
        cov_pzu3erkge().f[18]++;
        // Create a test contact message to retrieve
        const testContact = (cov_pzu3erkge().s[79]++, await _contact_message.default.create({
          name: "Test User",
          email: "test@example.com",
          message: "This is a test message."
        }));
        cov_pzu3erkge().s[80]++;
        id = testContact._id;
      });
      cov_pzu3erkge().s[81]++;
      it("should get a single contact message by id", async () => {
        cov_pzu3erkge().f[19]++;
        const res = (cov_pzu3erkge().s[82]++, await _chai.default.request(_index.default).get(`/delete/${id}`).set("Authorization", `Bearer ${token}`));
        cov_pzu3erkge().s[83]++;
        res.should.have.status(200);
        cov_pzu3erkge().s[84]++;
        res.body.should.be.an("object");
        cov_pzu3erkge().s[85]++;
        res.body.should.have.property("name", "Test User");
        cov_pzu3erkge().s[86]++;
        res.body.should.have.property("email", "test@example.com");
        cov_pzu3erkge().s[87]++;
        res.body.should.have.property("message", "This is a test message.");
      });
    });
  });

  // test post route
  // it("creates a message and sends it", async () => {
  //   const result = await request(app).post("/contact/post").send({

  //   });
  //   chai.expect(result).to.have.status(201);
  // });
  cov_pzu3erkge().s[88]++;
  it("should create a new contact message", async () => {
    cov_pzu3erkge().f[20]++;
    cov_pzu3erkge().s[89]++;
    beforeEach(async () => {
      cov_pzu3erkge().f[21]++;
      cov_pzu3erkge().s[90]++;
      await _contact_message.default.deleteMany({});
    });
    cov_pzu3erkge().s[91]++;
    afterEach(async () => {
      cov_pzu3erkge().f[22]++;
      cov_pzu3erkge().s[92]++;
      await _contact_message.default.deleteMany({});
    });
    const contact = (cov_pzu3erkge().s[93]++, new _contact_message.default({
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message."
    }));
    cov_pzu3erkge().s[94]++;
    console.log(contact);
    const res = (cov_pzu3erkge().s[95]++, await _chai.default.request(_index.default).post("/contact/post").send(contact));
    cov_pzu3erkge().s[96]++;
    res.body.should.be.an("object");
    cov_pzu3erkge().s[97]++;
    res.body.should.have.property("name", contact.name);
    cov_pzu3erkge().s[98]++;
    res.body.should.have.property("email", contact.email);
    cov_pzu3erkge().s[99]++;
    res.body.should.have.property("message", contact.message);
    cov_pzu3erkge().s[100]++;
    res.should.have.status(201);
  });
});