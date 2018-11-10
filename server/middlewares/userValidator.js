import users from '../inMemoryData/users';

class UserValidator {

  static signupValidator(request, response, next) {
    let {
      fullName, email, phone, address, password
    } = request.body;

    console.log(request.body);
    if (fullName === undefined) {
      return response.status(406)
        .json({
          message: 'Please input your fullname',
        });
    }

    if (fullName === '') {
      return response.status(406)
        .json({
          message: 'fullName field cannot be empty',
        });
    }

    fullName = fullName.trim();
    if (fullName.length < 4 || fullName.length > 20) {
      return response.status(406)
        .json({
          message: 'fullName should be 4 to 20 characters long',
        });
    }

    const fullNameValidCharacters = /^[a-z ]+$/i;
    if (!fullNameValidCharacters.test(fullName)) {
      return response.status(406)
        .json({
          message: 'fullName can only contain alphabets and whitespace',
        });
    }

    if (email === undefined) {
        return response.status(406)
          .json({
            message: 'Please input your email address',
          });
      }
      if (email === '') {
        return response.status(406)
          .json({
            message: 'Email field cannot be empty',
          });
      }
      email = email.toLowerCase().trim();
      const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!validEmail.test(email)) {
        return response.status(406)
          .json({
            message: 'Your email format is not valid',
          });
      }
      
      if (email.length < 10 || email.length > 40) {
        return response.status(400)
            .json({
                status: "Unsuccessful!",
                message: "Email should be 10 to 40 characters long"
            });
    }
  
      const foundEmail = users.find(user => user.email === email);
      if (foundEmail) {
        return res.status(409)
          .json({
            message: 'Your email is received! sign in',
          });
      }

      if (phone === undefined) {
        return response.status(400)
            .json({
                status: "Unsuccessful!",
                message: "phone number field should not be undefined"
            });
    }

    if (phone === '') {
        return response.status(400)
            .json({
                status: "Unsuccessful!",
                message: "Please enter phone number"
            });
    }

    
    phone = phone.trim();
    const validPhoneNo = /^[0-9]+$/;
    if (!validPhoneNo.test(phone)) {
        return response.status(400)
            .json({
                status: "Unsuccessful!",
                message: "phone number field accepts only number digits"
            });
    }


    if (phone.length < 10 || phone.length > 12) {
        return response.status(400)
            .json({
                status: "Unsuccessful!",
                message: "phone number should be 10 to 12 digits long"
            });
    }

    if (password === undefined) {
      return response.status(406)
        .json({
          message: 'Please input your password',
        });
    }

    if (password === '') {
      return response.status(406)
        .json({
          message: 'Password field cannot be empty',
        });
    }
    password = password.trim();

    if (password.length < 4 || password.length > 16) {
      return res.status(406)
        .json({
          message: 'Password should be 4 to 16 characters long',
        });
    }
    if (password.includes(' ')) {
      return response.status(406)
        .json({
          message: 'Remove whitespace from your password',
        });
    }
    request.body.fullName = fullName;
    request.body.email = email;
    return next();
  }

}

export default UserValidator;