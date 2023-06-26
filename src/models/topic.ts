import { InferSchemaType, Schema, model } from "mongoose";

const topicSchema = new Schema({
    topic_tag: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

export type Topic = InferSchemaType<typeof topicSchema>

export default model<Topic>("Topic", topicSchema);
