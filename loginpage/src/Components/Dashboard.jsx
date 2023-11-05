import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div>
       <Link to='/list/home'> Home</Link>
       <Link to='/list/about'> About</Link>
       <Link to='/list/back'> Back</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Dashboard