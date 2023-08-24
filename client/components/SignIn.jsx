import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

 const SignIn = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const getUsername = e => {
        setUsername(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    };

    const[usernameError, setUsernameError] = useState('')
    const[passwordError, setPasswordError] = useState('')

    const handleSubmitError = e => {
        e.preventDefault()
        setUsernameError(username? '' : 'Please try again')
        setPasswordError(password ? '' : 'Please try again')
      }

    const handleSubmit = async(e) => {
        e.preventDefault()
    
        try { 
            console.log('username1', username)
            console.log('password2', password)
            const result = await axios.post('/User', 
            {username: username, password: password});
            console.log('result',result);
            if(result.data === true){    
                navigate("/Home");
            }else{
                navigate('/SignUp')
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="signInForm">
        <div className="formGroup">
        <label htmlFor="username">Username</label>
        <input 
            username="username"
            id="username"
            data-testid="username"
            value={username}
            onChange={getUsername}
            />
        </div>
        {usernameError && <p>{usernameError} </p>}
        
        <div className="formGroup">
        <label htmlFor="password">Password</label>
        <input 
            type="password"
            password="password"
            id="password"
            data-testid="password"
            value={password}
            onChange={getPassword}
            />
        </div>
        {passwordError && <p>{passwordError} </p>}
        
        <button onClick={handleSubmit}>Sign In</button>
        </div>
    )
    
}

export default SignIn