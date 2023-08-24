import React from 'react'
import Header from "./Header"
import Input from "./Input"
// import Recommendation from "./Recommendation"
import TVDisplay from "./TVDisplay"

const Home = () => {
    return(
        <div>
            <Header />
            <Input />
            {/* <Recommendation /> */}
            <TVDisplay />
        </div>
    )
}

export default Home;