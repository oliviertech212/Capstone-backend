// import Mocha from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import User from "../db_models/contact_message";
import UserSignup from "../db_models/User_model";
import bcrypt from "bcrypt";
import app from "../index";
import request from "supertest";
// assertion style

chai.should();

chai.use(chaiHttp);
let id;
let token;

beforeEach(async () => {
  await UserSignup.deleteMany({});
  const signupuser = new UserSignup({
    username: "oliviertech27@gmail.com",
    password: await bcrypt.hash("oliviertech", 10),
  });
  await signupuser.save();

  const user = {
    username: "oliviertech27@gmail.com",
    password: "oliviertech",
  };

  const res = await chai.request(app).post("/user/login").send(user);
  token = res.body.token;
});

describe("user APi", () => {
  it("it should create a new user", async () => {
    const user = {
      username: "oliviertech",
      password: "oliviertech",
    };
    const res = await chai.request(app).post("/user/signup").send(user);
    res.should.have.status(201);
    res.body.should.be.an("object");
    res.body.should.have.property("username", "oliviertech");
    res.body.should.have.property("password").that.matches(/^\$2b\$10\$/);
    // res.body.should.have.property("password", "oliviertech");
  });

  it("it should log user in", async () => {
    const user = {
      username: "oliviertech27@gmail.com",
      password: "oliviertech",
    };

    const res = await chai.request(app).post("/user/login").send(user);
    token = res.body.token;
    res.body.should.be.an("object");
    res.body.should.have.property("token");
    res.body.should.have.property("auth", true);
    console.log(token);
  });
});

describe("contact message API", () => {
  it("it should create a user", async () => {
    const user = {
      username: "oliviertech",
      password: "oliviertech",
    };
    const res = await chai.request(app).post("/user/signup").send(user);
    res.should.have.status(201);
    res.body.should.be.an("object");
    res.body.should.have.property("username", "oliviertech");
    res.body.should.have.property("password").that.matches(/^\$2b\$10\$/);
    // res.body.should.have.property("password", "oliviertech");
  });

  it("it should log user in", async () => {
    const user = {
      username: "oliviertech27@gmail.com",
      password: "oliviertech",
    };

    const res = await chai.request(app).post("/user/login").send(user);
    token = res.body.token;
    res.body.should.be.an("object");
    res.body.should.have.property("token");
    res.body.should.have.property("auth", true);
    console.log(token);
  });

  // test get route
  describe("GET/getall", () => {
    beforeEach(async () => {
      // Create some test users to retrieve
      await User.create({
        name: "Test User 1",
        email: "test1@example.com",
        message: "message for testing",
      });
      await User.create({
        name: "Test User 2",
        email: "test2@example.com",
        message: "message for testing",
      });
    });
    it("should get all contact message", async () => {
      const res = await chai
        .request(app)
        .get("/contact/getall")
        .set("Authorization", `${token}`);

      res.should.have.status(200);
      res.body.should.be.an("array");
      res.body.length.should.be.greaterThan(0);
      res.body.forEach((contact) => {
        contact.should.have.property("name");
        contact.should.have.property("email");
        contact.should.have.property("message");
      });
    });
  });

  describe("GET/getOne", () => {
    it("it should get single contact message by id", async () => {
      beforeEach(async () => {
        // Create a test contact message to retrieve
        const testContact = await User.create({
          name: "Test User",
          email: "test@example.com",
          message: "This is a test message.",
        });
        id = testContact._id;
      });

      it("should get a single contact message by id", async () => {
        const res = await chai
          .request(app)
          .get(`/getOne/${id}`)
          .set("Authorization", `Bearer ${token}`);

        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("name", "Test User");
        res.body.should.have.property("email", "test@example.com");
        res.body.should.have.property("message", "This is a test message.");
      });
    });
  });
  describe("GET/delete", () => {
    it("it should get single contact message by id", async () => {
      beforeEach(async () => {
        // Create a test contact message to retrieve
        const testContact = await User.create({
          name: "Test User",
          email: "test@example.com",
          message: "This is a test message.",
        });
        id = testContact._id;
      });

      it("should get a single contact message by id", async () => {
        const res = await chai
          .request(app)
          .get(`/delete/${id}`)
          .set("Authorization", `Bearer ${token}`);

        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("name", "Test User");
        res.body.should.have.property("email", "test@example.com");
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

  it("should create a new contact message", async () => {
    beforeEach(async () => {
      await User.deleteMany({});
    });
    afterEach(async () => {
      await User.deleteMany({});
    });
    const contact = new User({
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message.",
    });
    console.log(contact);
    const res = await chai.request(app).post("/contact/post").send(contact);
    res.body.should.be.an("object");
    res.body.should.have.property("name", contact.name);
    res.body.should.have.property("email", contact.email);
    res.body.should.have.property("message", contact.message);
    res.should.have.status(201);
  });
});
