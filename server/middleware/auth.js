import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {

  try {

    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({message:"login first !"});

    const token = authHeader.split(' ')[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403).json({message:err.message});
      req.user = user;
      next();
    });
    
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
 
}





