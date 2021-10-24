const express = require('express');
const router = express.Router();

//  @route       GET api/users
//  @desc        Register User
//  @access      Public
router.post('/',(req,res)=>{
    console.log(req.body,'humayon test2');  //data being sent to the route
    res.send('User Route');
});

module.exports = router;