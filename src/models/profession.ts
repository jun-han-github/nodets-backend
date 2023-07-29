import { InferSchemaType, Schema, model } from "mongoose";

const professionSchema = new Schema({
    tag: { type: String, required: true },
    name: { type: String, required: true, unique: true }
});

export type Profession = InferSchemaType<typeof professionSchema>

export default model<Profession>("Profession", professionSchema);
