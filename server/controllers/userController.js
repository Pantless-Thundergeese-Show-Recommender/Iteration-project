const User = require('../models/userModel')
const userController = {}
const bcrypt = require('bcrypt');

userController.signup = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username: username});
        if (user) {
            console.log("user exist")
            res.locals.newUser = {message: "User already exist"}
        } else {
            console.log("user not exist")
            console.log('received from the front',username,password)
            const newUser = await User.create( {username: username, password: password} );
            res.locals.newUser = {message: "User created", newUser: newUser};
        }
        console.log('hey')
        return next();
    }
    catch(err) {return next(err)};
}

userController.verifyUser = async (req, res, next) => {
   console.log("enter verifyUser")
    try {
        const {username, password} = req.body;

        console.log('username', username)

        const user = await User.findOne({username: username});
        console.log('user',user.password)

        const match = await bcrypt.compare(password, user.password);
        console.log('match', match)
        if (match === true) {
            res.locals.verified = true;
        } else {
            res.locals.verified = false; 
        }
        return next();
    } catch(err) {
        return next(err);
    }
}

module.exports = userController;