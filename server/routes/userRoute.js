import express from 'express';
import userSignup from '../controllers/userController';


 const userRouter = express.Router();

 userRouter.post('/auth/signup', userSignup);

 export default userRouter;