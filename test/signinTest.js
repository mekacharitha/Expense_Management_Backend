const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /signin", () => {
  it("signin", done => {
    chai
      .request(app)
      .post("/signin")
      .send({
       "userName": "cherryMeka",
        "password": "charitha"
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
          expect(res).to.have.status(400,401);
        }
        done();
      });
  });
});
