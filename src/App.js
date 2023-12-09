import React from 'react'
import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import data from './data/InstituteData'

import './App.css'

const cards = data.map(values => {
  return (
    <Card
      schoolName = {values.schoolName}
      schoolType = {values.schoolType}
      passYear = {values.passYear}
      stream = {values.stream}
      address = {values.status.address}
      location = {values.status.location}
      img = {values.img} 
    />
  )
})



const App = () => {
  return (
    <div className='App'>
        <Navbar />
        {cards}
    </div>
  )
}

export default App