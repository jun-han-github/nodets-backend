import { InferSchemaType, Schema, model } from "mongoose";

const topicSchema = new Schema({
    domain: { type: String, required: true },
    subject: { type: String, required: true },
    name: { type: String, required: true },
    topic_tag: { type: String, required: true },
    subtopics: [{
        subtopic_tag: { type: String },
        name: { type: String },
    }],
});

export type Topic = InferSchemaType<typeof topicSchema>

export default model<Topic>("Topic", topicSchema);
