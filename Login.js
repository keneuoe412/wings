// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
      setSuccessMessage('Login successful!');
      console.log(response.data);
      // Redirect to a different page or store the user info in a global state (e.g., Redux)
    } catch (err) {
      setError('Error logging in: ' + err.response.data.message);
    }
  };

  // Handle add user
  const handleAddUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/add', {
        username,
        password,
        email,
        role,
      });

      setSuccessMessage('User added successfully!');
      // Clear the form
      setUsername('');
      setPassword('');
      setEmail('');
      setRole('');
    } catch (err) {
      setError('Error adding user: ' + err.response.data.message);
    }
  };

  // Handle update user
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!userId || !username || !password) {
      setError('User ID, username, and password are required.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:5000/api/users/update', {
        id: userId,
        username,
        password,
        email,
        role,
      });

      setSuccessMessage('User updated successfully!');
      // Clear the form
      setUserId('');
      setUsername('');
      setPassword('');
      setEmail('');
      setRole('');
    } catch (err) {
      setError('Error updating user: ' + err.response.data.message);
    }
  };

  // Handle delete user
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!userId) {
      setError('User ID is required to delete.');
      return;
    }

    try {
      const response = await axios.delete('http://localhost:5000/api/users/delete', {
        data: { id: userId },
      });

      setSuccessMessage('User deleted successfully!');
      // Clear the form
      setUserId('');
    } catch (err) {
      setError('Error deleting user: ' + err.response.data.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>User Management</h2>

      {/* Login Form */}
      <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
        <h3>Login</h3>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white' }}>
          Login
        </button>
      </form>

      {/* Add User Form */}
      <form onSubmit={handleAddUser} style={{ marginBottom: '20px' }}>
        <h3>Add User</h3>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role (optional)"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white' }}>
          Add User
        </button>
      </form>

      {/* Update User Form */}
      <form onSubmit={handleUpdateUser} style={{ marginBottom: '20px' }}>
        <h3>Update User</h3>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            placeholder="User ID"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ffc107', color: 'black' }}>
          Update User
        </button>
      </form>

      {/* Delete User Form */}
      <form onSubmit={handleDeleteUser} style={{ marginBottom: '20px' }}>
        <h3>Delete User</h3>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            placeholder="User ID"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white' }}>
          Delete User
        </button>
      </form>

      {/* Error and Success Messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Login;
