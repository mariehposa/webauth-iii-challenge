const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./userModel')
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
    
})

module.exports = router;