import { RequestHandler } from "express";
import QuestionModel from "../models/question.js";
import AnswerModel from "../models/answer.js";
import UserModel from "../models/user.js";
import createHttpError from "http-errors";

// error TS2345: Argument of type '{ topic_tag: any; answered: any[]; }' is not assignable to parameter of type '{ topic: string; topic_tag: string; answered: string[]; }'.

export const getQuestions: RequestHandler = async (req, res, next) => {

    const topic_tag = req.params.topicTag;
    
    try {
        let questions = {};

        const user = await UserModel.findOne({ 'topics.topic_tag': topic_tag }, { 'topics.$': 1, _id: 0 }).exec();
        // we dont want to get the questions that are in user.topic[topic_tag]
        
        if (user) {
            questions = await QuestionModel.find({ _id: { $nin: user.topics[0].answered }, topic_tag }).exec();
        }

        res.status(200).json(questions);
    } catch (error) {
        next(error);
    }
}

export const submitAnswer: RequestHandler = async (req, res, next) => {

    let existingAnswer = null;
    const { userId, questionId, topic, topic_tag } = req.body;

    try {
        if (!userId || !questionId) throw createHttpError(401, "Missing information in AnswerModel");

        const user = await UserModel.findOne({ _id: userId }).exec();

        if (user) {
            if (req.body.isCorrect) {
                const target_topic = user.topics.find((topic) => topic.topic_tag === topic_tag);
                if (target_topic) {
                    target_topic.answered.push(questionId);
                } else {
                    user.topics.push({ topic, topic_tag, answered: [questionId] });
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
