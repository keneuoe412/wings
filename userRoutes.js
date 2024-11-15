// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { addUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');

// Route to login
router.post('/login', loginUser);

// Route to add a new user
router.post('/add', addUser);

// Route to update an existing user
router.put('/update', updateUser);

// Route to delete a user
router.delete('/delete', deleteUser);

module.exports = router;
