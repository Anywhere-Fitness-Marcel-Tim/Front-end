import React from 'react'
import {Link, useLocation} from 'react-router-dom'
function Header() {
    const currentRoute = useLocation()
  return (
        <header>
            <h2 className='Logo'><Link to='/'>Anywhere fitness</Link></h2>
            <nav>
                <Link className={currentRoute.pathname === '/'? 'current-page' : ''} to='/' >About us</Link>
                <Link className={currentRoute.pathname === '/trainers'? 'current-page' : ''} to='/trainers' >Our Trainers</Link>
                <Link className={currentRoute.pathname === '/quotes'? 'current-page' : ''} to='/quotes' >Request a quote</Link>
                <span className='Login-Link'>
                <Link to='/login' >Login</Link>
                </span>
            </nav>
        </header>
  )
}

export default Header