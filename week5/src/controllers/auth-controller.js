import { login } from "./user-controller.js";
import { selectUserByNameAndPassword } from "../models/user-model.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const postLogin = async (req, res) => {
    console.log('postLogin', req.body);
    const user = await login(req.body);
    if (user) {
        const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '24h'});
        return token;
    }else {
        res.sendStatus(401);
    }
};

const getMe = async (req, res) =>{
    console.log('getMe', req.user);
    if (req.user){
        res.json({message: 'token ok', user: req.user});
    }else {
        res.sendStatus(401);
    }
};


export {postLogin, getMe};