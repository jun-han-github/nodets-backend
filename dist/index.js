import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const port = process.env.PORT;
const connection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority`;
app.get('/', (req, res) => {
    res.send({ id: 1, name: 'junhan' }).json;
});
mongoose.connect(connection).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log('Listening to port: ', port);
    });
}).catch(console.error);
//# sourceMappingURL=index.js.map