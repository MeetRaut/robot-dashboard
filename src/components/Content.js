import React from 'react'
import ContentHeader from './ContentHeader'
import Card from './Card'
import RoboList from './RoboList';
import '../styles/content.css';


const Content = () => {
  return (
    <div className='content'>
      <ContentHeader/>
      <Card/>
      <RoboList/>
    </div>
  )
}

export default Content;