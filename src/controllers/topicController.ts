import { RequestHandler } from "express";
import TopicModel from '../models/topic.js';
import UserModel from '../models/user.js';

export const getTopics: RequestHandler = async (req, res, next) => {

    try {
        const topics = await TopicModel.find().exec();

        res.status(200).json(topics);
    } catch (error) {
        next(error);
    }
}

export const addTopicToUser: RequestHandler = async (req, res, next) => {
    const { userId, topic } = req.body;

    try {
        const user = await UserModel.find({ userId }).exec();

    } catch (error) {
        next(error);
    }
}