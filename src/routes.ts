import express from 'express';
import { createUser, getUsers } from './controllers/UserController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('<h2>Home page</h2>');
});


router.get('/users', getUsers);
router.post('/users', createUser);

export default router;