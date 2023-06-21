import { RequestHandler } from "express";
import QuestionModel from "../models/question.js";

export const getQuestions: RequestHandler = async (req, res, next) => {

    const topicTag = req.params.topicTag;

    try {
        const questions = await QuestionModel.find({ topic_tag: topicTag }).exec();

        res.status(200).json(questions);
    } catch (error) {
        next(error);
    }
}