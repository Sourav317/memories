const express = require('express');
const router = express.Router();
const User_sch = require('./../models/users');

router.post('/signup',(req,res) =>{
    const User = new User_sch({
        fullName : req.body.fullName,
        city : req.body.city,
        email : req.body.email,
        password : req.body.password
    })
    User.save()
    .then(data =>{
        res.status(201).json(data);
    })
    .catch(err => {
        res.json(`problem at creating user :- ${err}`);
    })
})


module.exports = router;
