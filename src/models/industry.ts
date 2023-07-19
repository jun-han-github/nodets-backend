import { InferSchemaType, Schema, model } from "mongoose";

const industrySchema = new Schema({
    industry: [
        { name: String, required: true, unique: true }
    ],
});

export type Industry = InferSchemaType<typeof industrySchema>

export default model<Industry>("Industry", industrySchema);
