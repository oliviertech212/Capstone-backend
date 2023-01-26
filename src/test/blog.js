import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import Article from "../db_models/Article_model";
import UserSignup from "../db_models/User_model";
import bcrypt from "bcrypt";

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

describe("Articles", () => {
  it("should create a new article", async () => {
    beforeEach(async () => {
      await Article.deleteMany({});
    });
    afterEach(async () => {
      await Article.deleteMany({});
    });

    try {
      const article = {
        title: "Test Title",
        content: "Test Content",
        image: "Test Image URL",
      };

      const res = await chai
        .request(app)
        .post("/articles/post")
        .send(article)
        .set("Authorization", `${token}`);

      res.should.have.status(200);
      res.body.should.be.a("object");
      res.body.should.have.property("article");
      res.body.article.should.have.property("title").eql(article.title);
      res.body.article.should.have.property("content").eql(article.content);
      res.body.article.should.have.property("image").eql(article.image);
    } catch (error) {
      console.log(error);
      throw new Error(error);
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

    const res = await chai
      .request(app)
      .get("/articles/getAll")
      .set("Authorization", `${token}`);

    res.should.have.status(200);
    res.body.should.be.a("object");
    res.body.should.have.property("article");
    res.body.article.should.be.a("array");
    res.body.article.length.should.eql(2);
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
      .set("Authorization", `${token}`);

    res.should.have.status(200);
    res.body.should.be.a("object");
    res.body.should.have.property("article");
    res.body.article.should.have.property("title").eql(article);
  });

  it("should update an article by id", async () => {
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
      .set("Authorization", `${token}`)
      //   .attach("image", "path/to/image.jpg", "image.jpg")
      .field("title", updatedArticle.title)
      .field("content", updatedArticle.content);

    res.should.have.status(200);
    res.body.should.be.a("object");
    res.body.should.have.property("status").eql("success");
    res.body.should.have.property("data");
    res.body.data.should.have.property("title").eql(updatedArticle.title);
    res.body.data.should.have.property("content").eql(updatedArticle.content);
    res.body.data.should.have.property("image").eql(updatedArticle.image);
  });

  it("should delete an article by id", async () => {
    const article = new Article({
      title: "Test Title",
      content: "Test Content",
      image: "Test Image URL",
    });
    await article.save();

    const res = await chai
      .request(app)
      .delete(`/articles/delete/${article._id}`)
      .set("Authorization", `${token}`);
    //   .set("Authorization", "Bearer " + token);

    res.should.have.status(200);
    res.body.should.be.a("object");
    res.body.should.have.property("deletedCount").eql(1);
  });
});
