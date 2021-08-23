import React from 'react'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import {useState} from 'react';
function App() {
  const [showCartList, setshowCartList] = useState(false)
  function handleShow(){
    setshowCartList(!showCartList);
  }
  return (
    <div>
      <Header show={handleShow}/>
      <Categories/>
      {showCartList&&<Cart />}
      <Products/>
      <Footer/>
    </div>
  )
}

export default App






