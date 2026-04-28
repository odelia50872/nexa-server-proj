const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

router.get('/todos/:userId', todosController.getTodoByUserId);
router.post('/todos', todosController.createTodo);
router.put('/todos/:userId', todosController.updateTodo);
router.delete('/todos/:userId', todosController.deleteTodo);

module.exports = router;