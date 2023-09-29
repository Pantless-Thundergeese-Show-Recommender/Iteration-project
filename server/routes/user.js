const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/', userController.verifyUser, (req, res) => {
    return res.status(200).json(res.locals.verified);
})

router.post('/signup', userController.signup, (req, res) => {
    console.log('in /signup in user.js')
    return res.status(200).json(res.locals.newUser);
})

module.exports = router;