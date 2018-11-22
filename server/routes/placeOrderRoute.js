import express from 'express';

import {verifyToken} from '../middlewares/authentication'
// import orderValidator from '../middlewares/placeOrderValidator'
import placeOrderValidator from '../middlewares/placeOrderValidator';
import orderHandler from '../controllers/placeOrderController'


const placeOrderRouter = express.Router();

placeOrderRouter.post('/parcels', verifyToken, placeOrderValidator.orderValidator, orderHandler.parcelOrders);

export default placeOrderRouter;