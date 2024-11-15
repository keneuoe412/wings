// backend/controllers/userController.js

const bcrypt = require('bcrypt');
const db = require('../config/database'); // MySQL connection

// Add user
const addUser = async (req, res) => {
  const { username, password, email, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
  db.query(query, [username, hashedPassword, email, role], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding user', error: err });
    }
    res.status(201).json({ message: 'User added successfully', userId: result.insertId });
  });
};

// Update user
const updateUser = async (req, res) => {
  const { id, username, password, email, role } = req.body;

  if (!id || !username || !password) {
    return res.status(400).json({ message: 'ID, username, and password are required.' });
  }

  // Hash password if updated
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'UPDATE users SET username = ?, password = ?, email = ?, role = ? WHERE id = ?';
  db.query(query, [username, hashedPassword, email, role, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating user', error: err });
    }
    res.status(200).json({ message: 'User updated successfully' });
  });
};

// Delete user
const deleteUser = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'User ID is required.' });
  }

  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting user', error: err });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  });
};

// Login
const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Login successful', userId: user.id, username: user.username });
  });
};

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  loginUser,
};
