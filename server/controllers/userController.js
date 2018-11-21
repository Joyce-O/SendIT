import {createUser, queryUsersByEmail} from '../db/sqlQueries';
import bcrypt, { compareSync } from 'bcrypt';
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
      .then((result) => {
        return response.status(201)
          .json({
            success: true,
            message: 'Sign up is successful',
            values
          });
      })
      .catch(error => console.log(`Incomplete values ${error}`));
  }

  static userLogin(request, response) {
    const emailValue = [request.body.email];
    const errors = {};
    pool.query(queryUsersByEmail, emailValue)
      .then((result) => {
        if (result.rowCount !== 0) {
          const comparePassword = compareSync(request.body.password, result.rows[0].password);
          if (comparePassword) {
            const username = emailValue[0].split('@')[0];
            return response.status(200)
              .json({
                success: true,
                message: `Glad to have you back ${username}`
              });
          }
          errors.password = "Make sure your password is correct"
        }
        if (result.rowCount === 0) {
          errors.email = "Email is not found, please enter correct email or signup"
        }
        if (JSON.stringify(errors) !== '{}') {
          return response.status(400)
            .json({
              success: false,
              message: "Please make sure to input correct values",
              errors
            });
        }
      })
      .catch((error) => {
        response.json({
          success: false,
          // message: "Origin of error"
          message: error.message,
        });
      });
  }
}

const { userSignup, userLogin } = UserHandler;

export { userSignup, userLogin };