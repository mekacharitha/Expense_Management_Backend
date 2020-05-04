const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /addTransaction", () => {
  it("it should add a transaction", async () => {
   const response = await  chai.request(app)
      .post("/addTransaction")
      .send({
        "type":"expense",
        "description" : "groceriesTest",
        "amount" : 350,
        "accountName":"xyz",
        "date" : "4-26-2020",
        "userId":3
      })
    expect(response).to.have.status(201)
    expect(response.body).to.have.property('success').to.equal(true)
  }); 
  it("it should throw an error if any field is undefined in addTransaction", async () => {
    const response = await  chai.request(app)
       .post("/addTransaction")
       .send({
        "type":"expense",
        "description" : "groceries",
        "amount" : 350,
        "accountName":undefined,
        "date" : "4-26-2020",
        "userId":3
      })
        expect(response).to.have.status(400);
        expect(response.body).to.have.property('success').to.equal(false)
  });
});