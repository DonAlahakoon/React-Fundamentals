const reactContentRoot = document.getElementById("root")


// Step 1
// const myFirstElement  = React.createElement("ul",null,[
//     React.createElement("li",null,"item1"),
//     React.createElement("li",null,"item2"),
// ])

// Step 2
// const myJSXElement = (
//     <ul>
//         <li>Item1</li>
//         <li>Item2</li>
//     </ul>
// )

// Step 3
const App = () => {
    const myItem = "Rashitha"

    return (
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>{myItem.toUpperCase()}</li>
        </ul>
    )
}

// Essiential line of code to render the output
ReactDOM.render(App(), reactContentRoot) 