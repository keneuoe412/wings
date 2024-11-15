// src/pages/Dashboard.js (or wherever you are using the chart)
import React from 'react';
import { Bar } from 'react-chartjs-2'; // Importing the Bar chart component
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


// Registering the necessary components
ChartJS.register(
  CategoryScale,  // This is where the category scale is registered
  LinearScale,    // Linear scale for the y-axis
  BarElement,     // Bar chart element
  Title,          // Title plugin
  Tooltip,        // Tooltip plugin
  Legend          // Legend plugin
);

const Dashboard = () => {
  // Chart data
  const data = {
    labels: ['grilled chicken', 'sandwitch', 'salads'], // The category scale is used for these labels
    datasets: [{
      label: 'My products Dataset',
      data: [65, 59, 80], // Data for the chart
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    }],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Products Data Chart',
      },
    },
    scales: {
      x: {
        type: 'category', // Using the category scale for the x-axis
      },
      y: {
        type: 'linear', // Linear scale for the y-axis
      },
    },
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Bar data={data} options={options} /> {/* This renders the Bar chart */}
    </div>
  );
};

export default Dashboard;

