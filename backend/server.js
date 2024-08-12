import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authroutes.js';
import messageRoutes from './routes/messageroutes.js';
import userRoutes from './routes/userroutes.js'; 

import connection from './db/connection.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(PORT, () => {
    connection();
    console.log(`server runing on port ${PORT}`)

});



