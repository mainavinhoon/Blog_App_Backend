const Comment = require("../models/commentModel");
const Like = require("../models/likeModel");
const Post = require("../models/postModel");


exports.createPost = async (req,res) => {

    try{

        const {title,body} = req.body;

        const post = new Post ({
            title,body
        });

        const savedPost = await post.save();
         res.json({ 
            post:savedPost,
         });


    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating Post"
        });

    }
}

exports.getAllPosts = async (req,res) => {
    try{

        const posts = await Post.find().populate(Like).populate(Comment).exec();
        res.json({
            posts,
        })

    }
    catch{

        return res.status(400).json({
            error:"Error while fetching Post"
        });
    }
}