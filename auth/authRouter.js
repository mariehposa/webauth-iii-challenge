const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../user/userModel')
const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    db.addUser(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Couldnt register user' + err.message
        })
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    db.getUserBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token: token,
                });
            } else {
                res.status(401).json({
                    message: 'Invalid Credentials'
                })
            }
        })
        .catch(err => {
            res.status(500).json( err.message )
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }
    const options = {
        expiresIn: '1 day'
    }
    const result = jwt.sign(
        payload,
        process.env.SECRET,
        options
    )
    return result;
}

module.exports = router;