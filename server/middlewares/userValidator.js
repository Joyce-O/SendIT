import users from '../inMemoryData/users';

class UserValidator {

  static signupValidator(request, response, next) {
    let {
      fullName, email, phone, address, password
    } = request.body;

    const errors = {};
  
    
    if (fullName === undefined || fullName <= 3 ) {
      errors[fullName] = response.status(406)
        .json({
          success: false,
          message: 'Full name cannot be empty',
        });
    }

    // fullName = fullName.trim();
    const fullNameValidCharacters = /^[a-z ]+$/i;
    if (!fullNameValidCharacters.test(fullName)) {
      errors[fullName] = response.status(406)
        .json({
          success: false,
          message: 'full name can only contain alphabets and whitespace',
        });
    }

    email = email.toLowerCase().trim();
    if (email === undefined || email < 9 ) {
        errors[email] = response.status(406)
          .json({
            success: false,
            message: 'Email field should not be empty',
          });
      }

      const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!validEmail.test(email)) {
        errors[email] = response.status(406)
          .json({
            success: false,
            message: 'Your email format is not valid',
          });
      }
  
      const foundEmail = users.find(user => user.email === email);
      if (foundEmail) {
        errors[email] = response.status(409)
          .json({
            success: true,
            message: 'Your email is received!',
          });
      }

      if (phone === undefined || phone < 10) {
        return response.status(400)
            .json({
                success: false,
                message: "phone number field should not be empty"
            });
    }
    
    const validPhoneNo = /^[0-9]+$/;
    if (!validPhoneNo.test(phone)) {
        errors[phone] = response.status(400)
            .json({
                success: false,
                message: "phone number field accepts only number digits"
            });
    }

    password = password.trim();
    if (password === undefined || password < 4) {
      errors.json({
          message: 'Password cannot be empty',
        });
    }
return   error.response.status(400)
            .json({
                success: false,
                message: "",
                errors
            });

    // request.body.fullName = fullName;
    // request.body.email = email;
 
  return errors;
    next();
  }

  static getAUserValidator(request, response, next) {
    let {userId} = request.params;

    const isExistUser = users.find(users => users.id === Number(userId));
    console.log(isExistUser);
    if (!(isExistUser)) {
        return response.status(404)
            .json({
                success: false,
                message: 'Sorry! User does not exist'
            });
    }

    request.body.isExistUser = isExistUser;
    // console.log(request.body + 90);
    next();
}

}

const {
  signupValidator, getAUserValidator
} = UserValidator;
  
export {
  signupValidator, getAUserValidator
};