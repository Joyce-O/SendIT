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
        success: true,
        message: 'Signup was successful',
      });
  }

  static getAllUsers(request, response) {
    const allUsers = users.reverse();

    return response.status(200)
        .json({
            success: true,
            message: 'All users',
            allUsers
        });
}

static fetchSpecificUser(request, response) {
  const { isExistUser } = request.body;

  return response.status(200)
      .json({
          success: true,
          message: 'Fetched order successfull!',
          isExistUser
      });
}

}
const {
  userSignUp, getAllUsers, fetchSpecificUser
} = UserController;

export {
  userSignUp, getAllUsers, fetchSpecificUser
};