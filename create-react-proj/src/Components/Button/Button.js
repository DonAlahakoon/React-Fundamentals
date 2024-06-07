import React from 'react'

const Button = (props) => {
    return (
        <div style={{ color: "red", fontSize: "20px", border: "1px solid black", padding: "10px", margin: "10px", width: "200px", textAlign: "center" }}>
            {props.children}
            </div>
    )
}

export default Button