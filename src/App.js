import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Signup from './Components/Signup';
import BankAccountsLis from './Components/BankAccountList'; 
import AddBankAccount from './Components/AddBankAccount';
import BankAccountInfo from './Components/BankAccountInfo';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row bg-warning'>
        <Header />
      </div>
      <div className='row'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/list' element={<BankAccountsLis/>} />
          <Route path='/update' element={<AddBankAccount/>}/>
          <Route path='/info' element={<BankAccountInfo/>}/>
          <Route path='/add' element={<AddBankAccount/>}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
