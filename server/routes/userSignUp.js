import express from 'express';
import {userSignIn, userSignUp, verifySession} from '../controllers/usersHandler.js'

const router = express.Router();
router.post('/', userSignUp)
router.post('/verifySession', verifySession)
router.post('/login', userSignIn)
export default router
