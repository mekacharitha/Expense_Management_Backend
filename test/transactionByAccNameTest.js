const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("GET /transactionByAccountName", () => {
  it("it should return transactions by accountName", async () => {
    const response = await chai
      .request(app)
      .get("/transactionByName/xyz/"+3)
    expect(response.body).to.have.property('success').to.equal(true)
    expect(response).to.have.status(200)
  });
  it("it should throw an error if user id is invalid", async () => {
    const response = await chai
      .request(app)
      .get("/transactionByName/xyz/"+ undefined)
    expect(response.body).to.have.property('success').to.equal(false)
    expect(response).to.have.status(500);
  });
  it("it should throw an error if accountName is invalid", async () => {
    const response = await chai
      .request(app)
      .get("/transactionByName/"+undefined+"/"+ 3)
    expect(response.body).to.have.property('success').to.equal(false)
    expect(response).to.have.status(500);
  });
});
