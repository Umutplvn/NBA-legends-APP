import CardContainer from "./components/CardContainer/CardContainer"
import Header from "./components/Header/Header"
import reset from "./reset.module.css"
import { useState } from "react"

function App() {
  const[searchValue, setSearchValue]=useState("")
  console.log(searchValue);

  return (
    <div className="App">

        <Header setSearchValue={setSearchValue}/>
        <CardContainer searchValue={searchValue.toLowerCase()}/>


    </div>
  )
}

export default App
