const todoService = require('../services/todoService');

const createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;
        const userId = req.user.id; 
        const todo = await todoService.createTodo(userId, title, completed);
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create todo' });
    }   
};

const getTodoByUserId = async (req, res) => {   
    try {
        const { id } = req.params;
        const todos = await todoService.getTodosByUserId(id);
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve todos' });
    }   
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const userId = req.user.id;
        const updatedTodo = await todoService.updateTodo(id, userId, title, completed);
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found or unauthorized' });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const deletedTodo = await todoService.deleteTodo(id, userId);
        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found or unauthorized' });
        }   
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }   
};

module.exports = {
    createTodo,
    getTodoByUserId,
    updateTodo,
    deleteTodo
};