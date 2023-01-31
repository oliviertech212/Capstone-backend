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
let adminToken;

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
