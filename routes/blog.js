const express = require("express");
const router = express.Router();


const {dummyLink, likePost} = require("../controllers/LikeController");
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");
router.get("/dummyLink",dummyLink);
router.get("/posts",getAllPosts);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.post("/likes/like",likePost);
module.exports = router;
