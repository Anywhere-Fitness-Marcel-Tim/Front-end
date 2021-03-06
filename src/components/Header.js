import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Button} from '@mui/material'
import {connect} from 'react-redux'

function Header(props) {
    const currentRoute = useLocation()
    const {loggedIn} = props

    console.log('Logged In',loggedIn)

  return (
        <div>
            <header>
            <h2 className='Logo'><Link to='/'>Anywhere fitness</Link></h2>
            <nav>
                <Link className={currentRoute.pathname === '/'? 'current-page' : ''} to='/' >About us</Link>
                <Link className={currentRoute.pathname === '/trainers'? 'current-page' : ''} to='/trainers' >Our Trainers</Link>
                <Link className={currentRoute.pathname === '/quotes'? 'current-page' : ''} to='/quotes' >Request a quote</Link>
                {loggedIn && <Link className={currentRoute.pathname === '/classes'? 'current-page' : ''} to='/classes'>Order a class</Link>}
                <span className='Login-Link'>
                {!loggedIn && <Button variant='contained'><Link to='/login' >Login</Link></Button>}
                </span>
                <span className='Logout-link'>
                {loggedIn && <Link to='/logout' >Logout</Link>}
                </span>
            </nav>
        </header>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Header)