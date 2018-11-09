import express from 'express';
import placeOrdersController from '../controllers/placeOrderController';
// import placeOrdersController from '../controllers/placeOrderController';
import placeOrderValidator from '../middlewares/placeOrderValidator';

const placeOrderRouter = express.Router();

placeOrderRouter.post('/placeOrder', placeOrderValidator.orderValidator, placeOrdersController.orders);

export default placeOrderRouter;