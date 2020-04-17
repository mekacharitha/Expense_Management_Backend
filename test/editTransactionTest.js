const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("PUT /editTransaction", () => {
  it("editTransaction", done => {
    chai
      .request(app)
      .put("/editTransaction")
      .send({
        "id":35,
        "type":"expense",
        "description" : "groceries",
        "amount" : 350,
        "accountName":"xyz",
        "date" : "4-16-2020",
        "userId":3
      })
      .end((err, res) => {
        console.log(res.body.success)
        console.log(res.status);
        console.log(err)
        expect(res.body).be.a('object')
        expect(res.body).to.have.property('success').that.is.a('boolean')
        if (res.body.success == true) {
          expect(res).to.have.status(200)
        }
        else {
          expect(res).to.have.status(400);
        }
        done();
      });
  });
});
