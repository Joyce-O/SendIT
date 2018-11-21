import pool from '../db/connection';
import { createOrder } from '../db/sqlQueries';
import shortid from 'shortid';
import ordersTable from '../db/tablesSetup/orderTable';


class OrderHandler {
  static parcelOrders(request, response) {
    const { sentTo, from, to, parcelContent } = request.body;
    const user_id = request.authData.payload.id;
    const trackingID = shortid.generate();
    const currentLocation = 'Lagos';
    const status = 'pending';
    let weight = parseFloat(request.body.weight);
    let distance = 100;
    let duration = "1 day";
    weight = Math.round(weight);
    const price = (weight) => {
     let perKg = 500;
      return weight * perKg;
   }

    const values = [user_id, trackingID, sentTo, from || request.authData.payload.address,to, weight, price, parcelContent, currentLocation, status, duration, distance];
    pool.query(createOrder, values)
      .then(() => response.status(201)
        .json({
          success: true,
          message: 'Your order was placed successfully',
        }))
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }
}

// const { parelOrders } = OrderHandler;

export default OrderHandler;