import React from 'react'
import navimg from '../images/Fill 213.png'
const Navbar = () => {
  return (
    <div>
        <nav  className='nav'>
            <img src={navimg} alt="" className='navimg'/><span>my travel journy</span>
        </nav>
            
    </div>
  )
}

export default Navbar