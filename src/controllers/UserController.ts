import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/user.js';


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserModel.find().exec();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}