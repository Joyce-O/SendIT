import express from 'express';
import {userSignup, userLogin} from '../controllers/userController';
import { signupValidator, loginUserValidator } from '../middlewares/userValidator';



 const userRouter = express.Router();

 userRouter.post('/auth/signup', signupValidator, userSignup);
 userRouter.post('/auth/login', loginUserValidator, userLogin);

 export default userRouter;