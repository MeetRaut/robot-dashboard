import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import '../styles/chart.css';

const Chart1 = () => {
  const [robotData, setRobotData] = useState([]);

  useEffect(() => {
    // Generate random robot data
    const generateRandomData = () => {
      const data = [];
      for (let i = 0; i < 7; i++) {
        data.push(Math.floor(Math.random() * 100));
      }
      return data;
    };

    // Initialize Chart.js
    const ctx = document.getElementById('robot-chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM '],
        datasets: [{
          label: 'Power Consumption Data',
          data: [10, 55, 30, 80, 45, 60, 70],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Update chart data when component mounts
    setRobotData(generateRandomData());

    // Update chart data every second (for demonstration)
    const interval = setInterval(() => {
      setRobotData(generateRandomData());
    }, 1000);

    // Cleanup interval and chart when component unmounts
    return () => {
      clearInterval(interval);
      chart.destroy();
    };
  }, []);

  return (
    <div className='chart--box'>
      <h2>Avg Power Consumption</h2>
      <canvas id="robot-chart" width="300" height="200"></canvas>
    </div>
  );
};

export default Chart1;