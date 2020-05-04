const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("PUT /editTransaction", () => {
  it("it should edit a transaction", async () => {
    const response = await chai
      .request(app)
      .put("/editTransaction")
      .send({
        "id":48,
        "type":"expense",
        "description" : "groceries",
        "amount" : 200,
        "accountName":"xyz",
        "date" : "4-16-2020",
        "userId":3
      })
    expect(response).to.have.status(200)
    expect(response.body).to.have.property('success').to.equal(true)
  });
  it(" it should throw an error if any field is undefined in edit transaction", async () => {
    const response = await chai
      .request(app)
      .put("/editTransaction")
      .send({
        "id":undefined,
        "type":"expense",
        "description" : "groceries",
        "amount" : 350,
        "accountName":"xyz",
        "date" : "4-16-2020",
        "userId":3
      })
    expect(response).to.have.status(500);
    expect(response.body).to.have.property('success').to.equal(false)
  });
});