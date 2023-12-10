import React from 'react'
import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import data from './data/InstituteData'
import StickyItems from './components/navbar/Sidebar'

import './App.css'

const cards = data.map(values => {
  return (
    <Card
      key = {values.id}
      {...values} 
    />
  )
})


const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <StickyItems />
        {cards}
    </div>
  )
}

export default App