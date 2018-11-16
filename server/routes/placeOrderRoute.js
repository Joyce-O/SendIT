import express from 'express';
import {
    orders, fetchAllOrders, fetchSpecificOrders, fetchUserOrderHistory, cancelOrder, deleteOrder 
  } from '../controllers/placeOrderController';

import {
    orderValidator, getOrderValidator, getAnOrderValidator, updateOrderValidator, deleteOrderValidator
  } from '../middlewares/placeOrderValidator';
  

const placeOrderRouter = express.Router();

placeOrderRouter.post('/parcels', orderValidator, orders);
placeOrderRouter.get('/parcels', fetchAllOrders);
placeOrderRouter.get('/parcels/:parcelId', getAnOrderValidator, fetchSpecificOrders);
placeOrderRouter.get('/users/:userId/parcels', getOrderValidator, fetchUserOrderHistory); 
placeOrderRouter.put('/parcels/:parcelId/cancel', updateOrderValidator, cancelOrder );
placeOrderRouter.delete('/parcels/:parcelId/delete', deleteOrderValidator,deleteOrder);

export default placeOrderRouter;