/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./index.css"

const DestinationCard = ({destination}) => {
    
  return (
    <div className='destination-card'>
      <img src={destination.image} alt={destination.name} />
      <h2>{destination.name}</h2>
      <span>{destination.location}</span>
      <span>{destination.description}</span>
      <h4>{destination.price}</h4>
      
    </div>
  )
}

export default DestinationCard;
