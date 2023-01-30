// import Mocha from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import User from "../db_models/contact_message";
import UserSignup from "../db_models/User_model";
import bcrypt from "bcrypt";
import app from "../index";
import request from "supertest";
import { afterEach, beforeEach } from "mocha";
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
  console.log("admin", newAdmin);
  // Log in the admin user
  const loginRes = await chai.request(app).post("/user/login").send({
    username: adminUser.username,
    password: adminUser.password,
  });
  adminToken = loginRes.body.token;
  // if (loginRes.status === 200) {
  //   adminToken = loginRes.body.token;
  //   console.log(`Admin token: ${adminToken}`);
  // } else {
  //   console.log(`Error logging in admin user: ${loginRes.body.message}`);
  // }
});

afterEach(async () => {
  // Delete the admin user from the database
  await UserSignup.deleteOne({ username: "oliviertech22@gmail.com" });
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
    res.body.should.have.property("user").that.is.an("object");
    res.body.user.should.have.property("username", "oliviertech");
    res.body.user.should.have.property("password").that.matches(/^\$2b\$10\$/);
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
    // console.log(token);
  });

  it("it should get user profile", async () => {
    // Log the user in first
    const user = {
      username: "oliviertech27@gmail.com",
      password: "oliviertech",
    };
    const loginRes = await chai.request(app).post("/user/login").send(user);
    token = loginRes.body.token; // Save the token for use in the next request

    // Make the GET request to the user profile endpoint
    const profileRes = await chai
      .request(app)
      .get("/admin/user/profile")
      .set("Authorization", `Bearer ${token}`);
    profileRes.should.have.status(200);
    profileRes.body.should.be.an("object");
    profileRes.body.should.have.property("username", "oliviertech27@gmail.com");
    profileRes.body.should.have.property("_id");

    // console.log("profile", profileRes.body);
    // console.log("profile", profileRes.header);
  });

  describe("AdminController", () => {
    describe("Admin", () => {
      it("should create a new admin user", async () => {
        // console.log(`Admin token: ${adminToken}`);
        const newAdmin = {
          username: "oliviertech2@gmail.com",
          password: "oliviertech",
          role: "admin",
        };

        // try {
        const res = await chai
          .request(app)
          .post("/admin/admin")
          .set("Authorization", `Bearer ${adminToken}`)
          .send(newAdmin);
        res.should.have.status(201);
        res.body.should.be.an("object");
        res.body.should.have.property("user").that.is.an("object");
        res.body.user.should.have.property(
          "username",
          "oliviertech2@gmail.com"
        );
        res.body.user.should.have
          .property("password")
          .that.matches(/^\$2b\$10\$/);
        // res.body.should.have.property("password").that.matches(/^\$2b\$10\$/);
        // } catch (error) {
        //   console.log("Error creating new admin user: ", error);
        // res.status(500).json({ message: error.message });
        // }
      });

      it("should return all users", async () => {
        try {
          const res = await chai
            .request(app)
            .get("/admin/users")
            .set("Authorization", `Bearer ${token}`);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("status", "success");
          res.body.should.have.property("users").that.is.an("array");
          res.body.users.should.have.lengthOf.at.least(1);
        } catch (error) {
          console.log(error);
        }
      });

      it("should delete a user", async () => {
        try {
          // Create a test user
          const testUser = new UserSignup({
            username: "testuser@example.com",
            password: "testpassword",
            role: "user",
          });
          await testUser.save();

          // Send a DELETE request to the /users/:userId endpoint with the test user's ID
          const res = await chai
            .request(app)
            .delete(`/admin/users/${testUser._id}`)
            .set("Authorization", `Bearer ${token}`);

          res.should.have.status(204);
          res.body.should.be.an("object");
          res.body.should.have.property("status", "success");
          res.body.should.have.property("message", "User deleted");

          // Check that the test user was deleted from the database
          const deletedUser = await UserSignup.findById(testUser._id);
          expect(deletedUser).to.be.null;
        } catch (error) {
          console.log(error);
        }
      });
    });

    afterEach(async () => {
      // Delete the admin user from the database
      await UserSignup.deleteOne({ username: "oliviertech212@gmail.com" });
    });
  });
});
