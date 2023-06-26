import { InferSchemaType, Schema, model } from "mongoose";

const topicSchema = new Schema({
    name: { type: String, required: true },
    topic_tag: { type: String, required: true },
    subtopics: [{
        subtopic_tag: { type: String },
        name: { type: String },
    }],
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

export type Topic = InferSchemaType<typeof topicSchema>

export default model<Topic>("Topic", topicSchema);
