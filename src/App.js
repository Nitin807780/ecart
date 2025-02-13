import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Men from './Components/Men';
import Product from './Components/Product';
import Cart from './Components/Cart'; // Importing Cart component
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import OrderSuccess from './Components/Order-succes';
import About from './Components/About';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/categories' element={<Men />} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/cart' element={<Cart />} /> {/* Added Cart route */}
          <Route path='/footer' element={<Footer />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order-success' element={<OrderSuccess/>}/>
          <Route path='/about' element={<About/>}/>
         
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
