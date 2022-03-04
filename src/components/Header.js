import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Button} from '@mui/material'
function Header() {
    const currentRoute = useLocation()
  return (
        <div>
            <header>
            <h2 className='Logo'><Link to='/'>Anywhere fitness</Link></h2>
            <nav>
                <Link className={currentRoute.pathname === '/'? 'current-page' : ''} to='/' >About us</Link>
                <Link className={currentRoute.pathname === '/trainers'? 'current-page' : ''} to='/trainers' >Our Trainers</Link>
                <Link className={currentRoute.pathname === '/quotes'? 'current-page' : ''} to='/quotes' >Request a quote</Link>
                <span className='Login-Link'>
                <Button variant='contained'><Link to='/login' >Login</Link></Button>
                </span>
                <span className='Logout-Link'>
                <Link to='/logout' >Logout</Link>
                </span>
            </nav>
        </header>
        </div>
  )
}

export default Header