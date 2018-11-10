
import placeOrders from '../inMemoryData/placeOrder';
import uuidv5 from 'uuid/v5';

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

        console.log(request.body);
        //If delicate return 100 else non-delicate 50
        const parcelTypeCost = (delicate) => {
            return (delicate === "delicate") ? 100 : 50;
        }
        const presentLocation = "Jos";
        const total = (quantity * price) + parcelTypeCost(parcelType);
        const status = 'pending';
        const id = placeOrders.length;
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

        placeOrders.push(sendOrder);
        return response.status(201)
            .json({
                message: "Your delivery order is booked successfully",
                sendOrder
            });
    }
    
    static fetchAllOrders(request, response) {
        const allParcelsOrdered = placeOrders.reverse();
        // console.log(allParcelsOrdered);
        return response.status(200)
            .json({
                message: 'All parcel delivery orders',
                allParcelsOrdered
            });
    }

    static fetchSpecificOrders(request, response) {
        const { isExistOrder } = request.body;

        console.log(isExistOrder);
        return response.status(200)
            .json({
                message: 'Fetched order successfull!',
                isExistOrder
            });
    }
}

const {
    orders, fetchAllOrders, fetchSpecificOrders
  } = placeOrderHandler
  
  export {
    orders, fetchAllOrders, fetchSpecificOrders
  };

