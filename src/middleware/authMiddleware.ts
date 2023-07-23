import { RequestHandler } from "express";

export const authenticateUser: RequestHandler = (req, res, next) => {
    if (req.session.userId) next();
    else next('login');
};
