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

        let errors = {};

        if (!senderName || senderName.length < 3 && !/[a-z]+$/i.test(senderName)) {
            errors.senderName = "Please enter valid name"
        }

        if (!senderPhone || senderPhone.length < 10 && ! /^[0-9]+$/.test(senderPhone)) {
            errors.senderPhone = "Please enter valid phone number"
        }
        
        const validEmailChar = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || email.length < 10 && !validEmailChar.test(email)) {
            errors.email = "Please enter valid email"
        }

        const validateWeight = /^(0|\d{1,3})([.]\d{1})?(\w[kg])$/;
        if (!weight && !validateWeight.test(weight)) {
            errors.weight = "Weight should be in formats '0.0kg' or '00.0kg' or '000.0kg'"
        }

        if (!parcelContent || parcelContent.length <= 3 && !/^[a-z]+$/i.test(parcelContent)) {

            errors.parcelContent = "Please enter valid parcel content description"
        }

        if (!quantity || quantity.length <= 0 && !/^\d+$/.test(quantity)) {
            errors.quantity = "Please enter valid quantity value"
        }

        const validParcelType = /(?:$|^| )(non-delicate|delicate)(?:$|^| )/;
        if (!parcelType || parcelType.length < 8 && !validParcelType.test(parcelType)) {
            errors.parcelType = "Please enter valid parcel type"
        }

        
        if(JSON.stringify(errors) !== '{}'){
       return response.status(400)
            .json({
                success: false,
                message: "Please make sure to input correct values",
                 errors
            });
        }
            
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
        let { parcelId } = request.params;
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

        request.body.isExistOrder = isExistOrder;
        next();
    }
    static deleteOrderValidator(request, response, next) {
        const { parcelId } = request.params;

        const orderExist = placeOrder.find(placeOrder => placeOrder.trackingID === (parcelId));
        if (!orderExist) {
            return response.status(404)
                .json({
                    success: false,
                    message: 'Sorry! Order does not exist'
                });
        }


        request.body.orderExist = orderExist;
        next();
    }
}

const {
    orderValidator, getOrderValidator, getAnOrderValidator, updateOrderValidator, deleteOrderValidator
} = placeOrderValidator

export {
    orderValidator, getOrderValidator, getAnOrderValidator, updateOrderValidator,deleteOrderValidator
};
