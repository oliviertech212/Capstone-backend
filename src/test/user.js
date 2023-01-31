// import Mocha from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import User from "../db_models/contact_message";
import UserSignup from "../db_models/User_model";
import Article from "../db_models/Article_model";
import Comment from "../db_models/comment_model";
import bcrypt from "bcrypt";
import app from "../index";
import request from "supertest";
import { afterEach, beforeEach } from "mocha";
import { admin } from "../middleware/adminaccess";

// assertion style

chai.should();
chai.expect();

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
  // console.log("admin", newAdmin);
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
            .set("Authorization", `Bearer ${adminToken}`);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("status", "success");
          res.body.should.have.property("users").that.is.an("array");
          res.body.users.should.have.lengthOf.at.least(1);
        } catch (error) {
          console.log(error);
        }
      });

      //   try {
      //     // Create a test user
      //     const testUser = new UserSignup({
      //       username: "oliviertech277@gmail.com",
      //       password: "oliviertech",
      //     });
      //     await testUser.save();

      //     // Send a DELETE request to the /users/:userId endpoint with the test user's ID
      //     const res = await chai
      //       .request(app)
      //       .delete(`/admin/users/${testUser._id}`)
      //       .set("Authorization", `Bearer ${adminToken}`);

      //     // res.should.have.status(204);
      //     res.body.should.be.an("object");
      //     res.body.should.have.property("status", "success");
      //     res.body.should.have.property("message", "User deleted");

      //     // Check that the test user was deleted from the database
      //     const deletedUser = await UserSignup.findById(testUser._id);
      //     expect(deletedUser).to.be.null;
      //   } catch (error) {
      //     console.log(error);
      //   }
      // });

      // it("should delete a user", async () => {
      //   try {
      //     // Create a test user
      //     const testUser = new UserSignup({
      //       username: "oliviertech277@gmail.com",
      //       password: "oliviertech",
      //     });
      //     await testUser.save();

      //     // Send a DELETE request to the /users/:userId endpoint with the test user's ID
      //     const res = await chai
      //       .request(app)
      //       .delete(`/admin/users/${testUser._id}`)
      //       .set("Authorization", `Bearer ${adminToken}`);

      //     // Assert that the response has a status code of 204 and a JSON object with a success message
      //     res.should.have.status(204);
      //     res.body.should.be.an("object");
      //     res.body.should.have.property("status", "success");
      //     res.body.should.have.property("message", "User deleted");

      //     // Check that the test user was deleted from the database
      //     const deletedUser = await UserSignup.findById(testUser._id);
      //     expect(deletedUser).to.be.null;
      //   } catch (error) {
      //     console.log(error);
      //   }
      // });
      it("should delete a user", async () => {
        try {
          // Create a test user
          const testUser = new UserSignup({
            username: "oliviertech277@gmail.com",
            password: "oliviertech",
          });
          let id = testUser._id;
          // console.log("hjjjjjjjjjjjjjjjjjjjjjjjjj", id);
          await testUser.save();

          // Send a DELETE request to the /admin/users/:userId endpoint with the test user's ID
          const res = await chai
            .request(app)
            .delete(`/admin/users/${id}`)
            .set("Authorization", `Bearer ${adminToken}`);

          // Check the response status code and body
          res.should.have.status(204);
          // res.body.should.be.empty;
        } catch (error) {
          console.log(error);
        }
      });

      // route rwquire admin
      describe("Articles", () => {
        it("should create a new article", async () => {
          try {
            await Article.deleteMany({});
            const article = {
              title: "Test Title Test TitleTest Title",
              content: "Test Content Test TitleTest Title",
              image: "article image",
            };
            const res = await chai
              .request(app)
              .post("/articles/post")
              .field("title", article.title)
              .field("content", article.content)
              .attach("image", `${__dirname}/test-image.jpeg`)
              .set("Authorization", `Bearer ${adminToken}`);

            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("article");
            res.body.article.should.have.property("title").eql(article.title);
            res.body.article.should.have
              .property("content")
              .eql(article.content);
            res.body.article.should.have.property("image");
            // done();
          } catch (error) {
            console.log(error.message);
            throw error;
          } finally {
            await Article.deleteMany({});
          }
        });
        it("should get all articles", async () => {
          const article1 = new Article({
            title: "Test Title 1",
            content: "Test Content 1",
            image: "Test Image URL 1",
          });
          const article2 = new Article({
            title: "Test Title 2",
            content: "Test Content 2",
            image: "Test Image URL 2",
          });

          await article1.save();
          await article2.save();

          const res = await chai.request(app).get("/articles/getAll");
          // .set("Authorization", `${token}`);

          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("article");
          res.body.article.should.be.a("array");
          // res.body.article.length.should.eql(2);
        });

        it("should get a specific article by id", async () => {
          const article = new Article({
            title: "Test Title",
            content: "Test Content",
            image: "Test Image URL",
          });

          await article.save();

          const res = await chai
            .request(app)
            .get(`/articles/getOne/${article._id}`)
            .set("Authorization", `Bearer ${adminToken}`);

          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("article")
            .with.property("content")
            .eql("Test Content");
          res.body.article.should.have.property("title").eql(article.title);
        });

        it("should update an article by id", async () => {
          try {
            const article = new Article({
              title: "Test Title",
              content: "Test Content",
              image: "Test Image URL",
            });
            await article.save();

            const updatedArticle = {
              title: "Updated Title",
              content: "Updated Content",
              image: "Updated Image URL",
            };

            const res = await chai
              .request(app)
              .put(`/articles/update/${article._id}`)
              .set("Authorization", `Bearer ${adminToken}`)
              //   .attach("image", "path/to/image.jpg", "image.jpg")
              .attach("image", `${__dirname}/oliviertech.png`)
              .field("title", updatedArticle.title)
              .field("content", updatedArticle.content);

            // console.log("update blog ========== 206 ", res);

            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("status").eql("success");
            res.body.should.have.property("data");
            res.body.data.should.have
              .property("title")
              .eql(updatedArticle.title);
            res.body.data.should.have
              .property("content")
              .eql(updatedArticle.content);
            res.body.data.should.have.property("image");
          } catch (error) {
            console.log(error.message);
          }
        });

        it("should delete an article by id", async () => {
          const article = new Article({
            title: "Test Title",
            content: "Test Content",
            image: "Test Image URL",
          });
          // console.log("dfffffffffffffffffffff", article._id);
          await article.save();

          const res = await chai
            .request(app)
            .delete(`/articles/delete/${article._id}`)
            .set("Authorization", `Bearer ${adminToken}`);

          res.should.have.status(204);
          // res.body.should.have.property("deletedCount");
        });

        //   const article = new Article({
        //     title: "Test Title",
        //     content: "Test Content",
        //     image: "Test Image URL",
        //   });
        //   await article.save();

        //   const res = await chai
        //     .request(app)
        //     .delete(`/articles/delete/${article._id}`)
        //     .set("Authorization", `Bearer ${token}`);
        //   //   .set("Authorization", "Bearer " + token);

        //   res.should.have.status(204);
        //   res.body.should.be.a("object");
        //   res.body.should.have.property("deletedCount").eql(1);
        // });
      });

      it("should get all contact message", async () => {
        // console.log("usertoken", token);
        beforeEach(async () => {
          // Create some test users to retrieve
          await User.create({
            name: "oliviertech",
            email: "oliviertech27@gmail.com",
            message:
              "This is a test message.This is a test messageThis is a test messageThis is a test message",
          });
          await User.create({
            name: "oliviertech",
            email: "oliviertech27@gmail.com",
            message:
              "This is a test message.This is a test messageThis is a test messageThis is a test message",
          });
        });
        const res = await chai
          .request(app)
          .get("/contact/getall")
          .set("Authorization", `Bearer ${adminToken}`);
        // console.log("Response body:", res.body);
        // console.log("Response status code:", res.status);

        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("message").that.is.an("array");
        // res.body.message.length.should.be.greaterThan(0);
        res.body.message.forEach((contact) => {
          contact.should.have.property("name");
          contact.should.have.property("email");
          contact.should.have.property("message");
        });
      });
      describe("contact message API", () => {
        // describe("GET/getOne", () => {
        // it("it should get single contact message by id", async () => {
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
            .get(`/contact/getOne/${id}`)
            .set("Authorization", `Bearer ${adminToken}`);
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("name", "Test User");
          res.body.should.have.property("email", "test@example.com");
          res.body.should.have.property("message", "This is a test message.");
        });
        // });
        // });
        describe("GET/delete", () => {
          it("should delete a single contact message by id", async () => {
            const testContact = await User.create({
              name: "Test User",
              email: "test@example.com",
              message: "This is a test message.",
            });
            id = testContact._id;
            const res = await chai
              .request(app)
              .delete(`/contact/delete/${id}`)
              .set("Authorization", `Bearer ${adminToken}`);

            res.should.have.status(204);
          });
        });

        it("should create a new contact message", async () => {
          beforeEach(async () => {
            await User.deleteMany({});
          });
          afterEach(async () => {
            await User.deleteMany({});
          });
          const contact = {
            name: "oliviertech",
            email: "oliviertech27@gmail.com",
            message:
              "This is a test message.This is a test messageThis is a test messageThis is a test message",
          };
          console.log(contact);
          try {
            const res = await chai
              .request(app)
              .post("/contact/post")
              .send(contact)
              .set("Authorization", `Bearer ${token}`);
            // console.log("Response body:", res.body);
            // console.log("Response status code:", res.status);
            res.body.should.be.an("object");
            res.body.should.have.property("contact");
            res.body.contact.should.have.property("name", contact.name);
            res.body.contact.should.have.property("email", contact.email);
            res.body.contact.should.have.property("message", contact.message);
            res.should.have.status(201);
          } catch (error) {
            console.error("Error:", error.message);
          }
        });
      });
    });

    afterEach(async () => {
      // Delete the admin user from the database
      await UserSignup.deleteOne({ username: "oliviertech2@gmail.com" });
    });
  });

  describe("Comment", () => {
    let articleId;
    let testArticle;
    beforeEach(async () => {
      // Create a test article
      testArticle = new Article({
        title: "Test Article",
        content: "This is a test article",
      });
      const savedArticle = await testArticle.save();
      articleId = savedArticle._id;

      // Create a test comment
      const testComment = new Comment({
        username: "testuser",
        comment: "test comment",
        article: articleId,
      });
      const savedComment = await testComment.save();
      commentId = savedComment._id;
    });

    afterEach(async () => {
      // Delete the test article and comment after each test
      await Article.deleteMany({});
      await Comment.deleteMany({});
    });

    it("should create a comment for an article", async () => {
      try {
        const res = await chai
          .request(app)
          .post(`/articles/${articleId}/comments`)
          .send({
            username: "oliviertech@gmail.com",
            comment: "This is a test comment",
          })
          .set("Authorization", `Bearer ${token}`);

        res.should.have.status(201);
        res.body.should.be.an("object");
        res.body.should.have.property("status", "success");
        res.body.should.have.property("comment");
        res.body.comment.should.have.property("comments");
        res.body.comment.comments[0].should.have.property(
          "username",
          "oliviertech@gmail.com"
        );
        res.body.comment.comments[0].should.have.property(
          "comment",
          "This is a test comment"
        );
        res.body.comment.comments[0].should.have.property("article");
        expect(res.body.comment.comments[0].article.toString()).to.equal(
          testArticle._id.toString()
        );

        // Check that the test comment was added to the database
        const updatedArticle = await Article.findById(testArticle._id).populate(
          "comments"
        );
        expect(updatedArticle.comments[0].username).to.equal(
          "oliviertech@gmail.com"
        );
        expect(updatedArticle.comments[0].comment).to.equal(
          "This is a test comment"
        );
        expect(updatedArticle.comments[0].article.toString()).to.equal(
          testArticle._id.toString()
        );
      } catch (error) {
        console.log(error);
      }
    });

    let commentId;

    it("should get all comments", async () => {
      try {
        const res = await chai
          .request(app)
          .get("/articles/getall/comments")
          .set("Authorization", `Bearer ${token}`);
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("cmt");
        res.body.cmt.should.be.an("array");
        res.body.cmt[0].should.have.property("username", "testuser");
        res.body.cmt[0].should.have.property("comment", "test comment");
        res.body.cmt[0].should.have.property("article");
        expect(res.body.cmt[0].article.toString()).to.equal(
          articleId.toString()
        );
      } catch (error) {
        console.log(error);
      }
    });

    it("should delete a comment", async () => {
      try {
        const res = await chai
          .request(app)
          .delete(`/articles/${commentId}/delete`)
          .set("Authorization", `Bearer ${adminToken}`);

        res.should.have.status(404);
        res.body.should.be.an("object");
        res.body.should.have.property("status", "success");
        res.body.should.have.property("deleted");
        expect(res.body.deleted.deletedCount).to.equal(1);

        // Check that the test comment was deleted from the database
        const updatedComment = await Comment.findById(commentId);
        expect(updatedComment).to.be.null;
      } catch (error) {
        console.log(error);
      }
    });
    // });
  });
});
