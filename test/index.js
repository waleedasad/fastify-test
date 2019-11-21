const chai = require('chai');
const chaiHttp = require('chai-http');
const app  = require('../index');


const expect = chai.expect;

chai.use(chaiHttp);
chai.should();
describe("App", () => {
    describe("GET /", () => {
        it("should get an object", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         it("expect value to be world", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body.hello).to.equal('world');
                    done();
                 });
        });
        it("it should fail with the value of test", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body.hello).to.not.equal('test');
                    done();
                 });
        });
    });
});