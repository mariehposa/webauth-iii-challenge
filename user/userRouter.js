const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../user/userModel')
const restricted = require('../auth/restrictedMiddleware')
const router = express.Router()

router.get('/', restricted, ( req, res ) => {
    // if (req.decodedToken.roles.includes('student')) {
        const { department } = req.decodeToken
        db.getUsers({ department })
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(400).json({
                message: "You don't have the right role to access this information" + err.message
            })
        })
    // }
});

module.exports = router;