const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const should = chai.should();
let server;

chai.use(chaiHttp);

describe('server - ', () => {
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });

  it('should serve public html file', function (done) {
    chai
      .request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
