const mongoose = require("mongoose");
const Meter = require('../src/models/meter.model');


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const { meter } = require("../src/models/meter.model'");


describe('Meter API', () => {
    let meter = {
        owner_name: "Jane Doe",
        owner_location: "Kigali",
        meter_number: 195432
    };
	beforeEach(async() => { //Before each test we empty the database
        await meter.deleteMany({});
	});
    describe('/POST meter', () => {

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
    describe('GET /meter', function() {
        it('List all meters', function(meter) {
        request(server)
        .get('/meter')
        .expect(200, meter);
        });
    });
    describe('GET /meter/:meter_nbr', function() {
        it("shoud return a meter found ", async () => {
            const { statusCode, body} = await request(
                `${serverURL}/api/meters/195432`
            );

            const response = await body.json();

        
            expect(statusCode).toBe(200);
            expect(response).toMatchObject(meter)
        })
        it("should return a meter not found ", async () => {
            const { statusCode, body} = await request(
                `${serverURL}/api/meters/195431`
            );
            const response = await body.json();
            expect(statusCode).toBe(404);
            expect(response).toBe.eql(" Meter is invalid")
        })
    });
})