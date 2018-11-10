import express from 'express';
import userController from '../controllers/userController';
import userValidator from '../middlewares/userValidator';
 


const userRouter = express.Router();

userRouter.post('/users', userValidator.signupValidator, userController.userSignUp);

export default userRouter;