import express, { NextFunction, Request, Response } from 'express';
import createHttpError, { isHttpError } from 'http-errors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes.js';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { seedData } from './data/seed/questions.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

const connection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'default',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: connection
    })
}));
app.use('/api', router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    let message = "An unknown error occurred";
    let statusCode = 500;
    
    if (isHttpError(error)) {
        message = error.message
        statusCode = error.status;
    }

    res.status(statusCode).json({ message });
});

app.use((req, res, next) => {
    next(createHttpError(404, "Page Not Found"))
});

mongoose.connect(connection).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log('Listening to port: ', port);
    });

    seedData();

}).catch(console.error);
