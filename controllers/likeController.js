const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res) => {
    try{

        const {post,user} = req.body;
        const like = new Like({

            post,user,
        })

        const savedLikes = await like.save();

        const updatedPost =await Post.findByIdAndUpdate(post,{$push: {Likes: savedLikes._id}},{new: true}).populate("Likes").exec();
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
 
        return res.status(500).json({
            error:"Error while liking Post"
        });
    }
}





exports.dummyLink = (req,res) => {
    res.send("this is your dummy page")
};