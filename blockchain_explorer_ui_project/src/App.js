import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Transactions from './components/Transactions';
import Addresses from './components/Addresses';
import Wallet from './components/Wallet';
import React from 'react';
import Home from './components/Home';
import Reciept from './components/Reciept';
function App() {
  return (
<React.StrictMode>
  <BrowserRouter>
  <Navigation />
  <Routes>
    <Route path='/' element={<Home />} exact/>
    <Route path='/transactions' element={<Transactions />}/>
    <Route path='/addresses' element={<Addresses />}/>
    <Route path='/wallet' element={<Wallet />}/>
    <Route path='/reciept' element={<Reciept />}/>
  </Routes>
  </BrowserRouter>
</React.StrictMode>
  );
}

export default App;
