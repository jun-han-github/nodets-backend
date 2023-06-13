import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send({ id: 1, name: 'junhan' }).json;
});

app.listen(port, () => {
    console.log('Listening to port: ', port);
});