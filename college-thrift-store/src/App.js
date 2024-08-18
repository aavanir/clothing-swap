// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Sell from './pages/Sell';
import Messages from './pages/Messages';
import MessagesHistory from './components/MessagePage/MessagesHistory';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import EditProfile from './components/AccountPage/EditProfile';
import NoPage from './pages/NoPage';
import { AuthProvider } from './components/HomePage/Auth';
import Purchases from './components/AccountPage/Purchases';
import Checkout from './pages/Checkout';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     Aavani
    //   </header>
    // </div>
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:userId/:contactId" element={<MessagesHistory />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/edit-profile" element={<EditProfile />} />
          <Route path="/account/purchases" element={<Purchases />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
