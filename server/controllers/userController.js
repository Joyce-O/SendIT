import { createUser, queryUsersByEmail } from '../db/sqlQueries';
import bcrypt, { compareSync } from 'bcrypt';
import {generateToken} from '../middlewares/authentication';
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
        console.log(data.rows);
        const authUser = data.rows[0];
        const username = authUser.email.split('@')[0];
        const token = generateToken(authUser);
        return response.status(201)
          .json({
            success: true,
            message: 'Sign up is successful',
            yourToken: token
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
            const authUser = result.rows[0];
            const username = variable[0].split('@')[0];
            const token = generateToken(authUser);
            return response.status(200)
              .json({
                success: true,
                message: `Glad to have you back ${username}`,
                yourToken: token
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
          message: error.message
        });
      });
  }
}

const { userSignup, userLogin } = UserHandler;

export { userSignup, userLogin };