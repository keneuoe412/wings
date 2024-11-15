import React, { useState } from 'react';
import axios from 'axios';

const StockManagement = ({ productId }) => {
  const [transaction, setTransaction] = useState({ type: 'add', quantity: 0 });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/stock/record', { 
        productId,
        ...transaction,
        quantity: parseInt(transaction.quantity) // Ensure quantity is an integer
      });
      alert('Transaction recorded successfully');
    } catch (error) {
      console.error('Error recording transaction:', error);
      alert('Error recording transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Manage Stock</h2>
      <label>
        Type:
        <select name="type" value={transaction.type} onChange={handleChange}>
          <option value="add">Add Stock</option>
          <option value="deduct">Deduct Stock</option>
        </select>
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={transaction.quantity} onChange={handleChange} min="0" />
      </label>
      <button type="submit">Record Transaction</button>
    </form>
  );
};

export default StockManagement;
