const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

describe("POST /addAccount", () => {
  it("addAccount", async () => {
    const response = await chai.request(app)
      .post("/addAccount")
      .send({
       "accountName":"abcdef",
        "accountBalance":500,
        "userId":3
      })

      expect(response).to.have.status(201);
      expect(response.body).to.have.property('success').to.equal(true)
    });
    it("it should return an error if account already exist", async () => {
        const response = await chai.request(app).post("/addAccount").send({
            "accountName": "ABCDEF",
            "accountBalance": 500,
            "userId": 3
        })
        expect(response).to.have.status(400);
        expect(response.body).to.have.property('success').to.equal(false)
    });
    it("it should return an error if accountName or accountBalance or userId is invalid", async () => {
        const response = await chai.request(app).post("/addAccount").send({
            "accountName": undefined,
            "accountBalance": 500,
            "userId": 3
        })
        expect(response).to.have.status(400);
        expect(response.body).to.have.property('success').to.equal(false)
    });
});
