import { InferSchemaType, Schema, model } from "mongoose";

const topicSchema = new Schema({
    domain_id: { type: String, required: true},
    domain: { type: String, required: true },
    subject: { type: String, required: true },
    subject_tag: { type: String, required: true },
    topic: { type: String, required: true },
}, { timestamps: true });

export type Topic = InferSchemaType<typeof topicSchema>

export default model<Topic>("Topic", topicSchema);
