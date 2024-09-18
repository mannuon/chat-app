const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const prisma = require('../config/prsima');  
const userModel = require('../model/userModel');  

class AuthUserController {

  //  register

   async register(req, res) {
    const { userName, userMail, userPhone, userRole, password } = req.body;

    try {
     
      const existingUser = await userModel.findUserByEmail(userMail);  

      if (existingUser) {
        return res.status(409).json({
          message: 'User already registered',
          status: 409,
          data : user
        });
      }

     
      const hashPass = await bcrypt.hash(password, 10);

    
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
    


        
      }
    } catch (error) {
     
      console.error('Error in newUser:', error);

      return res.status(500).json({
        message: 'Something went wrong!',
        status: 500,
        error: error.message || error,  
      });
    }
  }



  //  Login

    async login(req , res){

      const {userMail , password} =  req.body;
      try {

        const user = await prisma.user.findUnique({
          where: {userMail},
        })

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
          { userId: user.userId },
          process.env.JWT_SECRET,
          { expiresIn: '365d' }
        );


        res.status(200).json({ 
          message : "Login successfully !",
          token : token
         });


        
      } catch (error) {


        res.status(500).json({
          message:'Error in login !',
          error
        })
        
      }
    }



}

module.exports = new AuthUserController();
