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
        res.status(500).json(`problem at creating user :- ${err}`);
    })
})

router.post('/login',async (req, res) => {
	const User = await User_sch.findOne({
		email: req.body.email,
        password: req.body.password
	})

	if (!User) {
		res.json( { success : false,status: 'error', error: 'Invalid login' });
	}
    else{
        res.status(200).json({
            success : true,
            message : "Successfully Logged in",
            User_data : User
        })
    }
}
    )

module.exports = router;
