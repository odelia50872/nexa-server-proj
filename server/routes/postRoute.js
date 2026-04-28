const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');    

router.get('/posts/:userId', postController.getPostByUserId);
router.post('/posts', postController.createPost);   
router.put('/posts/:userId', postController.updatePost);
router.delete('/posts/:userId', postController.deletePost);

module.exports = router;