import React from 'react'
import arc1 from '../assets/arc1.png'
import panther from '../assets/panther.png'
import viewPoint from '../assets/viewPoint.png'


const robotType = [
    {
        title: "ARC-1",
        Image: arc1,
    },
    {
        title: "Panther-E",
        Image: panther,
    },
    {
        title: "View Point",
        Image: viewPoint,
    }
]

const Card = () => {
  return (
    <div className='card--container'>
        {robotType.map((item) => (
            <div className='card'>
                <img src={item.Image} alt={item.title} />
                <div className='card--title'>{item.title}</div>
            </div>
        ))}
    </div>
  )
}

export default Card;