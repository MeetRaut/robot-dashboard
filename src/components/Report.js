import React from 'react'
import Sidebar from './Sidebar';
import ReportContent from './ReportContent';

const Report = () => {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className='dashboard--content'>
        <ReportContent/>
        
        </div>
    </div>
  )
}

export default Report;