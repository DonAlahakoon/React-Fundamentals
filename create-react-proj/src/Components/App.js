import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const products = [
  "toothpaste",
  "toothbrush",
  "mouthfloss",
  "mouthwash",
  "dental pick",
] 

const products2 = [
  "carrots",
  "apples",
  "bananas",
  "grapes",
  "oranges",
]

const App = () => {
  
    return <div>
      <SearchBar products={products}/>
      <SearchBar products={products2}/>
      <CountButton incrementBy={5}  buttonColor="lightblue"/>
    </div>
  }

  export default App