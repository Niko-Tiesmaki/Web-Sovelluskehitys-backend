import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authenticationToken = (req, res, next) => {
    console.log('authenticationToken' ,req.headers);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log('token: ', token);
    if (token == null){
        return res.sendStatus(401);
    }
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch (error){
        console.log("Error", error);
    }
};

export {authenticationToken};