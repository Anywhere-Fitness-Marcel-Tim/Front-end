import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {connect,  useDispatch} from 'react-redux'
import axios from 'axios'
import {loading, success, loggedIn, error, clearError, setToken } from '../actions/index'
import {Button, TextField} from '@mui/material'
import spinner from '../assets/spinner.gif'

const Login = (props) => {
    const { LoggedIn, result, errors, load } = props
    const push = useNavigate();
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        dispatch(clearError())
    }, [])

    const handleInput = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loading())
        axios.post('https://anywherefitness-back-end.herokuapp.com/api/auth/login', credentials)
        .then(resp => {
            console.log(resp)
            dispatch(success(resp))
            localStorage.setItem('token', resp.data.token)
            dispatch(loggedIn())
        }).catch(err => dispatch(error(err))) 
    }


    if(LoggedIn){
        push('/')
    }

    const buttonStyle = {
        padding: '0px',
        width: '2rem',
        height: '1.5rem',
        margin: '1rem'
    }

    const inputStyle = {
        height: '1.5rem'
    }
    return (
        <div className='top-of-page'>
            <h2>Log In</h2>
            <div className='login-card'>
            <form onSubmit={() => handleSubmit}>
                <TextField id="standard-basic" label="Username" variant="standard" name='username' onChange={handleInput} value={credentials.username} />
                <TextField id="standard-basic" label="Password" variant="standard" name='password' onChange={handleInput} value={credentials.password} />
                <Button onClick={handleSubmit} style={buttonStyle} variant='contained'>Login</Button>
            </form>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            {load && <img src={spinner} alt='loading'/> }
            {errors && <p className='error'>Error: invalid credentials</p>}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        LoggedIn: state.isLoggedIn,
        result: state.results,
        errors: state.error.response,
        load: state.loading,
    }
}

export default connect(mapStateToProps, loading)(Login)