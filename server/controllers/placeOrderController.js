import uuidv5 from 'uuid/v5';
import users from '../inMemoryData/users';
import placeOrder from '../inMemoryData/placeOrder';

class placeOrderHandler {
    static orders(request, response) {
        const {
            email,
            weight,
            parcelContent,
            price,
            quantity,
            pickupAddress,
            parcelType,
            senderPhone,
            senderName,
            receiverName,
            destinationAddress,
            receiverPhone

        } = request.body;

        //If delicate return 100 else non-delicate 50
        const parcelTypeCost = (delicate) => {
            return (delicate === "delicate") ? 100 : 50;
        }
        const presentLocation = "Jos";
        const total = (quantity * price) + parcelTypeCost(parcelType);
        const status = 'pending';
        const id = placeOrder.length;
        const trackingID = uuidv5(`${senderName}${new Date()}${id}`, uuidv5.URL)
        const sendOrder = {
            email,
            weight,
            parcelContent,
            price,
            quantity,
            pickupAddress,
            parcelType,
            senderPhone,
            senderName,
            receiverName,
            destinationAddress,
            receiverPhone,
            status,
            total,
            presentLocation,
            trackingID
        };

        placeOrder.push(sendOrder);
        return response.status(201)
            .json({
                message: "Your delivery order is booked successfully",
                sendOrder
            });
    }

    static fetchAllOrders(request, response) {
        const allParcelsOrdered = placeOrder.reverse();
           return response.status(200)
            .json({
                succes: true,
                message: 'All parcel delivery orders',
                allParcelsOrdered
            });
    }

    static fetchSpecificOrders(request, response) {
        const { isExistOrder } = request.body;
        return response.status(200)
            .json({
                succes: true,
                message: 'Fetched order successfull!',
                isExistOrder
            });
    }

    static fetchUserOrderHistory(request, response) {
        const { userId } = request.params;
        let userEmail = users.find(users => users.id === Number(userId));

        userEmail = userEmail.email;
        let userOrders = placeOrder.filter((placeOrder) => placeOrder.email === userEmail);
        return response.status(200)
            .json({
                succes: true,
                message: 'Fetched order!',
                userOrders
            });
    }
    
    static cancelOrder(request, response) {
        let { parcelStatus, isExistOrder } = request.body;
        // let isExistOrder = request.body;
        parcelStatus = "Cancelled";
        isExistOrder.status = parcelStatus;

        return response.status(200)
            .json({
                succes: true,
                message: 'Your order is Cancelled!',
                isExistOrder
            });

    }

}

const {
    orders, fetchAllOrders, fetchSpecificOrders, fetchUserOrderHistory, cancelOrder
} = placeOrderHandler

export {
    orders, fetchAllOrders, fetchSpecificOrders, fetchUserOrderHistory, cancelOrder
};

