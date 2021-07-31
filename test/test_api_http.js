const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Testeando endpoint principal: ', () => {
  it('Nos debería devolver un ok ', (done) => {
    chai.request(url)
      .get('/')
      .end(function (err, res) {
        expect(res.body).to.be.equal('ok');
        expect(res).to.have.status(200);
        done()
      })
  });

  it('Check de nuestro login: ', function (done) {
    chai.request(url)
      .post('/login')
      .send({
        usuario: "proof1",
        pass: "12345254"
      })
      .end(function (err, res) {
        expect(res.body).to.have.property('token');
        expect(res).to.have.status(200);
        done();
      })
  })
})