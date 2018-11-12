import placeOrder from "../inMemoryData/placeOrder";
import users from '../inMemoryData/users';

class placeOrderValidators {
    static orderValidator(request, response, next) {
        let {
            senderName,
            receiverName,
            senderPhone,
            receiverPhone,
            email,
            weight,
            parcelContent,
            price,
            quantity,
            parcelType
        } = request.body;

        //Validate Name
        if (receiverName === undefined || senderName === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "senderName or receiverName field should not be undefined"
                });
        }
        if (receiverName === '' || senderName === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter senderName or receiverName"
                });
        }

        // console.log(receiverName + " is receiver");
        receiverName = receiverName.trim();
        senderName = senderName.trim();
        const validateName = /[a-z]+$/i;
        if (!validateName.test(receiverName || senderName)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Alphebet characters expected for senderName or receiverName"
                });
        }


        if (senderName.length < 3 || senderName.length > 50) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "senderName should be 3 to 50 characters long"
                });
        }

        if (receiverName.length < 3 || receiverName.length > 50) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "receiverName should be 3 to 50 characters long"
                });
        }

        //Validate phone number inputs
        if (senderPhone === undefined || receiverPhone === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "senderPhone or receiverPhone number field should not be undefined"
                });
        }

        if (senderPhone === '' || receiverPhone === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter senderPhone and/or receiverPhone number"
                });
        }

        senderPhone = senderPhone.trim();
        receiverPhone = receiverPhone.trim();
        const validPhoneNo = /^[0-9]+$/;
        if (!validPhoneNo.test(senderPhone || receiverPhone)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "senderPhone or receiverPhone number field accepts only number digits"
                });
        }


        if (senderPhone.length < 10 || senderPhone.length > 12) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "senderPhone number should be 10 to 12 digits long"
                });
        }
        if (receiverPhone.length < 10 || receiverPhone.length > 12) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "receiverPhone number should be 10 to 12 digits long"
                });
        }

        //Validate emails
        if (email === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Email field should not be undefined"
                });
        }
        if (email === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter your email"
                });
        }

        email = email.trim();
        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!validEmail.test(email)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "You are sending invalid email format"
                });
        }

        if (email.length < 10 || email.length > 40) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Email should be 10 to 40 characters long"
                });
        }


        //Validate weight inputs
        if (weight === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "weight field should not be undefined"
                });
        }

        if (weight === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter a value for weight"
                });
        }
        weight = weight.trim();
        const validateWeight = /^(0|\d{1,3})([.]\d{1})?(\w[kg])$/;
        if (!validateWeight.test(weight)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Weight should be in formats '0.0kg' or '00.0kg' or '000.0kg'"
                });
        }

        weight = parseFloat(weight);
        if (weight <= 0 || weight > 1000) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "weight should be from 0.1kg to 1000 kg"
                });
        }

        //Validate Parcel content
        if (parcelContent === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "parcel content field should not be undefined"
                });
        }
        if (parcelContent === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter the parcel content"
                });
        }

        parcelContent = parcelContent.trim();
        const validParcelContent = /^[a-z]+$/i;
        if (!validParcelContent.test(parcelContent)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful",
                    message: "Alphebet characters expected in parcelContent field"
                });
        }

        if (parcelContent.length < 3 || parcelContent.length > 20) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Parcel content should be 3 to 20 characters long"
                });
        }

        //Validate Price
        if (price === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Price field should not be undefined"
                });
        }
        if (price === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter the price"
                });
        }

        price = price.trim();
        const validatePrice = /^\d+$/;
        if (!validatePrice.test(price)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Number digits expected for price"
                });
        }

        if (price.length < 3 || price.length > 5) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Price should be 3 to 5 digits long"
                });
        }

        //Validate quantity
        if (quantity === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Quantity field should not be undefined"
                });
        }
        if (quantity === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter the quantity"
                });
        }

        quantity = quantity.trim();
        const validateQty = /^\d+$/;
        if (!validateQty.test(quantity)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Number digits expected in quantity field"
                });
        }

        if (quantity.length > 2) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "1 to 2 digits expected for quantity"
                });
        }

        //Validate parcelType
        if (parcelType === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "ParcelType field should not be undefined"
                });
        }
        if (parcelType === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter parcelType as either 'delicate' or non 'delicate'"
                });
        }

        parcelType = parcelType.trim();
        const validParcelType = /(?:$|^| )(non-delicate|delicate)(?:$|^| )/;
        if (!validParcelType.test(parcelType)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Wrong format, please enter parcelType as 'delicate' or 'non-delicate'"
                });
        }
        request.body.senderName = senderName;
        request.body.receiverName = receiverName
        request.body.senderPhone = senderPhone;
        request.body.receiverPhone = receiverPhone;
        request.body.email = email;
        request.body.weight = weight;
        request.body.parcelContent = parcelContent;
        request.body.price = price;
        request.body.quantity = quantity;
        request.body.parcelType = parcelType;
        next();

    }
    static getOrderHistoryValidator(request, response, next) {
        const { userId } = request.params;
        
        const isExistUser = users.find(users => users.id === Number(userId));

        console.log("my user id " + isExistUser);
        if (!Number(userId) || userId <= 0) {
          return response.status(400)
            .json({
              status: 'Unsuccessful!',
              message: 'URL does not exist. userId should be a positive integer greater than zero'
            });
        }
        next();
      }
    

    static getSpecificOrderValidator(request, response, next) {
        let {parcelId} = request.params;
        const isExistOrder = placeOrder.find(placeOrder => placeOrder.trackingID === (parcelId));
        if (!isExistOrder) {
            return response.status(404)
                .json({
                    status: 'Unsuccessful!',
                    message: 'Sorry! Order does not exist'
                });
        }
        request.body.isExistOrder = isExistOrder;
        next();
    }

    static updateOrderValidator(request, response, next) {
        const { parcelId } = request.params;
        if (!(parcelId)) {
            return response.status(400)
                .json({
                    status: 'Unsuccessful!',
                    message: 'Sorry! this is an invalid URL'
                });
        }

        const isExistOrder = placeOrder.find(placeOrder => placeOrder.trackingID === (parcelId));
        if (!isExistOrder) {
            return response.status(404)
                .json({
                    status: 'Unsuccessful!',
                    message: 'Sorry! Order does not exist'
                });
        }

        let parcelStatus = isExistOrder.status;
         
        if (parcelStatus === 'Delivered' || parcelStatus === 'Cancelled') {
            return response.status(404)
                .json({
                    status: 'Unsuccessful!',
                    message: 'Parcel order cannot be updated, it is either delivered or cancelled.'
                });
        }
        request.body.parcelStatus = parcelStatus;
        request.body.isExistOrder = isExistOrder;
        next();
    }
    
            

}

const {
    orderValidator, getOrderHistoryValidator, getSpecificOrderValidator, updateOrderValidator
  } = placeOrderValidators
  
  export {
    orderValidator, getOrderHistoryValidator, getSpecificOrderValidator, updateOrderValidator
  };
