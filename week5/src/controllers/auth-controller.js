
import { selectUserByNameAndPassword } from "../models/user-model.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const postLogin = async (req, res) => {
    const {username, password} = req.body;
    if (!username) {
      return res.status(401).json({message: 'Username missing.'});
    }
    const user = await selectUserByNameAndPassword(username, password);
    if (user) {
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res.json({message: 'login ok', user, token});
    } else {
      res.status(401).json({message: 'Bad username/password.'});
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