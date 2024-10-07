import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import '../styles/report.css';

const ReportContent = () => {
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

    // Initialize Bar Chart
    const barChartCtx = document.getElementById('robot-bar-chart');
    const barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'Power Consumption',
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

    // Initialize Pie Chart
    const pieChartCtx = document.getElementById('robot-pie-chart');
    const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
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
      barChart.destroy();
      pieChart.destroy();
    };
  }, []);

  return (
    <div>
      <div className='content--header'>
        <h1 className='header--title'>Report</h1>
      </div>
      <div className="charts-container">
        <div className="chart">
          <h2>Weekly Power Consumption</h2>
          <canvas id="robot-bar-chart" width="400" height="400"></canvas>
        </div>
        <div className="chart">
          <h2>Weekly Robot Usage</h2>
          <canvas id="robot-pie-chart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default ReportContent;
