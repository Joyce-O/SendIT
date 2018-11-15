import users from '../inMemoryData/users';

class UserValidator {

  static signupValidator(request, response, next) {
    let {
      fullName, email, phone, address, password
    } = request.body;

    const errors = {};
  
    const nameValidChar = /^[a-z ]+$/i;
    if (fullName === undefined || fullName <= 3 && !nameValidChar.test(fullName) ) {
      errors.fullName = 'Please enter valid name characters'
    }

    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email === undefined || email < 9 && !validEmail.test(email) ) {
        errors.email = 'Please enter valid email format'
      }
  
      const foundEmail = users.find(user => user.email === email);

      if (phone === undefined || phone < 10 && !/^[0-9]+$/.test(phone)) {
        errors.phone = "Please enter valid phone number"
    }
    
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