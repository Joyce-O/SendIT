import express from 'express';
import {
    orders, fetchAllOrders, fetchSpecificOrders
  } from '../controllers/placeOrderController';

import {
    orderValidator, getSpecificOrderValidator
  } from '../middlewares/placeOrderValidator';
  

const placeOrderRouter = express.Router();

placeOrderRouter.post('/placeOrder', orderValidator, orders);
placeOrderRouter.get('/parcels', fetchAllOrders);
placeOrderRouter.get('/parcels/:parcelId', getSpecificOrderValidator, fetchSpecificOrders);

export default placeOrderRouter;