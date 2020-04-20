const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("POST /signin", () => {
  it("signin", async () => {
   const response = await chai
      .request(app)
      .post("/signin")
      .send({
       "userName": "cherryMeka",
        "password": "charitha"
      })
      if (response.error == false) {
        expect(response.body).be.a('object')
        expect(response.body).to.have.property('token')
        expect(response).to.have.status(200);
        expect(response.body).to.have.property('success').to.equal(true)
    }
    else {
        expect(response.body).be.a('object')
        expect(response.body).to.have.property('message')
        if (response.body.message == 'Authentication failed.') {
            expect(response).to.have.status(401);
            expect(response.body).to.have.property('success').to.equal(false)
        }
        else {
            expect(response).to.have.status(500);
            expect(response.body).to.have.property('success').to.equal(false)
        }
    }
});
});