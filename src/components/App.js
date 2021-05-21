import React from 'react'
import CountButton from './CountButton/CountButton'


// This one is for counter color

const App=()=>{
    return (
        <div>
        <CountButton incrementBy={5} buttonColor={"blue"}/> 
        <CountButton incrementBy={10} buttonColor={"green"} />
        <CountButton incrementBy={50} buttonColor={"Yellow"} />
        </div>
    )
    }

export default App;

