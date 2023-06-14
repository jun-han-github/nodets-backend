import createHttpError from "http-errors";
import { User } from "../models/user.js";
import { Model } from "mongoose";

export async function checkDuplicateEmail(model: Model<User>, email: string) {

    const existingEmail = await model.findOne({ email }).select("+email").exec();

    if (existingEmail) {
        throw createHttpError(401, "Email address has been taken.");
    } else {
        return 'OK';
    }
}