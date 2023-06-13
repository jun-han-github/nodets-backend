import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
const connection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
app.use(express.json());
app.use('/api', router);
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