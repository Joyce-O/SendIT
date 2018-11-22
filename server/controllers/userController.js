import { createUser, queryUsersByEmail } from '../db/sqlQueries';
import bcrypt, { compareSync } from 'bcrypt';

import { generateToken } from '../middlewares/authentication';
import pool from '../db/connection';

class UserHandler {
  static userSignup(request, response) {
    const { name, email, phone, address } = request.body;
    const values = [
      name,
      email,
      phone,
      bcrypt.hashSync(request.body.password, 10),
      address
    ];
    pool.query(createUser, values)
      .then((data) => {
        const authUser = data.rows[0];
        const username = authUser.email.split('@')[0];
        const token = generateToken(authUser);
        return response.status(201)
          .json({
            success: true,
            message: 'Sign up is successful',
           token: token
          });
      })
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }

  
}

const { userSignup, userLogin } = UserHandler;

export { userSignup, userLogin };