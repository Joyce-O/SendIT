import placeOrder from "../inMemoryData/placeOrder";
import users from '../inMemoryData/users';

class placeOrderValidator {
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

        const errors = {};
                  
        if (senderName === undefined || senderName < 3) {
            error[name] = response.status(400)
                .json({
                    success: false,
                    message: "Please enter name"
                });
        }

        const validateName = /[a-z]+$/i;
        if (!validateName.test(senderName || receiverName)) {
          errors[name] =  response.status(400)
                .json({
                    success: "",
                    message: "Alphebet characters expected for senderName or receiverName"
                });
        }

        senderPhone = senderPhone.trim();
        if (senderPhone === undefined || senderPhone < 10 ) {
        errors[senderPhone] =  response.status(400)
                .json({
                    success: false,
                    message: "phone number field should not be empty"
                });
        }

        const validPhoneNo = /^[0-9]+$/;
        if (!validPhoneNo.test(senderPhone)) {
             errors[senderPhone] = response.status(400)
                .json({
                    success: false,
                    message: "Phone number field accepts only number digits"
                });
        }

        email = email.trim();
        if (email === undefined || email < 10) {
            errors[email] = response.status(400)
                .json({
                    success: false,
                    message: "Please input your email"
                });
        }
       
        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!validEmail.test(email)) {
            errors[email] =  response.status(400)
                .json({
                    success: false,
                    message: "You are sending invalid email format"
                });
        }

        weight = weight.trim();
        if (weight === undefined || parseFloat(weight) <= 0) {
            errors[weight] =  response.status(400)
                .json({
                    success: false,
                    message: "Weight field should not be empty "
                });
        }

        const validateWeight = /^(0|\d{1,3})([.]\d{1})?(\w[kg])$/;
        if (!validateWeight.test(weight)) {
            errors[weight] = response.status(400)
                .json({
                    success: false,
                    message: "Weight should be in formats '0.0kg' or '00.0kg' or '000.0kg'"
                });
        }

        parcelContent = parcelContent.trim();
        if (parcelContent === undefined || parcelContent <= 3) {
            errors[parcelContent] = response.status(400)
                .json({
                    success: false,
                    message: "parcel content field should not be empty"
                });
        }
       
        const validParcelContent = /^[a-z]+$/i;
        if (!validParcelContent.test(parcelContent)) {
            errors[parcelContent] = response.status(400)
                .json({ 
                    success: false,
                    message: "Alphebet characters expected in parcelContent field"
                });
        }

        quantity = quantity.trim();
        if (quantity === undefined || quantity <= 0 ) {
            errors[quantity] = response.status(400)
                .json({
                    success: false,
                    message: "Quantity field should not be empty"
                });
        }

        const validateQty = /^\d+$/;
        if (!validateQty.test(quantity)) {
            errors[quantity] = response.status(400)
                .json({
                    success: false,
                    message: "Number digits expected in quantity field"
                });
        }

        parcelType = parcelType.trim();
        if (parcelType === undefined || parcelType < 8) {
            errors[parcelType] = response.status(400)
                .json({
                    success: false,
                    message: "ParcelType field should not be empty"
                });
        }

        const validParcelType = /(?:$|^| )(non-delicate|delicate)(?:$|^| )/;
        if (!validParcelType.test(parcelType)) {
            errors[parcelType] = response.status(400)
                .json({
                    success: false,
                    message: "Wrong format, please enter parcelType as 'delicate' or 'non-delicate'"
                });
        }

        return errors;
        // request.body.senderName = senderName;
        // request.body.receiverName = receiverName
        // request.body.senderPhone = senderPhone;
        // request.body.receiverPhone = receiverPhone;
        // request.body.email = email;
        // request.body.weight = weight;
        // request.body.parcelContent = parcelContent;
        // request.body.price = price;
        // request.body.quantity = quantity;
        // request.body.parcelType = parcelType;
        next();

    }
    static getOrderValidator(request, response, next) {
        const { userId } = request.params;
        
        const isExistUser = users.find(users => users.id === Number(userId));

        if (!Number(userId) || userId <= 0) {
          return response.status(400)
            .json({
              success: false,
              message: 'URL does not exist. userId should be a positive integer greater than zero'
            });
        }
        next();
      }
    

    static getAnOrderValidator(request, response, next) {
        let {parcelId} = request.params;
        const isExistOrder = placeOrder.find(placeOrder => placeOrder.trackingID === (parcelId));
        if (!isExistOrder) {
            return response.status(404)
                .json({
                    success: false,
                    message: 'Sorry! Order does not exist'
                });
        }
        request.body.isExistOrder = isExistOrder;
        next();
    }

    static updateOrderValidator(request, response, next) {
        const { parcelId } = request.params;

        const isExistOrder = placeOrder.find(placeOrder => placeOrder.trackingID === (parcelId));
        if (!isExistOrder) {
            return response.status(404)
                .json({
                    success: false,
                    message: 'Sorry! Order does not exist'
                });
        }

        let parcelStatus = isExistOrder.status;
         
        if (parcelStatus === 'Delivered' || parcelStatus === 'Cancelled') {
            return response.status(404)
                .json({
                    success: false,
                    message: 'Parcel order cannot be updated, it is either delivered or cancelled.'
                });
        }
        // request.body.parcelStatus = parcelStatus;
        request.body.isExistOrder = isExistOrder;
        next();
    }
    
            

}

const {
    orderValidator, getOrderValidator, getAnOrderValidator, updateOrderValidator
  } = placeOrderValidator
  
  export {
    orderValidator, getOrderValidator, getAnOrderValidator, updateOrderValidator
  };
