import { InferSchemaType, Schema, model } from "mongoose";

const industrySchema = new Schema({
    tag: { type: String, required: true },
    name: { type: String, required: true, unique: true }
});

export type Industry = InferSchemaType<typeof industrySchema>

export default model<Industry>("Industry", industrySchema);
