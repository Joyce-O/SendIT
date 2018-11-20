import createUser from '../db/sqlQueries';
import bcrypt from 'bcrypt';
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
}

const { userSignup } = UserHandler;

export default userSignup;