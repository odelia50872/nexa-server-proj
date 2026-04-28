const userService = require('../services/userService');

const getUserByName = async (req, res) => {
    try {
        const { name } = req.query;
        const user = await userService.getUserByName(name);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
};

const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await userService.createUser(name);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }   
};

module.exports = {
    getUserByName,
    getUserById,
    createUser
};