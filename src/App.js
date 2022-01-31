import React, { useState } from "react"

import { Route, Routes } from "react-router-dom"

import Base from "./pages/Base" //FIXME:TODO:
import Home from "./pages/Home"
import Order from "./pages/Order"
import PageNotFound from "./pages/PageNotFound"
import Toppings from "./pages/Toppings"
import Header from "./components/Header"
const App =() => {

  const [pizza, setPizza] = useState({base:"", toppings:[]})

  const addBase = (base) => {
    setPizza({...pizza, base})
  }

  const addTopping = (topping) => {
    let newTopping = []
    if(!pizza.toppings.includes(topping)){
      newTopping = [...pizza.toppings, topping]
    } else {
      newTopping = pizza.toppings.filter(item => item !== topping)
    }
    setPizza({...pizza, toppings: newTopping})
  }

  return(
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza}/>}/>
        <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza}/>}/>
        <Route path="/order" element={<Order pizza={pizza}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App