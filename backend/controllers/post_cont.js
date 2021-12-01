const Post_sch = require('../models/Post');

module.exports.getallpost = async(req,res) =>{
    try{
       const posts =  await Post_sch.find();
       res.status(200).json({
           length : posts.length,
           success : true,
           post : posts
       })
    }
    catch(error){
        res.status(404).json({
            success : false,
            error : error
        })
    }
}


module.exports.createPost = async (req,res) =>{
    //res.send('To create post');
    const data = req.body;
    try{
    const post = new Post_sch({
        Creator : req.body.Creator,
        Title : req.body.Title,
        Tags : req.body.Tags,
        SelectedFile : req.body.SelectedFile
    })

    await post.save();
    res.status(201).json({
        success : true,
        data : post
    })
}
    catch(err){
        res.status(500).json({
            success : false,
            error : err.message
        })
    }
}