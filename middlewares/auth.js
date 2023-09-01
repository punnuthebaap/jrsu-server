const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token){
        return res.status(403).json({message: 'auth-token missing'})
    }
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, "Made_By_Nihal", (err, user)=> {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function generateAccessToken(username){
    return jwt.sign({data: username}, "Made_By_Nihal", {
        expiresIn: "1h",
    });
}

module.exports = {
    authenticateToken,
    generateAccessToken
}