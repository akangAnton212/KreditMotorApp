var jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const dec = jwt.verify(token, "nodeauthsecret");
        req.userData = dec;
        next();
    }catch(err){
        return res.status(401).json({
            message: "Auth Failed!"
        })
    }
};