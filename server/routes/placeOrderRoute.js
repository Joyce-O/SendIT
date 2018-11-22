import express from 'express';

import {verifyToken, parmitAdmin} from '../middlewares/authentication';
import placeOrderValidator from '../middlewares/placeOrderValidator';
import orderHandler from '../controllers/placeOrderController';


const placeOrderRouter = express.Router();

placeOrderRouter.post('/parcels', verifyToken, placeOrderValidator.orderValidator, orderHandler.parcelOrders);

placeOrderRouter.get('/parcels', verifyToken, parmitAdmin, orderHandler.getAllOrders);

placeOrderRouter.get('/users/:userId/parcels', verifyToken, placeOrderValidator.getOrderListValidator, orderHandler.getUserOrder);
placeOrderRouter.put('/parcels/:parcelId/cancel', verifyToken, parmitAdmin, placeOrderValidator.getOrderListValidator, placeOrderValidator.updateOrderValidator, orderHandler.cancelOrder);

export default placeOrderRouter;