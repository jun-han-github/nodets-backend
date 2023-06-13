import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

type User = InferSchemaType<typeof userSchema>

export default model<User>("User", userSchema);
