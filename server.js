const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('./user/userRouter')

const server = express()

server.use(helmet());
server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
    res.json('Working!')
})

server.use('/api/users', userRouter);

module.exports = server;