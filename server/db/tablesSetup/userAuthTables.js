import pool from '../connection';

const createUsersTable = `DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    name CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(50) UNIQUE NOT NULL,
    phone CHARACTER VARYING(13) UNIQUE NOT NULL,
    password CHARACTER VARYING(255) NOT NULL,
    address CHARACTER VARYING(100) NOT NULL,
    registered TIMESTAMP NOT NULL DEFAULT (NOW()),
    is_admin BOOL NOT NULL DEFAULT (false)
   
)`;

class UserTableHandler {
  static usersTable() {
    const create = pool.query(createUsersTable)
      .then(result =>  result)
      .catch(error => response.status(500)
      .json({
        success: false,
        message: error.message
      }));
      }
}

const { usersTable } = UserTableHandler;

export default usersTable;