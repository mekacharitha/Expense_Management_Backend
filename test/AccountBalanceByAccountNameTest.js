const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("GET /accountsBalanceByAccountName", () => {
  it("accountsBalanceByAccountName", async ()=> {
    let response = await chai
      .request(app)
      .get("/accountBalanceByAccountName/xyz/"+3)
      expect(response).to.have.status(200)
      expect(response.body).to.have.property('success').to.equal(true)
      expect(response.body).to.have.property('balance')
    });
    it("it should thrown an error if account name is invalid or userId is invalid", async () => {
        const response = await chai
        .request(app)
        .get("/accountBalanceByAccountName/"+undefined+"/"+3)
        expect(response).to.have.status(500)
        expect(response.body).to.have.property('success').to.equal(false)
    });
});
