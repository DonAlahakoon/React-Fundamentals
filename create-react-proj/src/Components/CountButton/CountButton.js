import React,{useState} from 'react'
import './CountButton.css'

const CountButton = (props) => {


    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = ()=>{
        setCurrentCount(currentCount + props.incrementBy)    
    }

    const buttonStyle = {
        backgroundColor: props.buttonColor,
        borderRadius: "10px"
    }
    /* 
    color: blue,
    border-radius: 10px 
     */

    return <div>
        <button style={buttonStyle} onClick={()=> {handleClick()}}>{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
    </div>
}

export default CountButton