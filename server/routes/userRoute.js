import express from 'express';

import {
    userSignUp, getAllUsers, fetchSpecificUser
  } from '../controllers/userController';

  import {
    signupValidator, getAUserValidator
  } from '../middlewares/userValidator';
  
 


const userRouter = express.Router();

userRouter.post('/users', signupValidator, userSignUp);
userRouter.get('/users',  getAllUsers);
userRouter.get('/users/:userId', getAUserValidator, fetchSpecificUser);

export default userRouter;