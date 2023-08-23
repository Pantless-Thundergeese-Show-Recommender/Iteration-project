import React from "react";
import Header from './client/components/Header';
import Input from './client/components/Input'
import TVDisplay from './client/components/TVDisplay'

// declare our App and pass in child components 
const App = () =>{
    return (
        <div>
            <Header />
            <Input />
            <TVDisplay />
        </div>
    )
}

export default App;