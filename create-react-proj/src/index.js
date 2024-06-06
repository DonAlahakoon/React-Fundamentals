import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App.js"
import './Components/styles/global.css'
import { createRoot } from "react-dom/client"


const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(<App />)