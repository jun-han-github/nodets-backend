import { RequestHandler } from 'express';
import UserModel from '../models/user.js';


export const getUsers: RequestHandler = async (req, res, next) => {
    try {
        const users = await UserModel.find().exec();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

export const createUser: RequestHandler = async (req, res, next) => {
    const { email, name, password } = req.body;

    try {
        const newUser = await UserModel.create({
            email, name, password
        });

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}
