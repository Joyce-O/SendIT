import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import {
    
        successfulOrder, invalidName, invalidPhone, invalidEmail, invalidWeight, invalidParcelCon, invalidQty, invalidparcelType, passedUser 
      
} from './placeOrderMock';
import placeOrder from '../inMemoryData/placeOrder';

const { expect } = chai;

chai.use(chaiHttp);

describe('Tests for Homepage and invalid url endpoints', () => {
    describe('Test for Homepage API Endpoint', () => {
        it('Should return status code 200 for success', (done) => {
            chai.request(app)
                .get('/api/v1')
                .end((error, response) => {
                    expect(response).to.have.status(200);
                    expect(response.body.message).to.equal('Welcome to SendIT, your package is safe with us');
                    done();
                });
        });
    });
    describe('Test for Invalid URL', () => {
        it('Should return status code 404 for failure', (done) => {
            chai.request(app)
                .get('/nonexistence/url')
                .end((error, response) => {
                    expect(response).to.have.status(404);
                    expect(response.body.message).to.equal('Sorry! This page does not exist, enter a valid url.');
                    done();
                });
        });
    });
})

describe('Test for Parcel Order Endpoints', () => {
    describe('Test for POST parcels', () => {
        it('Should return 201 for success', (done) => {
            chai.request(app)
                .post('/api/v1/parcels')
                .send(successfulOrder)
                .end((error, response) => {
                    expect(response).to.have.status(201);
                    expect(response.body.message).to.equal("Your delivery order is booked successfully");
                    done();
                });
        });
        it('Should return 400 for undefined name', (done) => {
            chai.request(app)
                .post('/api/v1/parcels')
                .send(invalidName)
                done()
                .send(invalidPhone)
                done()
                .send(invalidEmail)
                done()
                .send(invalidWeight)
                done()
                .send(invalidParcelCon)
                done()
                .send(invalidQty)
                done()
                .send(invalidparcelType)
                done()
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please make sure to input correct values');
                    done();
                });
        });       
      
    });

    describe('Test for Fetch all Parcels Orders Endpoint', () => {
        it('Should return 200 for success', (done) => {
            chai.request(app)
                .get('/api/v1/parcels')
                .end((error, response) => {
                    expect(response).to.have.status(200);
                    expect(response.body.message).to.equal('All parcel delivery orders');
                    done();
                });
        });
    });

    describe('Test for Fetch specific Parcel Order Endpoint', () => {
        it('should return 200 for success', (done) => {
            chai.request(app)
                .get('/api/v1/parcels/219b1e64-afe5-5e71-ac0b-8b6a4c605a01')
                .end((error, response) => {
                    expect(response).to.have.status(200);
                    expect(response.body.message).to.equal('Fetched order successfull!');
                    done();
                });
        });
       
        it('return 404 for orderTrackId number that does not exist', (done) => {
            chai.request(app)
                .get('/api/v1/orders/:00001')
                .end((error, response) => {
                    expect(response).to.have.status(404);
                    expect(response.body.message).to.equal('Sorry! This page does not exist, enter a valid url.');
                    done();
                });
        });
        
    });
    describe('Test for Cancel a Parcel Order Endpoint', () => {
        it('Should return 200 for success', (done) => {
            chai.request(app)
                .put('/api/v1/parcels/219b1e64-afe5-5e71-ac0b-8b6a4c605a01/cancel')
                .end((error, response) => {
                    expect(response).to.have.status(200);
                    expect(response.body.message).to.equal('Your order is Cancelled!');
                    done();
                });
        });
    });
    
});

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
  
