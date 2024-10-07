import React from 'react';
import StatsHeader from './StatsHeader';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import '../styles/stats.css'

const Stats = () => {
  return (
    <div className='profile'>
      <StatsHeader/>
      <Chart1/>
      <Chart2/>
    </div>
  )
}

export default Stats;