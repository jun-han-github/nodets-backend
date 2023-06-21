import { InferSchemaType, Schema, model } from "mongoose";

const AnswerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    question: { type: String, ref: 'Question', required: true },
    isCorrect: { type: Boolean, required: true },
    correctAnswer: { type: Array, required: true },
    wrongAnswer: { type: Array },
    timeTaken: { type: Number, required: true }
}, { timestamps: true });

export type Answer = InferSchemaType<typeof AnswerSchema>

export default model<Answer>("Answer", AnswerSchema);