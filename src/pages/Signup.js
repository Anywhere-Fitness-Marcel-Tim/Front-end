import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    let navigate = useNavigate();
    const baseURL = 'https://anywherefitness-back-end.herokuapp.com';

    const [creds, setCreds] = useState({
        username: '',
        password: '',
        user_email: ''
    });

    const [error, setError] = useState({
        errorMessage: '',
    });

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${baseURL}/api/auth/register`, creds)
            .then((resp) => {
                setCreds(resp.data);
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
                setError({ errorMessage: 'INVALID USERNAME/PASSWORD' });
            });
    };

    return (
        <div className='top-of-page'>
            <div className='signup-page-container'>
                <h1>Create an account</h1>
                <h3>Enter your credentials, then click Create Account</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        Username:
                        <input id='username' type='text' name='username' placeholder='Username' value={creds.username} onChange={handleChange} />
                        Password:
                        <input id='password' type='password' name='password' placeholder='Password' value={creds.password} onChange={handleChange} />
                        Email:
                        <input id='user_email' type='email' name='user_email' placeholder='This field is optional' value={creds.user_email} onChange={handleChange} />
                        <button id='submit'>Create Account</button>
                    </form>
                    <p id='error'>{error.errorMessage}</p>
                    <p>
                        Already have an account? <Link to='/login'>Login here!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;