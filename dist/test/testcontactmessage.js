"use strict";

var _chai = _interopRequireDefault(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _index = _interopRequireDefault(require("../index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Mocha from "mocha";

// assertion style
_chai.default.expect();
_chai.default.should();
_chai.default.use(_chaiHttp.default);
describe("contact message API", () => {
  // test get route
  describe("GET/getll", function () {
    it("should get all contact message", done => {
      _chai.default.request(_index.default).get("/contact/getall").end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.body.should.be.an("array");
        done();
      });
    });
  });

  // test post route
  describe("POST /post", () => {
    it("should create a new contact message", async () => {
      const contact = {
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message."
      };
      const res = await _chai.default.request(server).post("/contact/post").send(contact);
      res.should.have.status(201);
      res.body.should.be.an("object");
      res.body.should.have.property("name", contact.name);
      res.body.should.have.property("email", contact.email);
      res.body.should.have.property("message", contact.message);
    });
  });
});