const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('./user/userRouter')
const authRouter = require('./auth/authRouter')

const server = express()

server.use(helmet());
server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
    res.json('Working!')
})

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

module.exports = server;