require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET || 'idk lol';

function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err){
                res.status(401).json({message: 'Invalid Token'})
            }
            else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({message: 'Invalid Token'});
    }
}

module.exports = restricted;