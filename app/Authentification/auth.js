const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
     // recover token from headers 
    const token = req.headers.authorization.split(' ')[1];
    //console.log(token)
    // allows to retrieve the information contained in the token
    const decodedToken = jwt.verify(token, 'ULTRA_RANDOM_TOKEN_SECRET');
    //console.log(decodedToken)
    const uuidUser = decodedToken.uuidUser;
    console.log(uuidUser)
    //We check that the uuidUser sent from the front corresponds to the one contained in the token
    if (req.body.uuidUser !== uuidUser) {
      throw 'Invalid user ID';
    } else {
        //The desired function is performed
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};