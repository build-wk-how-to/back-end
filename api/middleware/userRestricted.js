require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET || 'idk lol';

function userRestricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (decodedToken.id === Number(req.params.ownerID)){
                req.decodedJwt = decodedToken;
                next();
            }
            else {
                res.status(401).json({message: 'Unauthorized user'})
            }
        })
    } else {
        res.status(401).json({message: 'Unauthorized user'});
    }
}

module.exports = userRestricted;