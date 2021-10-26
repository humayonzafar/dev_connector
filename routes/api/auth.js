const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//  @route       GET api/auth
//  @desc        User Route
//  @access      Public
router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(res.locals.httpsStatusCodes.INTERNAL_SERVER).send('Server Error');
    }
});

//  @route       POST post/auth
//  @desc        Authenticate user and get jwt token
//  @access      Public
router.post('/',  [
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').exists()
], async (req, res) => {

    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(res.locals.httpsStatusCodes.BAD_REQUEST).json({errors: [{'msg': "Invalid Credentials"}]});
        }

        const isMath = await bcrypt.compare(password,user.password);
        if(!isMath){
            return res.status(res.locals.httpsStatusCodes.BAD_REQUEST).json({errors: [{'msg': "Invalid Credentials"}]});
        }

        const payload = {
            user:{
                id: user.id
            }
        }
        jwt.sign(payload,
            config.get('jwtSecret'),
            {expiresIn: 3600},
            (err,token)=>{
                if(err){
                    throw err;
                }
                res.json({token});
            });
    } catch (err) {
        console.log(err);
        res.status(res.locals.httpsStatusCodes.INTERNAL_SERVER).send('Server Error');
    }
});

module.exports = router;