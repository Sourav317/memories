const express = require('express');
const router = express.Router();
const user_cont = require('../controllers/user_cont');
const post_cont = require('../controllers/post_cont');


//For User 
router.post('/signup',user_cont.signup);
router.post('/login',user_cont.login);


//For Posts
router.get('/getallPost',post_cont.getallpost);
router.post('/createPost',post_cont.createPost);

module.exports = router;
