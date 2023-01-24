import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import ItemOverview from './Pages/ItemOverview';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import CartItem from './Pages/CartItem';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/itemview' element={<ItemOverview />}/>
          <Route path='/cart' element={<CartItem />}/>
        </Routes>
    </Router>
  );
};

export default App;