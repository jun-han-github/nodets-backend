import { RequestHandler } from "express";
import TopicModel from '../models/topic.js';

export const getTopics: RequestHandler = async (req, res, next) => {

    try {
        const topics = await TopicModel.find().exec();

        res.status(201).json(topics);
    } catch (error) {
        next(error);
    }
}