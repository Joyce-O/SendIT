import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

chai.use(chaiHttp);
const { expect } = chai;


describe('Test for Homepage API Endpoint', () => {
  it('Should return status code 200 for success', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body.message).to.equal('Welcome to MailXpress, your package is safe with us');
        done();
      });
  });
});