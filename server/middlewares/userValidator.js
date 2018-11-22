import pool from '../db/connection';
import { queryUsersByEmail, queryUsersByPhone } from '../db/sqlQueries';

class UserValidator {

  static signupValidator(request, response, next) {
    let {
      name, email, phone, password, address
    } = request.body;

    const errors = {};
    let emailExist = "";
    let phoneExist = "";

    const validNameChar = /^[a-z ]+$/i;
    if (!name || name.length <= 3 && !validNameChar.test(name)) {
      errors.name = 'Please enter valid name characters'
    }

    const validEmailChar = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || email.length < 9 && !validEmailChar.test(email)) {
      errors.email = 'Please enter valid email format'
    }

    pool.query(queryUsersByEmail, [email])
      .then((data) => {
        if (data.rowCount !== 0) {
          errors.emailExist = "Email already exist, please Signup with a new email"
        }

        if (!phone || phone.length < 10 && !/^[0-9]+$/.test(phone)) {
          errors.phone = "Please enter valid phone number"
        }
        pool.query(queryUsersByPhone, [phone])
          .then((result) => {
            if (result.rowCount !== 0) {
              errors.phoneExist = "Phone number already exist, please Signup with a new phone number"
            }

            if (!password || password.length < 4) {
              errors.password = 'Password cannot be empty'
            }
            if (!address || address.length < 10 && !/^[a-z0-9]+$/i.test(address)) {
              errors.phone = "Address should be 10 to 100 alphanumeric characters"
            }

            if (JSON.stringify(errors) !== '{}') {
              return response.status(400)
                .json({
                  success: false,
                  message: "Please make sure to input correct values",
                  errors
                });
            }
            request.body.name = name;
            request.body.email = email;
            request.body.phone = phone;
            request.body.password = password;
            request.body.address = address;
            next();
          });
      })
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }

  static loginUserValidator(request, response, next) {
    let { email, password } = request.body;
    let emailExist = "";
    const errors = {};

    const validEmailChar = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || email.length < 9 && !validEmailChar.test(email)) {
      errors.email = 'Please enter valid email format'
    }

  
        if (!password || password.length < 4) {
          errors.password = 'Password cannot be empty'
        }

        if (JSON.stringify(errors) !== '{}') {
          return response.status(400)
            .json({
              success: false,
              message: "Please make sure to input correct email and password",
              errors
            });
        }

        request.body.email = email;
        request.body.password = password;
        next();
      })
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }

}

const {
  signupValidator, loginUserValidator
} = UserValidator;

export {
  signupValidator, loginUserValidator
};
