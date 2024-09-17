const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const prisma = require('../config/prsima');  
const userModel = require('../model/userModel');  

class AuthUserController {
   async register(req, res) {
    const { userName, userMail, userPhone, userRole, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await userModel.findUserByEmail(userMail);  // Await the user lookup

      if (existingUser) {
        return res.status(409).json({
          message: 'User already registered',
          status: 409,
        });
      }

      // Hash the password
      const hashPass = await bcrypt.hash(password, 10);

      // Create the user
      const user = await userModel.createUser({
        userName,
        userMail,
        userPhone,
        userRole,
        password: hashPass,
      });

      

      if (user) {
        return res.status(200).json({
          message: 'User created successfully!',
          status: 200,
          data: user,
        });
        console.log(user);


        
      }
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error in newUser:', error);

      return res.status(500).json({
        message: 'Something went wrong!',
        status: 500,
        error: error.message || error,  // Sending the error message
      });
    }
  }
}

module.exports = new AuthUserController();
