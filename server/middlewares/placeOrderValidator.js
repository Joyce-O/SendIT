class placeOrderValidator {
    static orderValidator(request, response, next) {
        let {
            sentTo,
            pickup,
            destination,
            weight,
            parcelContent
        } = request.body;

        let errors = {};

        if (!sentTo || sentTo.length < 3 && !/[a-z]+$/i.test(sentTo)) {
            errors.sentTo = "Please enter valid name"
        }

        if (!pickup || pickup.length < 10 && !/^[a-z0-9]+$/i.test(pickup)) {
            errors.pickup = "Please enter valid pickup address"
        }
        if (!destination || destination.length < 10 && !/^[a-z0-9]+$/i.test(destination)) {
            errors.destination = "Please enter a valid destination"
        }

        const validateWeight = /^(0|\d{1,3})([.]\d{1})?(\w[kg])$/;
        if (!weight && !validateWeight.test(weight)) {
            errors.weight = "Weight should be in formats '0.0kg' or '00.0kg' or '000.0kg'"
        }

        if (!parcelContent || parcelContent.length <= 3 && !/^[a-z]+$/i.test(parcelContent)) {

            errors.parcelContent = "Please enter valid parcel content description"
        }


        if (JSON.stringify(errors) !== '{}') {
            return response.status(400)
                .json({
                    success: false,
                    message: "Please make sure to input correct values",
                    errors
                });
        }

        request.body.sentTo = sentTo;
        request.body.pickup = pickup;
        request.body.destination = destination;
        request.body.weight = weight;
        request.body.parcelContent = parcelContent;

        next();

    }


    static getOrderListValidator(request, response, next) {
        const { user_id } = request.params;
        if (!Number(user_id) || user_id <= 0) {
            return response.status(400)
                .json({
                    success: false,
                    message: 'Invalid user id'
                });
        }
        next();
    }
}

// const {orderValidator} = placeOrderValidator;

export default placeOrderValidator;
