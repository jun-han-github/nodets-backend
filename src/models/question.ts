import { InferSchemaType, Schema, model } from "mongoose";

const questionSchema = new Schema({
    topic_tag: { type: String, required: true},
    question: { type: String, required: true},
    question_type: { type: String, required: true},
    options: { type: Array, required: true },
}, { timestamps: true });

export type Question = InferSchemaType<typeof questionSchema>

export default model<Question>("Question", questionSchema);