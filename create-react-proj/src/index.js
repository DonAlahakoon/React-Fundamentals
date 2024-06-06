import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App.js"
import './Components/styles/global.css'


//getting the div whose id is root
const reactContentRoot = document.getElementById("root")

ReactDOM.render(<App/>,reactContentRoot)