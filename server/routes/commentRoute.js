const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/comments/:postId', commentController.getCommentsByPostId);
router.post('/comments', commentController.createComment);   
router.put('/comments/:postId', commentController.updateComment);
router.delete('/comments/:postId', commentController.deleteComment);
module.exports = router;    