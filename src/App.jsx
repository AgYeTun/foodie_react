import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './Detail'
import './index.css'
import Meal from './Meal'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className='container mx-auto relative'>
        <Nav/>
        <Routes>
          <Route path='/' element= {<Meal/>} />
          <Route path='/detail/:id' element= {<Detail/>} />
        </Routes>
      </div> 
    </Router>
  )
}

export default App