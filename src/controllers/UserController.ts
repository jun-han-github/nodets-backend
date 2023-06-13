import { RequestHandler } from 'express';
import UserModel from '../models/user.js';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    try {
        if (!authenticatedUserId) {
            throw createHttpError(401, 'User not authenticatd');
        }

        const user = await UserModel.findById(authenticatedUserId).select("+email").exec();
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }
}

interface SignUpBody {
    name: string;
    email: string;
    password: string;
}

export const getUsers: RequestHandler = async (req, res, next) => {
    try {
        const users = await UserModel.find().exec();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

export const createUser: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
    const { email, name, password } = req.body;

    try {
        if (!email || !name || !password) {
            throw createHttpError(400, 'Missing fields');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            email, name, password: hashedPassword
        });

        req.session.userId = newUser._id;

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}
