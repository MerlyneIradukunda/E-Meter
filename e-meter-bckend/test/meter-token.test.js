const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const { meter } = require("../src/models/meter.model'");


describe('Token API', () => {
describe('/POST token', () => {
    it('it should POST a token ', (done) => {
        let token = {
            meter: 195432,
            token: 123456  
        }
          chai.request(server)
          .post('/token')
          .send(token)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('token successfully added!');
                res.body.token.should.have.property('meter');
                res.body.token.should.have.property('token');
            done();
          });
    });
    
});
describe("GET /", () => {
    it("should return none",async()=>{
      const res = await request(app).get("/api/token");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(0);
    });
    it("should return all token", async () => {
      const token = [
        { meter: 123456, token: 585944 },
        { meter: 123356, token: 585900 },
      ];
      await meter.insertMany(token);
      const res = await request(app).get("/api/token");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(2);
     
    });
  });
})