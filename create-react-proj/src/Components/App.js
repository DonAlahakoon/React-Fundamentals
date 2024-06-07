import Reac, {useState,useEffect} from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"


const App = () => {

  const [productsState, setProductsState] = useState([])

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then(productsArray => {
      const newProductsState = productsArray.map((product) => {
        return product.title
      })
    setProductsState(newProductsState)
    })

  },[])

  const hasProducts = productsState.length > 0 
  
    return <div>
      <Button>hello world1</Button>
      <Button>hello world2</Button>
      <Button>hello world3</Button>

      {hasProducts? <SearchBar products={productsState}/> : <div> Loading... </div>} 
      
    </div>
  }

  export default App