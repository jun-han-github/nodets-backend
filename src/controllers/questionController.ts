import { RequestHandler } from "express";
import QuestionModel from "../models/question.js";
import AnswerModel from "../models/answer.js";
import createHttpError from "http-errors";

export const getQuestions: RequestHandler = async (req, res, next) => {

    const topicTag = req.params.topicTag;

    try {
        const questions = await QuestionModel.find({ topic_tag: topicTag }).exec();

        res.status(200).json(questions);
    } catch (error) {
        next(error);
    }
}

export const submitAnswer: RequestHandler = async (req, res, next) => {

    let existingAnswer = null;
    const { userId, questionId } = req.body;

    try {
        if (!userId || !questionId) throw createHttpError(401, "Missing information in AnswerModel");

        const filter = { userId, questionId };
        const replace = req.body;
        const options = { upsert: true, new: true, returnNewDocument: true }

        existingAnswer = await AnswerModel.findOneAndUpdate(filter, replace, options);

        if (!existingAnswer) {
            existingAnswer = await AnswerModel.create(req.body);
        }

        res.status(201).json(existingAnswer);
    } catch (error) {
        next(error);
    }
}
