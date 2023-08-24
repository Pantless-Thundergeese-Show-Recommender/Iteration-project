// import React, { useState } from "react";

// export const SignInForm = () => {
//     const[username, setUsername] = useState('')
//     const[password, setPassword] = useState('')
    
//     const handleChange = e => {
//         const { input, value } = e.target
//         switch(input){
//             case'username':
//                 setUsername(value)
//                 break
//             case 'password':
//                 setPassword(value)
//                 break
//             default:
//                 return
//         }
//     }

//     const[usernameError, setUsernameError] = useState('')
//     const[passwordError, setPasswordError] = useState('')

//     const handleSubmit = e => {
//         e.preventDefault()
//         setUsernameError(username? '' : 'Sign in failed, Please try again')
//         setPasswordError(password ? '' : 'Sign in failed, Please try again')
//       }

//     return (
//         <form className="signUpForm" onSubmit={handleSubmit}>
//         <div className="formGroup">
//         <label htmlFor="username">Username</label>
//         <input 
//             username="username"
//             id="username"
//             data-testid="username"
//             value={username}
//             onChange={handleChange}
//             />
//         </div>
//         {usernameError && <p>{usernameError} </p>}
        
//         <div className="formGroup">
//         <label htmlFor="password">Password</label>
//         <input 
//             type="password"
//             password="password"
//             id="password"
//             data-testid="password"
//             value={password}
//             onChange={handleChange}
//             />
//         </div>
//         {passwordError && <p>{passwordError} </p>}
        
//         <button type="submit">Sign In</button>
//         </form>
//     )
    
// }


