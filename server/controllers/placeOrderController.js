import pool from '../db/connection';
import { createOrder, selectAllOrders } from '../db/sqlQueries';
import shortid from 'shortid';
import ordersTable from '../db/tablesSetup/orderTable';


class OrderHandler {
  static parcelOrders(request, response) {
    const { sentTo, pickup, destination, parcelContent } = request.body;
    const user_id = request.authData.payload.user_id;
    const trackingID = shortid.generate();
    const currentLocation = 'Lagos';
    const status = 'pending';
    let weight = parseFloat(request.body.weight);
    let distance = 100;
    let duration = '1 day';
    weight = Math.round(weight);
    let cost = (weight) => {
     let perKg = 500;
      return weight * perKg;
   }
  let price = cost(weight);

    const values = [user_id, trackingID, sentTo, pickup ||  request.authData.payload.address, destination, weight, price, parcelContent, currentLocation, status, duration, distance];
    pool.query(createOrder, values)
      .then(() => response.status(201)
        .json({    
          success: true,
          message: 'Your order was placed successfully'
        }))
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }


  static getUserOrder(request, response) {
    const { user_id } = request.params;
    const userInfo = request.authData.payload;
    if (userInfo.user_id === user_id) {
      pool.query(selectUserOrderlist, [user_id])
        .then(result => response.status(200)
          .json({
            message: 'Order list is successfully fetched',
            result
          }))
        .catch(error => response.status(500)
          .json({
            success: false,
            message: error.message
          }));
    }
    return response.status(401)
      .json({
        success: false,
        message: 'Unauthorized access'
      });
    }

  static getAllOrders(request, response) {
    pool.query(selectAllOrders)
      .then((result) => {
        const allOrders = result.rows;
        return response.status(200)
          .json({
            success: true,
            message: 'All orders placed as of date',
            allOrders
          });
      })
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }
  static cancelOrder(request, response) {
    const { parcelId } = request.params;
    pool.query(updateOrderStatus, ['Cancelled', parcelId])
      .then((result) => {
        return response.status(200)
          .json({
            message: 'Order Cancelled'
          });
      })
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }
}

// const { parelOrders } = OrderHandler;

export default OrderHandler;