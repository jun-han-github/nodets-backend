import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    industry: { type: String },
    profession: { type: String },
    topics: [{
        topic: { type: String, required: true },
        topic_tag: { type: String, required: true },
        answered: { type: [String], ref: 'Topic' },
    }],
}, { timestamps: true });

export type User = InferSchemaType<typeof userSchema>

export default model<User>("User", userSchema);
