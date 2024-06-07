import React,{useState,useEffect} from 'react'
import './CountButton.css'

const CountButton = (props) => {


    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = ()=>{
        setCurrentCount(currentCount + props.incrementBy)    
    }

    useEffect(() => {
        if(currentCount > 10){
            alert("The count is over 10")
        }
    },[currentCount])

    return (
        <div>
        <button onClick={handleClick}>{"Increment by  " + props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
    </div>
    )
}

export default CountButton