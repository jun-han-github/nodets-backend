import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
import UserModel from './models/user.js';
const app = express();
const port = process.env.PORT;
const connection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
app.get('/', async (req, res, next) => {
    try {
        const users = await UserModel.find().exec();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error, req, res, next) => {
    console.error(error);
    let message = "An unknown error occurred";
    if (error instanceof Error)
        message = error.message;
    res.status(500).json({ message });
});
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});
mongoose.connect(connection).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log('Listening to port: ', port);
    });
}).catch(console.error);
//# sourceMappingURL=index.js.map