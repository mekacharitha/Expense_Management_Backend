const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("GET /transactionByUserId", () => {
  it("it should return transactions by UserId", async () => {
    const response = await chai
      .request(app)
      .get("/transactions/" + 3)
    expect(response.body).to.have.property('success').to.equal(true)
    expect(response).to.have.status(200)
  });
  it("it should throw an error if transactionId is invalid", async () => {
    const response = await chai
      .request(app)
      .get("/transactions/" + undefined)
    expect(response.body).to.have.property('success').to.equal(false)
    expect(response).to.have.status(500);
  })
});
