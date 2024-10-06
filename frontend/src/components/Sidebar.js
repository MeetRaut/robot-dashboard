import React from 'react';
import { BiHome, BiSolidReport } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <h2>ERIC Robotics</h2>
      </div>

      <div className='menu--list'>
        <Link to="/dashboard" className='item'> {/* Use Link instead of a */}
          <BiHome className='icon'/>
          Dashboard
        </Link>
        <Link to="/report" className='item'> {/* Use Link instead of a */}
          <BiSolidReport className='icon'/>
          Report
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;