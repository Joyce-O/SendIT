import express from 'express';
import {
    orders, fetchAllOrders, fetchSpecificOrders, fetchUserOrderHistory, cancelOrder
  } from '../controllers/placeOrderController';

import {
    orderValidator, getOrderValidator, getAnOrderValidator, updateOrderValidator
  } from '../middlewares/placeOrderValidator';
  

const placeOrderRouter = express.Router();

placeOrderRouter.post('/placeOrder', orderValidator, orders);
placeOrderRouter.get('/parcels', fetchAllOrders);
placeOrderRouter.get('/parcels/:parcelId', getAnOrderValidator, fetchSpecificOrders);
placeOrderRouter.get('/users/:userId/parcels', getOrderValidator, fetchUserOrderHistory); 
placeOrderRouter.put('/parcels/:parcelId/cancel', updateOrderValidator, cancelOrder );

export default placeOrderRouter;