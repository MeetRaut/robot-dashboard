import React from 'react'
import Sidebar from './Sidebar';
import Content from './Content';
import Stats from './Stats';
import '../App.css';

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <Sidebar className='w-1/4 bg-gray-800 text-white' />
      <div className='dashboard--content w-3/4 p-6'>
        <Content />
        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;