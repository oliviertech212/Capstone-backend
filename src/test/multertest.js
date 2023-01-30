// // multer test
import upload from "../Routes/multer";
import multer from "multer";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
chai.should();

describe("multer", () => {
  it("should have storage", function () {
    upload.should.have.property("storage");
  });

  //
  it("should have a method array", () => {
    upload.should.have.property("array");
    upload.array.should.be.a("function");
  });

  it("should have a method fields", () => {
    upload.should.have.property("fields");
    upload.fields.should.be.a("function");
  });

  it("should have a method any", () => {
    upload.should.have.property("any");
    upload.any.should.be.a("function");
  });
  //

  it("should be an object", () => {
    upload.should.be.an("object");
  });

  // it("should have filename property", function () {
  //   upload.should.have.property("filename");
  // });

  it("should have fileFilter property", function () {
    upload.should.have.property("fileFilter");
  });

  // it("should have .jpeg .png .jpeg files", function () {
  //   const file = {
  //     originalname: "test.jpeg",
  //   };

  //   const req = {};

  //   upload.fileFilter(req, file, (err, result) => {
  //     err.should.be.null;
  //     result.should.be.true;
  //   });

  //   file.originalname = "test.jpg";
  //   upload.fileFilter(req, file, (err, result) => {
  //     err.should.be.null;
  //     result.should.be.true;
  //   });

  //   file.originalname = "test.png";
  //   upload.fileFilter(req, file, (err, result) => {
  //     err.should.be.null;
  //     result.should.be.true;
  //   });

  //   file.originalname = "test.txt";
  //   upload.fileFilter(req, file, (err, result) => {
  //     err.message.should.equal("Unsupported file!");
  //     result.should.be.false;
  //   });
  // });
});

// describe("Multer", () => {
//   it("should have a method array", () => {
//     upload.should.have.property("array");
//     upload.array.should.be.a("function");
//   });

//   it("should have a method fields", () => {
//     upload.should.have.property("fields");
//     upload.fields.should.be.a("function");
//   });

//   it("should have a method any", () => {
//     upload.should.have.property("any");
//     upload.any.should.be.a("function");
//   });
// });
