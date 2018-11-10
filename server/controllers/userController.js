import users from '../inMemoryData/users';

class UserController {

  static userSignUp(request, response) {
    const newUser = {
      id: users.length + 1,
      fullName: request.body.fullName,
      email: request.body.email,
      phone: request.body.phone,
      address: request.body.address,
      password: request.body.password,
    };
    users.push(newUser);
    return response.status(201)
      .json({
        newUser,
        message: 'Signup was successful',
      });
  }
}

export default UserController;