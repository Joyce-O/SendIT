class placeOrderValidator {
    static orderValidator(request, response, next) {
        let {
            sentTo,
            from,
            to,
            weight,
            parcelContent
        } = request.body;

        let errors = {};

        if (!sentTo || sentTo.length < 3 && !/[a-z]+$/i.test(sentTo)) {
            errors.sentTo = "Please enter valid name"
        }

        if (!from || from.length < 10 && !/^[a-z0-9]+$/i.test(from)) {
            errors.from = "Please enter valid pickup address"
        }
        if (!to || to.length < 10 && !/^[a-z0-9]+$/i.test(to)) {
            errors.to = "Please enter a valid destination"
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
        request.body.from = from;
        request.body.to = to;
        request.body.weight = weight;
        request.body.parcelContent = parcelContent;

        next();

    }
}

// const {orderValidator} = placeOrderValidator;

export default placeOrderValidator;
