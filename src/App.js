import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import HomeLogin from './Pages/HomeLogin';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AboutUs from './Pages/AboutUs';
import CartItem from './Pages/CartItem';
import OverView from './components/OverView';
import ProductDetail from './Pages/ProductDetail';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/cart' element={<CartItem/>}/>
          <Route path='/overview' element={<OverView/>}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/homelogin' element={<HomeLogin/>}/>
        </Routes>
    </Router>
  );
};

export default App;