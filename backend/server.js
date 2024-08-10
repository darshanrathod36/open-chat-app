import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authroutes.js';
import connection from './db/connection.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    connection();
    console.log(`server runing on port ${PORT}`)

});



