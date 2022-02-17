const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const { meter } = require("../src/models/meter.model'");


describe('Meter API', () => {
    
	beforeEach(async() => { //Before each test we empty the database
        await meter.deleteMany({});
	});
    describe('/POST meter', () => {
        let meter = {
                owner_name: "Jane Doe",
                owner_location: "Kigali",
                meter_number: 195432
            };
        it('it should POST a meter ', (done) => {
            
              chai.request(server)
              .post('/meter')
              .send(meter)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Meter successfully added!');
                    res.body.meter.should.have.property('owner_name');
                    res.body.meter.should.have.property('owner_location');
                    res.body.meter.should.have.property('meter_number');
                done();
              });
        });

    });

    describe("GET / meter", () => {
        it("should return none",async()=>{
          const res = await request(app).get("/api/meter");
          expect(res.status).to.equal(200);
          expect(res.body.length).to.equal(0);
        });
        it("should return all meter", async () => {
          const meter = [
            {     owner_name: "Jane Doe",
            owner_location: "Kigali",
            meter_number: 195432},
            {     owner_name: "Joe Doe",
            owner_location: "Kigali",
            meter_number: 195422 },
          ];
          await meter.insertMany(meter);
          const res = await request(app).get("/api/meter");
          expect(res.status).to.equal(200);
          expect(res.body.length).to.equal(2);
         
        });
      });
    describe('GET /meter/:meter_nbr', function() {
        it("shoud return a meter found ", async () => {
            const res = await request(app).get("/api/meter");

            expect(statusCode).toBe(200);
            expect(response).toMatchObject(meter)
        })
        it("should return a meter not found ", async () => {
        
            const res = await request(app).get("/api/meter");
            expect(statusCode).toBe(404);
            expect(response).toBe.eql(" Meter is invalid")
        })
    });
})