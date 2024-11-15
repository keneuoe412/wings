// backend/controllers/productController.js
const db = require('../config/database'); // MySQL connection

// Add product
const addProduct = (req, res) => {
  const { name, description, price, quantity } = req.body;

  if (!name || !price || !quantity) {
    return res.status(400).json({ message: 'Name, price, and quantity are required.' });
  }

  const query = 'INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description, price, quantity], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding product', error: err });
    }
    res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
  });
};

// Update product
const updateProduct = (req, res) => {
  const { id, name, description, price, quantity } = req.body;

  if (!id || !name || !price || !quantity) {
    return res.status(400).json({ message: 'ID, name, price, and quantity are required.' });
  }

  const query = 'UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?';
  db.query(query, [name, description, price, quantity, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating product', error: err });
    }
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

// Delete product
const deleteProduct = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Product ID is required.' });
  }

  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting product', error: err });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
};
