// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { addProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Route to add a new product
router.post('/add', addProduct);

// Route to update an existing product
router.put('/update', updateProduct);

// Route to delete a product
router.delete('/delete', deleteProduct);

module.exports = router;
