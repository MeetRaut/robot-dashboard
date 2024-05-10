import React from 'react'
import Sidebar from './Sidebar';
import Content from './Content';
import Stats from './Stats';
import '../App.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className='dashboard--content'>
        <Content />
        <Stats />
        </div>
    </div>
  )
}

export default Dashboard;