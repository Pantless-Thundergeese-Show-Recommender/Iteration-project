import React, { useState } from "react";
import axios from 'axios';

export const SignUpForm = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    
    const getUsername = e => {
        setUsername(e.target.value)
        // const { input, value } = e.target
        // switch(input){
        //     case 'username':
        //         setUsername(value)
        //         break
        //     case 'password':
        //         setPassword(value)
        //         break
        //     default:
        //         return
        // }
    }
    const getPassword = e => {
        setPassword(e.target.value)
    };

    const[usernameError, setUsernameError] = useState('')
    const[passwordError, setPasswordError] = useState('')

    const handleSubmitError = e => {
        e.preventDefault()
        setUsernameError(username? '' : 'Username field is required')
        setPasswordError(password ? '' : 'Password field is required')
      }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try { 
            console.log('before axios')
            console.log('username', username)
            console.log('password', password)
            const result = await axios.post('/User/signup', 
            {username: username, password: password});
            console.log('after axios')
            if(result){
                console.log('result',result)
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="signUpForm">
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
        
        <button onClick={handleSubmit}>Sign Up</button>
        </div>
    )
    
}