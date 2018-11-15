import users from '../inMemoryData/users';

class UserValidator {

  static signupValidator(request, response, next) {
    let {
      fullName, email, phone, address, password
    } = request.body;

    const errors = {};
  
    
    if (fullName === undefined || fullName <= 3 ) {
      errors.fullName = 'Full name cannot be empty'
    }

    const fullNameValidCharacters = /^[a-z ]+$/i;
    if (!fullNameValidCharacters.test(fullName)) {
        errors.invalidName = 'full name can only contain alphabets and whitespace'
    }

    email = email.toLowerCase().trim();
    if (email === undefined || email < 9 ) {
        errors.email = 'Email field should not be empty'
      }

      const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!validEmail.test(email)) {
        errors.invalidEmail = 'Your email format is not valid'
      }
  
      const foundEmail = users.find(user => user.email === email);

      if (phone === undefined || phone < 10) {
        errors.phone = "phone number field should not be empty"
    }
    
    const validPhoneNo = /^[0-9]+$/;
    if (!validPhoneNo.test(phone)) {
      errors.invalidPhone = "phone number field accepts only number digits"
    }

    password = password.trim();
    if (password === undefined || password < 4) {
      errors.password = 'Password cannot be empty'
    }
  
    return errors.response.status(400)
            .json({
                success: false,
                message: errors
            });
 
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

    next();
}

}

const {
  signupValidator, getAUserValidator
} = UserValidator;
  
export {
  signupValidator, getAUserValidator
};