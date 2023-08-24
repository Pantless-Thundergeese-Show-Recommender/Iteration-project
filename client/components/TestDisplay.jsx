import React, { useState } from "react";

// const SignUpForm = () =>{
//     return (
//         <h1 className="test">Hello</h1>
//     )
// }

// export default SignUpForm;
// export const SignUpForm = () => {
//     //if arrow function is more than one line, you need a return
//     return (
//         <form className="signUpForm">
//             <div className="formGroup">
//             <label htmlFor="userName">Username</label>
//             <input id="userName" />
//             </div>
//             <div className="formGroup">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//             </div>
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// } 

export const SignUpForm = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    
    const handleChange = e => {
        const { input, value } = e.target
        switch(input){
            case'username':
                setUsername(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                return
        }
    }

    const[usernameError, setUsernameError] = useState('')
    const[passwordError, setPasswordError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setUsernameError(username? '' : 'Username field is required')
        setPasswordError(password ? '' : 'Last Name field is required')
      }

    return (
        <form className="signUpForm" onSubmit={handleSubmit}>
        <div className="formGroup">
        <label htmlFor="username">Username</label>
        <input 
            username="username"
            id="username"
            data-testid="username"
            value={username}
            onChange={handleChange}
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
            onChange={handleChange}
            />
        </div>
        {passwordError && <p>{passwordError} </p>}
        
        <button type="submit">Sign Up</button>
        </form>
    )
    
}