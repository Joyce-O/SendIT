import express from 'express';

import {
    userSignUp, getAllUsers
  } from '../controllers/userController';
  
import userValidator from '../middlewares/userValidator';
import { fetchAllOrders } from '../controllers/placeOrderController';
 


const userRouter = express.Router();

userRouter.post('/users', userValidator.signupValidator, userSignUp);
userRouter.get('/users',  getAllUsers);

export default userRouter;