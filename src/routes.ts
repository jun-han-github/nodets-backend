import express from 'express';
import { createUser, getAuthenticatedUser, getUsers } from './controllers/userController.js';
import { login, logout } from './controllers/loginController.js';
import { getTopics } from './controllers/topicController.js';
import { getQuestions } from './controllers/questionController.js';

const router = express.Router();

router.get('/auth', getAuthenticatedUser);

router.post('/login', login);
router.post('/logout', logout);

router.get('/users', getUsers);
router.post('/users', createUser);

router.get('/topics', getTopics);

router.get('/questions/:topicTag', getQuestions);

export default router;