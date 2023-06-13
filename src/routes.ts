import express from 'express';
import { createUser, getAuthenticatedUser, getUsers } from './controllers/userController.js';
import { login, logout } from './controllers/loginController.js';

const router = express.Router();

router.get('/', getAuthenticatedUser);
router.get('/users', getUsers);
router.post('/users', createUser);
router.post('/login', login);
router.post('/logout', logout);

export default router;