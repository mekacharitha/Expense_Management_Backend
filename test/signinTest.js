const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

describe("POST /signin", function (){
  it("signin", async () => {
   const response = await chai
      .request(app)
      .post("/signin")
      .send({
       "userName": "meka@gmail.com",
        "password": "meka@123"
      })
      expect(response.body).to.have.property('token')
        expect(response).to.have.status(200);
        expect(response.body).to.have.property('success').to.equal(true)

    });
    it("it should throw an error if username or password incorrect", async () => {
        const response = await chai.request(app).post("/signin").send({
            "userName": "meka@gmail.c",
            "password": "meka123"
        })
        expect(response).to.have.status(401);
        expect(response.body).to.have.property('success').to.equal(false)

    });
    it("it should return an error if username or password invalid", async () => {
        const response = await chai.request(app).post("/signin").send({
            "userName": undefined,
            "password": "meka@123"
        })
        expect(response).to.have.status(500);
        expect(response.body).to.have.property('success').to.equal(false)

    });
});
