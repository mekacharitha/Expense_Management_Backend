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
       "accountName":"xyz",
        "accountBalance":100,
        "userId":3
      })

      if (response.error == false) {
        expect(response.body).be.a('object')
        expect(response.body).to.have.property('success')
        expect(response).to.have.status(201);
        expect(response.body).to.have.property('success').to.equal(true)
    }
    else {
        expect(response.body).be.a('object')
        if (response.body.error == undefined) {
            expect(response).to.have.status(400);
            expect(response.body).to.have.property('success').to.equal(false)
        }
        else {
            expect(response).to.have.status(500);
            expect(response.body).to.have.property('success').to.equal(false)
        }
    }
});
});