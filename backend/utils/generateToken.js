import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId}, process.env.JWT_SECRET,{
        expiresIn: '30d'
      })
  
      // set jwt as http only 
      res.cookie('jwt', token, {
        httponly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 1000 // 30 days 
      });
}

export default  generateToken;