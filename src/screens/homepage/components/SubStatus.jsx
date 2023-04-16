import React from 'react'
import './SubStatusCard.css'

const SubStatus = ({paperName, duration}) => {
  return (
    <div className='status container mx-auto sm:justify-between justify-evenly flex flex-wrap'>
        <h1>Paper Name: {paperName}</h1>
        <h1>Duration: {duration}</h1>
    </div>
  )
}

export default SubStatus