const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /signup", () => {
  it("signup", done => {
    chai
      .request(app)
      .post("/signup")
      .send({
       "userName": "cherryMeka123",
        "password": "charitha123"
      })
      .end((err, res) => {
        console.log(res.body.success)
        console.log(res.status);
        console.log(err)
        expect(res.body).be.a('object')
        expect(res.body).to.have.property('success').that.is.a('boolean')
        if (res.body.success == true) {
          expect(res).to.have.status(201)
        }
        else {
          expect(res).to.have.status(409);
        }
        done();
      });
  });
});
