import users from '../inMemoryData/users';

class UserValidator {

  static signupValidator(request, response, next) {
    let {
      fullName, email, phone, address, password
    } = request.body;

    const errors = {};
  
    const validNameChar = /^[a-z ]+$/i;
    if (!fullName|| fullName.length <= 3 && !validNameChar.test(fullName) ) {
      errors.fullName = 'Please enter valid name characters'
    }

    const validEmailChar = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || email.length < 9 && !validEmailChar.test(email) ) {
        errors.email = 'Please enter valid email format'
      }
  
      const foundEmail = users.find(user => user.email === email);

      if (!phone || phone.length < 10 && !/^[0-9]+$/.test(phone)) {
        errors.phone = "Please enter valid phone number"
    }
    
    if (!password || password.length < 4) {
      errors.password = 'Password cannot be empty'
    }
  
    if(JSON.stringify(errors) !== '{}'){
      return response.status(400)
           .json({
               success: false,
               message: "Please make sure to input correct values",
                errors
           });
       }
           
 
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