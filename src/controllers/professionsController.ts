import { RequestHandler } from "express";
import ProfessionModel from '../models/profession.js';

export const getProfessions: RequestHandler = async (req, res, next) => {

    try {
        const topics = await ProfessionModel.find().exec();

        res.status(200).json(topics);

    } catch (error) {
        next(error);
    }
}