const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("GET /accountsByUserId", () => {
  it("accountsByUserId", async() => {
    const response = await chai
      .request(app)
      .get("/accountsByUserId/"+3)
      expect(response).to.have.status(200)
      expect(response.body).to.have.property('success').to.equal(true)

  });
  it("it should return an error if userId is invalid", async () => {
      const response = await chai
        .request(app)
        .get("/accountsByUserId/"+undefined)

      expect(response).to.have.status(500);
      expect(response.body).to.have.property('success').to.equal(false)

  });
});



