import React from 'react';
import {BiHome, BiSolidReport} from 'react-icons/bi';
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            
            <h2>ERIC Robotics</h2>
        </div>

        <div className='menu--list'>
            <a href="/" className='item'>
                <BiHome className='icon'/>
                dashboard
            </a>
            <a href="/report" className='item'>
                <BiSolidReport className='icon'/>
                Report
            </a>

        </div>
    </div>
  )
}

export default Sidebar;