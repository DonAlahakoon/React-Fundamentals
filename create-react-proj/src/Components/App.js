import React from "react"
import CountButton from "./CountButton/CountButton"

const App = () => {
    const myItem = "mike"
  
    return (
      <div>
         <CountButton incrementBy={1} buttonColor={"Blue"}>This is a standalone component</CountButton>
         <CountButton incrementBy={50} buttonColor={"green"}/>
         <CountButton incrementBy={500} buttonColor={"pink"}/>
      </div>
    )
  }

  export default App