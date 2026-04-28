const postService = require('../services/postService');

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.id; 
        const post = await postService.createPost(userId, title, content);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};


const getPostByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.getPostById(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve post' });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const userId = req.user.id;
        const updatedPost = await postService.updatePost(id, userId, title, content);
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found or unauthorized' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const deletedPost = await postService.deletePost(id, userId);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found or unauthorized' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};

module.exports = {
    createPost,
    getPostById,
    updatePost,
    deletePost
};