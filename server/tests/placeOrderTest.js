import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import {
    successfulOrder, undefinedName, emptyName, invalidSenderNameLt, invalidReceiverLt, invalidNameChar, undefinedPhone, emptyPhone, invalidPhoneFormat, invalidSenderPhoneLt, invalidReceiverPhoneLt, undefinedEmail,
    emptyEmail, invalidEmailFormat, invalidEmailLength,
    undefinedWeight, emptyWeight, invalidWeightLength, invalidWeigthChar, undefinedParcelContent,
    emptyParcelContent, invalidParcelContentLt, invalidParcelContentChar, undefinedPrice,
    emptyPrice, invalidPriceLength, invalidPriceChar, undefinedQty, emptyQty, invalidQtyLength, invalidQtyChar, undefinedParcelType, emptyParcelType, invalidParcelTypeLt, invalidParcelTypeChar

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
                    expect(response.body.message).to.equal('Welcome to MailXpress, your package is safe with us');
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
    describe('Test for POST placeOrder', () => {
        it('Should return 201 for success', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(successOrder)
                .end((error, response) => {
                    expect(response).to.have.status(201);
                    expect(response.body.message).to.equal("Your delivery order is booked successfully");
                    done();
                });
        });
        it('Should return 400 for undefined name', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedName)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('senderName or receiverName field should not be undefined');
                    done();
                });
        });

        it('Should return 400 for empty name', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptySenderName)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter senderName');
                    done();
                });
        });

        it('Should return 400 for invalid sender name field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidSenderNameLt)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('senderName should be 3 to 50 characters long');
                    done();
                });
        });

        it('Should return 400 for invalid receiver name', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidReceiverLt)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('receiverName should be 3 to 50 characters long');
                    done();
                });
        });

        it('Should return 400 for invalid name format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidNameChar)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Alphebet characters expected for senderName or receiverName');
                    done();
                });
        });

        it('Should return 400 for Undefined phone number', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedPhone)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('senderPhone or receiverPhone number field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty phone number field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyPhone)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter senderPhone and/or receiverPhone number');
                    done();
                });
        });
        it('Should return 400 for invalid phone format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidPhoneFormat)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('senderPhone or receiverPhone number field accepts only number digits');
                    done();
                });
        });
        it('Should return 400 for invalid senderPhone length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidSenderPhoneLt)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('senderPhone number should be 10 to 12 digits long');
                    done();
                });
        });

        it('Should return 400 for invalid receiverPhone length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidReceiverPhoneLt)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('receiverPhone number should be 10 to 12 digits long');
                    done();
                });
        });

        it('Should return 400 for Undefined Email', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedEmail)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Email field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty Email field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyEmail)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter your email');
                    done();
                });
        });

        it('Should return 400 for invalid Email format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidEmailFormat)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('You are sending invalid email format');
                    done();
                });
        });

        it('Should return 400 for invalid Email length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidEmailLength)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Email should be 10 to 40 characters long');
                    done();
                });
        });

        it('Should return 400 for undefined weight field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedWeight)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('weight field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty weight field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyWeight)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter a value for weight');
                    done();
                });
        });
        it('Should return 400 for invalid weight length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidWeightLength)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal("weight should be from 0.1kg to 1000 kg");
                    done();
                });
        });
        it('Should return 400 for invalid weight format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidWeigthChar)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal("Weight should be in formats '0.0kg' or '00.0kg' or '000.0kg'");
                    done();
                });
        });
        it('Should return 400 for undefined parcel content field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedParcelContent)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('parcel content field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty parcel content field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyParcelContent)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter the parcel content');
                    done();
                });
        });
        it('Should return 400 for invalid parcel content format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidParcelContentChar)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Alphebet characters expected in parcelContent field');
                    done();
                });
        });
        it('Should return 400 for invalid parcel content length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidParcelContentLt)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Parcel content should be 3 to 20 characters long');
                    done();
                });
        });

        it('Should return 400 for undefined price field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedPrice)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Price field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty price field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyPrice)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter the price');
                    done();
                });
        });
        it('Should return 400 for inavalid price format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidPriceChar)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Number digits expected for price');
                    done();
                });
        });
        it('Should return 400 for invalid price length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidPriceLength)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Price should be 3 to 5 digits long');
                    done();
                });
        });
        it('Should return 400 for undefined quantity field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedQty)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Quantity field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty quantity field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyQty)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Please enter the quantity');
                    done();
                });
        });
        it('Should return 400 for inavalid quantity format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidQtyChar)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Number digits expected in quantity field');
                    done();
                });
        });
        it('Should return 400 for invalid quantity length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidQtyLength)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('1 to 2 digits expected for quantity');
                    done();
                });
        });

        it('Should return 400 for undefined parcel type field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(undefinedParcelType)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('ParcelType field should not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty parcel type field', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(emptyParcelType)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal("Please enter parcelType as either 'delicate' or non 'delicate'");
                    done();
                });
        });
        it('Should return 400 for inavalid parcel type format', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidParcelTypeChar)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal("Wrong format, please enter parcelType as 'delicate' or 'non-delicate'");
                    done();
                });
        });
        it('Should return 400 for invalid parcel type length', (done) => {
            chai.request(app)
                .post('/api/v1/placeOrder')
                .send(invalidParcelTypeLt)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('parcelType should be 8 to 12 characters long');
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
});
