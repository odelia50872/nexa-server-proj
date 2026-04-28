const commentService = require('../services/commentService');
const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;               
    const comment = await commentService.createComment(postId, userId, content);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }         
};

const getCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await commentService.getCommentsByPostId(postId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};  

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.id;
    const updatedComment = await commentService.updateComment(id, userId, content);
    if (!updatedComment) {
      return res.status(404).json({ error: 'Comment not found or unauthorized' });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update comment' });
  } 
};

const deleteComment = async (req, res) => {     
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const deletedComment = await commentService.deleteComment(id, userId);
      if (!deletedComment) {
        return res.status(404).json({ error: 'Comment not found or unauthorized' });
      }
      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete comment' });
    }
  };

module.exports = {
  createComment,
  getCommentsByPostId,
  updateComment,
  deleteComment
};             
