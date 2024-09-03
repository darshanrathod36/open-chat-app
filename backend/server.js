import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authroutes.js';
import messageRoutes from './routes/messageroutes.js';
import userRoutes from './routes/userroutes.js'; 

import connection from './db/connection.js';
import { app, server } from './socket/Socket.js';



dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
    connection();
    console.log(`server runing on port ${PORT}`)

});



