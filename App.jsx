import React from "react";
import Header from './client/components/Header';
import Input from './client/components/Input'
import TVDisplay from './client/components/TVDisplay'
//import SignUp from './client/components/SignUp' //MUI
import { SignUpForm } from './client/components/TestDisplay'

// declare our App and pass in child components 
const App = () =>{


    return (
        <div>
            <SignUpForm />
            <Header />
            <Input />
            <TVDisplay /> 
            
        </div>
    )
}

export default App;