// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes'); // Assuming you have user routes
const db = require('./config/database'); // Your MySQL connection setup

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend to communicate with backend
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/api/products', productRoutes); // Product management routes
app.use('/api/users', userRoutes); // User management routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
