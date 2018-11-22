import pool from '../connection';
import bcrypt from 'bcrypt';

const sql = 'insert into users (name, email, phone, password,  address, is_admin ) values ($1, $2, $3, $4, $5, $6)';
const password = bcrypt.hashSync('admintrue', 10);
const values = ['Admin', 'owner@gmail.com', '2345670000', 'SendIT head Office', password, true];

class InsertAdminHandler {
  static createAdmin() {
    const create = pool.query(sql, values)
    .then(result =>  result)
    .catch(error => response.status(500)
    .json({
      success: false,
      message: error.message
    }))
    
    return create;
  }
}

const { createAdmin } = InsertAdminHandler;

export default createAdmin;
