import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='content'>
        <div className='home-heading'>
         Welcome to Food's <br/> kitchen
        </div>
        <div>
            <Link to='/menu'>
            <button type="button" className='menu-btn'>go to menu</button>
            </Link>
            
       
        </div>
      
    </div>
  )
}

export default Home
