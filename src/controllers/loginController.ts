import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';

interface LoginBody {
    email: string;
    password: string;
}

export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email) throw createHttpError(400, "Please provide your email");
        if (!password) throw createHttpError(400, "Please provide a password");

        const existingUser = await UserModel.findOne({ email }).select("+email +password").exec();

        if (!existingUser) {
            throw createHttpError(401, "Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            throw createHttpError(401, "Invalid credentials");
        }

        res.status(201).json(existingUser);
    } catch (error) {
        next(error);
    }
}

export const logout: RequestHandler = async (req, res, next) => {
    req.session.destroy((error) => {
        if (error) {
            next(error);
        } else {
            res.sendStatus(200);
        }
    });
}
