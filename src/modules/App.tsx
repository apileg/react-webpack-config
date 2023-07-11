import React from "react"
import Counter from "./Counter"
import catImage from "../assets/cat.jpg"
import "../styles/App.css"

const App = () => {
  return (
    <div>
      <p className="style">Hi there!</p>
      <Counter />
      <img
        src={catImage}
        alt="A cute cat"
      />
    </div>
  )
}

export default App
