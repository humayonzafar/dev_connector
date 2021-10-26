const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator/check');
const User = require('../../models/User');

//  @route       POST api/users
//  @desc        Register User
//  @access      Public
router.post('/', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please add a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(res.locals.httpsStatusCodes.BAD_REQUEST).json({errors: errors.array()});
        }
        const {name, email, password} = req.body;

        try {
             const userExists = await User.findOne({email});
             if(userExists){
                 return res.status(res.locals.httpsStatusCodes.BAD_REQUEST).json({errors: [{'msg': "User Already Exists"}]});
             }

            //get users gravatar
             const avatar = gravatar.url(email,{
                s: '200',
                r: 'pg',
                d: 'mm'
             });

             let user = new User({
                 name,
                 email,
                 avatar,
                 password
             });

            //encrypt password
             const salt = await bcrypt.genSalt(10);
             user.password = await bcrypt.hash(password,salt);

             await user.save();
            //return jsonwebtoken

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
          console.log(err, 'err');
          res.status(res.locals.httpsStatusCodes.INTERNAL_SERVER).send();
        }
    }
);

module.exports = router;