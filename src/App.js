import React, { useState } from "react"

import { Route, Routes, useLocation } from "react-router-dom"

import Base from "./pages/Base" //FIXME:TODO:
import Home from "./pages/Home"
import Order from "./pages/Order"
import PageNotFound from "./pages/PageNotFound"
import Toppings from "./pages/Toppings"
import Header from "./components/Header"
import Modal from "./components/Modal"

import { AnimatePresence } from "framer-motion"

const App =() => {

  const location = useLocation();
  const [pizza, setPizza] = useState({base:"", toppings:[]})
  const [showModal, setShowModal] = useState(false)

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
    <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home/>}/>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza}/>}/>
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza}/>}/>
          <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal}/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App