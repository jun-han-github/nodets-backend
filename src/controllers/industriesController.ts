import { RequestHandler } from "express";
import IndustryModel from '../models/industry.js';

export const getIndustries: RequestHandler = async (req, res, next) => {

    try {
        const industries = await IndustryModel.find().exec();

        res.status(200).json(industries);

    } catch (error) {
        next(error);
    }
}