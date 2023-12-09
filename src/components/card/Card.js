import React from 'react'
import './Card.css';


const Card = (props) => {
  return (
    <div className='card'>
      <img src={`assets/images/${props.img}`} alt="institute_name" />
      <div className='card-body'>
        <h2>{props.schoolType}</h2>
        <h3>{props.schoolName}</h3>
        <p>{props.address}</p>
        <p>{props.location}</p>
      </div>
    </div>
  )
}

export default Card