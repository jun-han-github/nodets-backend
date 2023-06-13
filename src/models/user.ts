import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: [true, 'This email address is taken.'] },
    password: { type: String, required: true },
}, { timestamps: true });

type User = InferSchemaType<typeof userSchema>

export default model<User>("User", userSchema);
