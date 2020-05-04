const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("GET /accountNameByAccountId", () => {
  it("accountNameByAccountId", async () => {
   let response = await chai
      .request(app)
      .get("/accountNameByAccountId/"+7+"/"+23)
      expect(response).to.have.status(200)
      expect(response.body).to.have.property('success').to.equal(true)
      expect(response.body).to.have.property('accountName')
  });
  it("it should throw an error if accountid is invalid", async () => {
      const response = await chai
        .request(app)
        .get("/accountNameByAccountId/"+7+"/"+undefined)
      expect(response).to.have.status(500);
      expect(response.body).to.have.property('success').to.equal(false)

  });
});

