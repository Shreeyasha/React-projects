import React,{useState} from 'react'
import "./CountButton.css"


const CountButton=(props)=>{
    console.log(props.incrementBy)
    const [currentCount,setCurrentCount]= useState(0);

const handleClick =()=>{
        setCurrentCount(currentCount + props.incrementBy)
}

const buttonStyle= {
    background:props.buttonColor,
    border: "1px solid black",
    borderRadius: "10px"

}

return(
    <div> 
 <button style={buttonStyle}onClick={handleClick}> + {props.incrementBy} </button>
        <div className={'count-display'}>You've clicked {currentCount} times </div>
    </div>

)
}

export default CountButton;