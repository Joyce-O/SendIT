/*global arrayContainer:true, SliderInstance:true, DomObjects:true */
class placeOrderValidators {
    static orderValidator(request, response, next) {
        let {
            senderName,
            email,
            weight,
            parcelContent,
            receiverName,
            receiverPhone,
            price,
            quantity,
            senderPhone
        } = request.body;

        //Validate Name
        if (receiverName === undefined || senderName === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "name field should not be undefined"
                });
        }
        if (receiverName === '' || senderName === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter full name"
                });
        }

        const validateName = /^[a-z]+$/i;
        if (!validateName.test(receiverName || senderName)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "Alphebet characters expected for name"
                });
        }

        senderName = senderName.trim();
        receiverName = receiverName.trim();
        if (senderName.length < 3 || senderName.length > 50) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "name should be 3 to 50 characters long"
                });
        }
        if (receiverName.length < 3 || receiverName.length > 50) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "name should be 3 to 50 characters long"
                });
        }


        //Validate phone number inputs
        if (senderPhone === undefined || receiverPhone === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Phone number field should not be undefined"
                });
        }

        if (senderPhone === '' || receiverPhone === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter your phone number"
                });
        }
        const validPhoneNo = /^[0-9]+$/;
        if (!validPhoneNo.test(senderPhone || receiverPhone)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "Phone number field accepts only number digits"
                });
        }

        senderPhone = senderPhone.trim();
        receiverPhone = receiverPhone.trim();
        if (senderPhone.length < 10 || senderPhone.length > 12) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Phone number should be 10 to 12 digits long"
                });
        }
        if (receiverPhone.length < 10 || receiverPhone.length > 12) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Phone number should be 10 to 12 digits long"
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
        // email = email.trim();
        if (email.length < 10 || email.length > 40) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Email should be 10 to 40 characters long"
                });
        }


        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!validEmail.test(email)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "You are sending invalid email format"
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
        const validateWeight = /^(0|\d{1,3})([.]\d{1})?(\w[kg])$/;
        if (!validateWeight.test(weight)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "Weight should be in formats '0.0kg' or '00.0kg' or '000.0kg'"
                });
        }

        weight = parseFloat(weight);
        if (weight < 0 || weight > 1000) {
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
        if (parcelContent.length < 3 || parcelContent.length > 20) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Parcel content should be 3 to 20 characters long"
                });
        }

        const validParcelContent = /^[a-z]+$/i;
        if (!validParcelContent.test(parcelContent)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "Alphebet characters expected"
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
        if (price.length < 3 || price.length > 5) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Price should be 3 to 20 digits long"
                });
        }

        const validatePrice = /^\d+$/;
        if (!validatePrice.test(price)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "Number digits expected for price"
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
        if (quantity.length < 1 || quantity.length > 2) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "1 to 2 digits expect for quantity"
                });
        }


        const validateQty = /^\d+$/;
        if (!validateQty.test(quantity)) {
            return response.status(400)
                .json({
                    status: "!Unsuccessful",
                    message: "Number digits expected"
                });
        }


        //Validate parcelType
        if (parcelType === undefined) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Parcel type field should not be undefined"
                });
        }
        if (parcelType === '') {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Please enter parcel type as either 'delicate' or non 'delicate'"
                });
        }

        parcelType = parcelType.trim();
        if (parcelType.length < 8 || parcelType.length > 11) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "parcel type should be 8 to 12 characters long"
                });
        }


        const validParcelType = /(?:$|^| )(non-delicate|delicate)(?:$|^| )/;
        if (!validParcelType.test(parcelType)) {
            return response.status(400)
                .json({
                    status: "Unsuccessful!",
                    message: "Plaese enter 'delicate' or 'non-delicate'"
                });
        }

        request.body.senderName = senderName;
        request.body.receiverName = receiverName
        request.body.email = email;
        request.body.senderPhone = senderPhone;
        request.body.receiverPhone = receiverPhone;
        request.body.weight = weight;
        request.body.parcelContent = parcelContent;
        request.body.price = price;
        request.body.quantity = quantity;
        request.body.parcelType = parcelType;
        next();

    }
}
export default placeOrderValidators;
