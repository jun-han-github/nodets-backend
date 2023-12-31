import express from 'express';
import { createUser, getAuthenticatedUser, getUsers } from './controllers/userController.js';
import { login, logout } from './controllers/loginController.js';
import { addTopicToUser, getSearchTopics, getTopics } from './controllers/topicController.js';
import { getQuestions, submitAnswer } from './controllers/questionController.js';
import { getIndustries } from './controllers/industriesController.js';
import { getProfessions } from './controllers/professionsController.js';

const router = express.Router();

router.get('/auth', getAuthenticatedUser);

router.post('/login', login);
router.post('/logout', logout);

router.get('/users', getUsers);
router.post('/users', createUser);

router.get('/industries', getIndustries);
router.get('/professions', getProfessions);

router.get('/topics', getTopics);
router.get('/topics/search', getSearchTopics);
router.post('/topics/add', addTopicToUser);

router.get('/questions/:topicTag', getQuestions);

router.post('/answers', submitAnswer);

export default router;
