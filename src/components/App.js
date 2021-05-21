import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App=()=>{
    return (
        <div>
            <SearchBar product={[
    "toothpaste",
    "toothbrush",
    "top",
    "mouse",
    "jacket",
]}
     /> 

  <SearchBar product ={[
        "cat",
        "dog",
        "rat",
        "monkey",

  ]}
        />
        </div>
    )
    }

export default App;

