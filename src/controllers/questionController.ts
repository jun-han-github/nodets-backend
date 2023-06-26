import { RequestHandler } from "express";
import QuestionModel from "../models/question.js";
import AnswerModel from "../models/answer.js";
import UserModel from "../models/user.js";
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
    const { userId, questionId, topic_tag } = req.body;

    try {
        if (!userId || !questionId) throw createHttpError(401, "Missing information in AnswerModel");

        const user = await UserModel.findOne({ _id: userId }).exec();

        if (user) {
            if (req.body.isCorrect) {
                const target_topic = user.topics.find((topic) => topic.topic_tag === topic_tag);
                if (target_topic) {
                    target_topic.answered.push(questionId);
                } else {
                    user.topics.push({ topic_tag, answered: [questionId] });
                }
                user.save();
            }
        }

        const filter = { userId, questionId };
        const replace = req.body;
        const options = { upsert: true, returnNewDocument: true }

        existingAnswer = await AnswerModel.findOneAndUpdate(filter, replace, options);

        res.status(201).json(existingAnswer);
    } catch (error) {
        next(error);
    }
}
