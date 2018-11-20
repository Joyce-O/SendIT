import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import { passedUser } from './userMock';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test for Signup', () => {
  it.only('should return 201 for success', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(passedUser)
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body.message).to.equal('Sign up is successful');
        done();
      });
  });
});
