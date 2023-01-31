// import Mocha from "mocha";
import jwt from "jsonwebtoken";
import chai from "chai";
import chaiHttp from "chai-http";
import User from "../db_models/contact_message";
import app from "../index";
import request from "supertest";
import { afterEach, beforeEach } from "mocha";
import bcrypt from "bcrypt";

import UserSignup from "../db_models/User_model";
// assertion style

chai.should();

chai.use(chaiHttp);
let id;
let token;
let adminToken;

beforeEach(async () => {
  await UserSignup.deleteMany({});
  const signupuser = new UserSignup({
    username: "oliviertech27@gmail.com",
    password: await bcrypt.hash("oliviertech", 10),
  });
  await signupuser.save();
  // console.log("user", signupuser);

  const user = {
    username: "oliviertech27@gmail.com",
    password: "oliviertech",
  };

  const res = await chai.request(app).post("/user/login").send(user);
  token = res.body.token;

  // console.log("totkenenenen", token);
});

afterEach(async () => {
  // Delete the admin user from the database
  await UserSignup.deleteOne({ username: "oliviertech27@gmail.com" });
});

beforeEach(async () => {
  // Create an admin user
  const adminUser = {
    username: "oliviertech22@gmail.com",
    password: "oliviertech",
    role: "admin",
  };
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(adminUser.password, salt);
  const newAdmin = new UserSignup({
    username: adminUser.username,
    password: hashedPassword,
    role: "admin",
  });
  await newAdmin.save();
  const loginRes = await chai.request(app).post("/user/login").send({
    username: adminUser.username,
    password: adminUser.password,
  });
  adminToken = loginRes.body.token;
});

afterEach(async () => {
  // Delete the admin user from the database
  await UserSignup.deleteOne({ username: "oliviertech22@gmail.com" });
});

// describe("contact message API", () => {
//   it("it should create a user", async () => {
//     const user = {
//       username: "oliviertech",
//       password: "oliviertech",
//     };
//     const res = await chai.request(app).post("/user/signup").send(user);
//     res.should.have.status(201);
//     res.body.should.be.an("object");
//     res.body.should.have.property("user").that.is.an("object");
//     res.body.user.should.have.property("username", "oliviertech");
//     res.body.user.should.have.property("password").that.matches(/^\$2b\$10\$/);
//     // res.body.should.have.property("password", "oliviertech");
//   });

//   it("it should log user in", async () => {
//     const user = {
//       username: "oliviertech27@gmail.com",
//       password: "oliviertech",
//     };

//     const res = await chai.request(app).post("/user/login").send(user);
//     token = res.body.token;
//     res.body.should.be.an("object");
//     res.body.should.have.property("token");
//     res.body.should.have.property("auth", true);
//     // console.log(token);
//   });

//   // test get route
//   describe("GET/getall", () => {
//     beforeEach(async () => {
//       // Create some test users to retrieve
//       await User.create({
//         name: "oliviertech",
//         email: "oliviertech27@gmail.com",
//         message:
//           "This is a test message.This is a test messageThis is a test messageThis is a test message",
//       });
//       await User.create({
//         name: "oliviertech",
//         email: "oliviertech27@gmail.com",
//         message:
//           "This is a test message.This is a test messageThis is a test messageThis is a test message",
//       });
//     });

//     it("it should log admin user in", async () => {
//       const user = {
//         username: "oliviertech22@gmail.com",
//         password: "oliviertech",
//       };

//       const res = await chai.request(app).post("/user/login").send(user);
//       token = res.body.token;

//       res.body.should.be.an("object");
//       res.body.should.have.property("token");
//       res.body.should.have.property("auth", true);
//       // console.log(token);
//       console.log("admintoken", token);
//     });
//     it("should get all contact message", async () => {
//       // console.log("usertoken", token);

//       const res = await chai
//         .request(app)
//         .get("/contact/getall")
//         .set("Authorization", `Bearer ${token}`);
//       console.log("Response body:", res.body);
//       console.log("Response status code:", res.status);

//       res.should.have.status(200);
//       res.body.should.be.an("object");
//       res.body.should.have.property("message").that.is.an("array");
//       res.body.message.length.should.be.greaterThan(0);
//       res.body.message.forEach((contact) => {
//         contact.should.have.property("name");
//         contact.should.have.property("email");
//         contact.should.have.property("message");
//       });
//     });
//   });

//   describe("GET/getOne", () => {
//     it("it should get single contact message by id", async () => {
//       beforeEach(async () => {
//         // Create a test contact message to retrieve
//         const testContact = await User.create({
//           name: "Test User",
//           email: "test@example.com",
//           message: "This is a test message.",
//         });
//         id = testContact._id;
//       });

//       it("should get a single contact message by id", async () => {
//         const res = await chai
//           .request(app)
//           .get(`/contact/getOne/${id}`)
//           .set("Authorization", `Bearer ${token}`);

//         res.should.have.status(200);
//         res.body.should.be.an("object");
//         res.body.should.have.property("name", "Test User");
//         res.body.should.have.property("email", "test@example.com");
//         res.body.should.have.property("message", "This is a test message.");
//       });
//     });
//   });
//   describe("GET/delete", () => {
//     it("it should delete single contact message by id", async () => {
//       beforeEach(async () => {
//         // Create a test contact message to retrieve
//         const testContact = await User.create({
//           name: "Test User",
//           email: "test@example.com",
//           message: "This is a test message.",
//         });
//         id = testContact._id;
//       });

//       it("should delete a single contact message by id", async () => {
//         const res = await chai
//           .request(app)
//           .get(`/contact/delete/${id}`)
//           .set("Authorization", `Bearer ${token}`);

//         res.should.have.status(200);
//         res.body.should.be.an("object");
//         res.body.should.have.property("name", "Test User");
//         res.body.should.have.property("email", "test@example.com");
//         res.body.should.have.property("message", "This is a test message.");
//       });
//     });
//   });

//   it("should create a new contact message", async () => {
//     beforeEach(async () => {
//       await User.deleteMany({});
//     });
//     afterEach(async () => {
//       await User.deleteMany({});
//     });
//     const contact = {
//       name: "oliviertech",
//       email: "oliviertech27@gmail.com",
//       message:
//         "This is a test message.This is a test messageThis is a test messageThis is a test message",
//     };
//     console.log(contact);
//     try {
//       const res = await chai
//         .request(app)
//         .post("/contact/post")
//         .send(contact)
//         .set("Authorization", `Bearer ${token}`);
//       // console.log("Response body:", res.body);
//       // console.log("Response status code:", res.status);
//       res.body.should.be.an("object");
//       res.body.should.have.property("contact");
//       res.body.contact.should.have.property("name", contact.name);
//       res.body.contact.should.have.property("email", contact.email);
//       res.body.contact.should.have.property("message", contact.message);
//       res.should.have.status(201);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   });
// });
