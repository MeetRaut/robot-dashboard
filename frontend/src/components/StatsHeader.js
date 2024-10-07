import React from 'react'
import { IoStatsChartSharp } from "react-icons/io5";

const StatsHeader = () => {
  return (
    <div className='profile--header'>
        <h2 className='header--title'>STATS</h2>
        <IoStatsChartSharp className='stat--icon'/>
    </div>
  )
}

export default StatsHeader;