import express from 'express';

import {getMe, postLogin} from '../controllers/auth-controller.js';
import {authenticationToken} from '../middleware/authentication.js';


const authRouter = express.Router();

authRouter.route('/me').get(authenticationToken, getMe);

authRouter.post('/login', postLogin);

export default authRouter;
