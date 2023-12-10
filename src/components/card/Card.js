import React from 'react'
import './Card.css';


const Card = (props) => {
  return (
    <div className='card'>
      <img src={`assets/images/${props.img}`} alt="institute_name" />
      <div className='card-body'>
        <h2>{props.schoolType}</h2>
        <h3>{props.schoolName}</h3>
        <hr></hr>
        <p>{props.status.address}</p>
        <p><strong>Stream: </strong>{props.stream}<span> <strong>{props.passYear}</strong></span></p>
        <p><strong>percentage: </strong>{props.percentage}%</p>
        <p><strong>Course Work: </strong>{props.courseWork}</p>
        <div className='location-container'>
          <img src='location-logo.png' className='location-logo' />
          <a href={props.status.location}>{props.schoolName}</a>
        </div>
        
      </div>
    </div>
  )
}

export default Card