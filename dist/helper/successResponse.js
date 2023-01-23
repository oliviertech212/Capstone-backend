"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successRes = void 0;
const successRes = (res, data) => {
  return res.json({
    status: "success",
    data
  });
};
exports.successRes = successRes;