const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /signup", () => {
  it("signup", async () => {
    let response = await chai
      .request(app)
      .post("/signup")
      .send({
       "userName": "meka@gmail.com",
        "password": "meka@123"
      })
      expect(response).to.have.status(201);
      expect(response.body).to.have.property('success').to.equal(true)
  });
  it("it should throw an error if User already exist", async () => {
    const response = await chai.request(app).post("/signup").send({
      "userName": "meka@gmail.com",
      "password": "meka@123"
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('success').to.equal(false)
  });
  it("it should throw an error if username is invalid", async () => {
    const response = await chai.request(app).post("/signup").send({
      "userName": undefined,
      "password": "meka@123"
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('success').to.equal(false)
  });
});
