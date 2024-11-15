// src/pages/Products.js
import React, { useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productId, setProductId] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle Add Product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!name || !price || !quantity) {
      setError('Name, price, and quantity are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', {
        name,
        description,
        price,
        quantity,
      });

      setSuccessMessage('Product added successfully!');
      // Clear the form
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
    } catch (err) {
      setError('Error adding product: ' + err.response.data.message);
    }
  };

  // Handle Update Product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!productId || !name || !price || !quantity) {
      setError('Product ID, name, price, and quantity are required.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:5000/api/products/update', {
        id: productId,
        name,
        description,
        price,
        quantity,
      });

      setSuccessMessage('Product updated successfully!');
      // Clear the form
      setProductId('');
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
    } catch (err) {
      setError('Error updating product: ' + err.response.data.message);
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!productId) {
      setError('Product ID is required to delete.');
      return;
    }

    try {
      const response = await axios.delete('http://localhost:5000/api/products/delete', {
        data: { id: productId },
      });

      setSuccessMessage('Product deleted successfully!');
      // Clear the form
      setProductId('');
    } catch (err) {
      setError('Error deleting product: ' + err.response.data.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Product Management</h2>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} style={{ marginBottom: '20px' }}>
        <h3>Add Product</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Product Name"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product Description"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Product Price"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            placeholder="Product Quantity"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white' }}>
          Add Product
        </button>
      </form>

      {/* Update Product Form */}
      <form onSubmit={handleUpdateProduct} style={{ marginBottom: '20px' }}>
        <h3>Update Product</h3>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
            placeholder="Product ID"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Product Name"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product Description"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Product Price"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            placeholder="Product Quantity"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ffc107', color: 'black' }}>
          Update Product
        </button>
      </form>

      {/* Delete Product Form */}
      <form onSubmit={handleDeleteProduct}>
        <h3>Delete Product</h3>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
            placeholder="Product ID"
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white' }}>
          Delete Product
        </button>
      </form>

      {/* Error and Success Messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Products;
