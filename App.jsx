import React from "react";
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
// import Header from './client/components/Header';
// import Input from './client/components/Input'
// import TVDisplay from './client/components/TVDisplay'
import Home from "./client/components/Home";
import SignUp from './client/components/SignUp'
import SignIn from './client/components/SignIn'

// declare our App and pass in child components 
const App = () =>{
    
    return (
        // <div>
        //     <SignUpForm />
        //     <SignInForm />
        //     <Header />
        //     <Input />
        //     <TVDisplay /> 
        // </div>
        <div>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/Home' element={<Home/>}/>    
        </Routes>
        </div>
    )
}

export default App;