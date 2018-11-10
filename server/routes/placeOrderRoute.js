import express from 'express';
import {
    orders, fetchAllOrders, fetchSpecificOrders, fetchUserOrderHistory
  } from '../controllers/placeOrderController';

import {
    orderValidator, getOrderHistoryValidator, getSpecificOrderValidator
  } from '../middlewares/placeOrderValidator';
  

const placeOrderRouter = express.Router();

placeOrderRouter.post('/placeOrder', orderValidator, orders);
placeOrderRouter.get('/parcels', fetchAllOrders);
placeOrderRouter.get('/parcels/:parcelId', getSpecificOrderValidator, fetchSpecificOrders);
placeOrderRouter.get('/users/:userId/parcels', getOrderHistoryValidator, fetchUserOrderHistory); 

export default placeOrderRouter;